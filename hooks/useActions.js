import { useState, useContext, createContext } from 'react'

const ActionsContext = createContext()

export function ActionsProvider ({ children }) {
    const [lives, setLives] = useState(3)
    const [record, setRecord] = useState()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [modal, setModal] = useState(false)

    const loseLife = () => {
        const newlives = lives - 1
        setLives(newlives)
        nextQuestion()
        return newlives
    }

    const addNewRecord = (newRecord) => {
        setRecord(newRecord)
        return newRecord
    }

    const nextQuestion = () => {
        const newCurrentQuestion = currentQuestion + 1
        setCurrentQuestion(newCurrentQuestion)
    }

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const value = {
        lives,
        record,
        currentQuestion, 
        modal,    
        loseLife,
        addNewRecord,
        nextQuestion,
        openModal,
        closeModal
    }
    return <ActionsContext.Provider value={value}>{children}</ActionsContext.Provider>
}


export function useActions () {
    const context = useContext(ActionsContext)
    if (context === undefined) {
        throw new Error('useActions is not within a ActionsProvider')
    }
    return context
}