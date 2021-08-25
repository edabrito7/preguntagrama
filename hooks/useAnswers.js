import { useState, useContext, createContext } from 'react'


const AnswersContext = createContext()

export function AnswersProvider ({ children }) {
    const [answers, setAnswers] = useState()
    const [correctAnswer, setCorrectAnswer] = useState()

    const addAnswers = (answers) => {
        setAnswers(answers)
    }

    const addCorrectAnswer = (answer) => {
        setCorrectAnswer(answer)
    }

    const value = {
        answers,
        correctAnswer,
        addAnswers,
        addCorrectAnswer
    }

    return <AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>
}

export function useAnswers () {
    const context = useContext(AnswersContext)
    if (context === undefined) {
        throw new Error('useAnswers is not within a AnswersProvider')
    }
    return context
}