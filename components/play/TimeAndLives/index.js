import PropTypes from 'prop-types'

// icons
import Life from 'components/icons/life'

// hooks
import { useTimer } from 'hooks/useTimer'

export default function TimeAndLives ({ lives }) {
    const timer = useTimer()
    // handle lifes
    return (
        <section
            className='flex justify-around items-center'
        >
            <p>Tiempo:  {timer.state.time} </p>
            <div
                className='flex'
            >
            <p>Vidas:</p>
            <Life
            stroke='#00000029'
            />
            <Life />
            <Life/>
            </div>
        </section>
    )
}

TimeAndLives.propTypes = {
    lives: PropTypes.number.isRequired
}