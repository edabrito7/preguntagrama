// components
import Title from 'components/commons/Title'
import Modal from 'components/commons/Modal'
import QuestionBox from 'components/play/QuestionBox'
import CategoryTag from 'components/play/CategoryTag'
import AnswerBox from 'components/play/AnswerBox'
import TimeAndLives from 'components/play/TimeAndLives'
import Button from 'components/commons/Button'

import { getColor } from 'utils/color'

import { useActions } from 'hooks/useActions'
import { AnswersProvider } from 'hooks/useAnswers'

import {  logOut } from 'firebase/client'

export default function PlayBoxOne ({questions}) {
    const { currentQuestion, modal, closeModal } = useActions()

    const color = getColor(questions.category)

    return (
        <>
            {
                modal ? <Modal closeModal={closeModal} /> : null
            }
            <section 
            className='my-4 mx-1'
            >
                <Title/>
                <TimeAndLives />
                <section
                className='flex my-2 justify-center items-center'
                >
                    <h3
                    className='uppercase font-bold text-blue-900'
                    >Categoria: 
                    </h3>
                    <CategoryTag color={color}>Escalas</CategoryTag>
                </section>
                <QuestionBox 
                question={questions[currentQuestion].question}
                color={color}
                />
                <AnswersProvider>
                    <AnswerBox
                    answersArray={questions[currentQuestion].answers}
                    correctAnswer={questions[currentQuestion].correctAnswer}
                    />
                </AnswersProvider>
            </section>
            <section
            className='flex justify-center items-center'
            >
                <Button
                type='button'
                onClick={() => logOut()}
                style='cancel'
                >Cerrar Sesion
                </Button>
            </section>
        </>
    )
}