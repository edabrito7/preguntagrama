/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import {  fireEvent, render, screen } from '@testing-library/react'
import TextInput from '.'

 describe('<TextInput/>', () => {
     const props = {
        label: 'Usuario',
        id : 'user',
        name: 'user',
        placeholder: '@user',
        handleChange: jest.fn(),
        handleBlur: jest.fn()
     }
     beforeEach(() => {
        render(<TextInput {...props}/>)
     })
     it('Renders textInput', () => {
         const input = screen.getByPlaceholderText(props.placeholder)
         expect(input).toBeInTheDocument()
     })


     it('Test handlChange Function', () => {
        const input = screen.getByPlaceholderText(props.placeholder)
        expect(props.handleChange).not.toHaveBeenCalled()
        fireEvent.change(input, {target: {value: 'Jane'}})
        expect(props.handleChange).toHaveBeenCalledTimes(1)
        fireEvent.change(input, {target: {value: 'Jane Doe'}})
        expect(props.handleChange).toHaveBeenCalledTimes(2)

     })
     it('Test handlBlur Function', () => {
        const input = screen.getByPlaceholderText(props.placeholder)
        expect(props.handleBlur).not.toHaveBeenCalled()
        fireEvent.blur(input, {target: {value: 'Jane'}})
        expect(props.handleBlur).toHaveBeenCalledTimes(1)

     })
 })