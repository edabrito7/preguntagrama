import PropTypes from 'prop-types'
// hooks
import { useTimer } from 'hooks/useTimer'

export default function AnswerCard ({answer, id }) {
    const timer = useTimer()
    const isAllowed = timer.state.time === 0
    return (
        <button 
        type='button'
        disabled={isAllowed}
        className={`m-2 border-2 border-gray-400 bg-gray-200 rounded-md text-sm h-24 px-2 ${isAllowed ? 'cursor-not-allowed' : null}`}
        onClick={() => timer.dispatch({type: 'stop'})}
        >
            {answer}
        </button>
    )
}

AnswerCard.propTypes = {
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
