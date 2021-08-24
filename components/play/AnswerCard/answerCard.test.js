/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import AnswerCard from '../AnswerCard'
import { TimerProvider } from 'hooks/useTimer'

describe('<AnswerCard/>', () => {
    const onClick = jest.fn()
    beforeEach(() => {
        jest.useFakeTimers()
    })

    it('It renders', () => {
        const answer = 'Answer 1'
        const { getByText } = render(<TimerProvider><AnswerCard answer={answer} id={1}/></TimerProvider>)
        const answerCard = getByText(answer)
        expect(answerCard).toBeInTheDocument()
    })

    it('Dispatch Stop', () => {
        const answer = 'Answer 2'
        const { getByText } = render(<TimerProvider><AnswerCard answer={answer} id={1}/></TimerProvider>)
        const answerCard = getByText(answer)
        expect(onClick).not.toHaveBeenCalled()
        fireEvent.click(answerCard)
        console.log(answerCard.isAllowed)
        //expect(onClick).toHaveBeenCalled()
    })
})