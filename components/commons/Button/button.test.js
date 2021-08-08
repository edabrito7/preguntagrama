/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from '../Button'


describe('<Button/>', () => {
    const onClick = jest.fn()
    const texto = 'Test'
    beforeEach(() => {
        render(<Button onClick={onClick}>{texto}</Button>)
    })
    it('Button is rendered', () => {
        const button = screen.getByText(texto)
        expect(button).toBeInTheDocument()
    })
    it('Button OnClick function works', () => {
        const button = screen.getByText(texto)
        expect(onClick).not.toHaveBeenCalled()
        fireEvent.click(button)
        expect(onClick).toHaveBeenCalled()
    })
})