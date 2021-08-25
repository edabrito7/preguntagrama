import PropTypes from 'prop-types'

// icons
import Life from 'components/icons/life'

// hooks
import { useTimer } from 'hooks/useTimer'
import { useActions } from 'hooks/useActions'

export default function TimeAndLives () {
    const timer = useTimer()
    const { lives } = useActions()
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
            stroke={ lives > 0 ? '#000' : '#00000029'}
            />
            <Life 
            stroke={ lives > 1 ? '#000' : '#00000029'}
            />
            <Life
            stroke={ lives > 2 ? '#000' : '#00000029'}
            />
            </div>
        </section>
    )
}
