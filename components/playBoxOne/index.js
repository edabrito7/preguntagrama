import { useRouter } from 'next/router'
// components
import Title from 'components/commons/Title'
import Modal from 'components/commons/Modal'
import QuestionBox from 'components/play/QuestionBox'
import CategoryTag from 'components/play/CategoryTag'
import AnswerBox from 'components/play/AnswerBox'
import TimeAndLives from 'components/play/TimeAndLives'
import Button from 'components/commons/Button'

import { getColor } from 'utils/color'
import { getCategoryName } from 'utils/categories'

import { useActions } from 'hooks/useActions'
import { AnswersProvider } from 'hooks/useAnswers'
import { useTimer } from 'hooks/useTimer'

import {  logOut } from 'firebase/client'
import End from 'components/end'

export default function PlayBoxOne ({questions}) {
    const { currentQuestion, modal, closeModal, lives, nextQuestion, loseLife } = useActions()
    const timer = useTimer()
    const router = useRouter()

    if(currentQuestion >= questions.length) return <End/>


    const color = getColor(questions[currentQuestion].category)
    const categoryName = getCategoryName(questions[currentQuestion].category)

    const explication = ''
    const closeModalAndRePlay = () => {
        closeModal()
        router.push('/')
    }

    return (
        <>
            {
                modal ? <Modal closeModal={closeModal} explication={explication} /> : null
            }
            {
                lives === 0 ? <Modal closeModal={closeModalAndRePlay} explication='Te has quedado sin vidas &#128553;' /> : null
            }
            <section 
            className='my-4 mx-1'
            >
                <TimeAndLives />
                <section
                className='flex my-2 justify-center items-center'
                >
                    <h3
                    className='uppercase font-bold text-blue-900'
                    >Categoria: 
                    </h3>
                    <CategoryTag color={color}>{categoryName}</CategoryTag>
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
            className='flex justify-center items-center flex-col'
            >
                <Button
                type='button'
                onClick={() => router.push('/')}
                style='secundary'
                >Home
                </Button>
                <Button
                type='button'
                onClick={() => logOut()}
                style='cancel'
                >Cerrar Sesion
                </Button>
                {
                    (!timer.state.hasBeenStopped && timer.state.time === 0) ? (
                        <Button
                        onClick={() => {
                            loseLife()
                            nextQuestion()
                            timer.dispatch({type: 'restart'})
                            timer.initTimer()
                        }}
                        >Siguiente Pregunta
                        </Button>
                    ) : null
                }
            </section>
        </>
    )
}