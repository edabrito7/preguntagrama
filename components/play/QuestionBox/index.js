import PropTypes from 'prop-types'

// hooks
import { useTimer } from 'hooks/useTimer'
// icons
import Clock from 'components/icons/clock'

export default function QuestionBox ({ question, color }) {
    const timer = useTimer()
    return (
        <section
        className={`relative container mx-auto flex items-center justify-center border-4 p-4 border-${color}-700 bg-${color}-200 rounded-md w-10/12 h-44`}
        >
            <p
            className='text-lg text-center'
            >¿{ question }?</p>
            <Clock
            onClick={() => timer.dispatch({type: 'extends'})}
            className='absolute right-0.5 bottom-0.5 cursor-pointer'
            stroke={timer.state.hasBeenExtended ? '#00000029' : '#000'}
            />
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