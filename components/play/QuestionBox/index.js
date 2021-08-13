import PropTypes from 'prop-types'

export default function QuestionBox ({ question, color }) {
    return (
        <section
        className={`container mx-auto flex items-center justify-center border-4 p-4 border-${color}-700 bg-${color}-200 rounded-md w-10/12 h-44`}
        >
            <p
            className='text-lg'
            >¿{ question }?</p>
        </section>
    )
}

QuestionBox.propTypes = {
    question: PropTypes.string.isRequired,
    color: PropTypes.string
}

QuestionBox.defaultProps = {
    color: 'blue'
}