import PropTypes from 'prop-types'


export default function AnswerCard ({answer, id }) {
    console.log(id)
    return (
        <button 
        className='m-2 border-2 border-gray-400 rounded-md text-sm h-24 px-2'
        >
            {answer}
        </button>
    )
}

AnswerCard.propTypes = {
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
