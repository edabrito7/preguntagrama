import PropTypes from 'prop-types'
// hooks
import { useTimer } from 'hooks/useTimer'
import { useAnswers } from 'hooks/useAnswers'
import { useActions } from 'hooks/useActions'

//firebase
import { getCorrectAnswer } from 'firebase/client'

export default function AnswerCard ({answer, id }) {
    const timer = useTimer()
    const actions = useActions()
    const { correctAnswer }= useAnswers()
    const { loseLife, openModal } = useActions()
    const isAllowed = timer.state.time === 0
    const handleClick = async () => {
        timer.dispatch({type: 'stop'})
        const verifyAnswer = await getCorrectAnswer(correctAnswer)
        if(verifyAnswer.answer !== answer) {
            loseLife()
            openModal()
           //timer.dispatch({type: 'restart'})
        } else {
            actions.nextQuestion()
            timer.dispatch({type: 'restart'})
            timer.initTimer()
        }
    }
    return (
        <button 
        type='button'
        disabled={isAllowed}
        className={`m-2 border-2 border-gray-400 bg-gray-200 rounded-md text-sm h-24 px-2 ${isAllowed ? 'cursor-not-allowed' : null}`}
        onClick={handleClick}
        >
            {answer}
        </button>
    )
}

AnswerCard.propTypes = {
    answer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
