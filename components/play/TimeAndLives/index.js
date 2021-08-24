// icons
import Life from 'components/icons/life'

// hooks
import { useTimer } from 'hooks/useTimer'

export default function TimeAndLives () {
    const timer = useTimer()
    console.log(timer)
    return (
        <section
            className='flex justify-around items-center'
        >
            <p>Tiempo:  {timer.state.time} </p>
            <div
                className='flex'
            >
            <p>Vidas:</p>
            <Life/>
            <Life />
            <Life/>
            </div>
        </section>
    )
}