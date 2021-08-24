import Head from 'next/head'

import Title from 'components/commons/Title'
import QuestionBox from 'components/play/QuestionBox'
import CategoryTag from 'components/play/CategoryTag'
import AnswerBox from 'components/play/AnswerBox'
import TimeAndLives from 'components/play/TimeAndLives'
import Loading from 'components/commons/Loading'

// icons
import Life from 'components/icons/life'


// hooks
import { TimerProvider } from 'hooks/useTimer'
// utils
import { getColor } from 'utils/color'

export default function Jugar () {

    // console.log(timer.state)
    const color = getColor(8)
    // console.log(color)
    /*if (!user) return (
        <section className='h-screen'>
            <Loading/>
        </section>
    )*/
    return (
        <>
            <Head>
                <title>Jugar</title>
            </Head>
            <TimerProvider>
                <section 
                className='my-4 mx-1'
                >
                    <Title/>
                    <TimeAndLives/>
                    <section
                    className='flex my-2 justify-center items-center'
                    >
                        <h3
                        className='uppercase font-bold text-blue-900'
                        >Categoria: </h3>
                        <CategoryTag color={color}>Escalas</CategoryTag>
                    </section>
                    <QuestionBox 
                    question='Cuales son las alteraciones de la escala de Do Mayor' 
                    color={color}
                    />
                    <AnswerBox
                    answers={[
                    {
                        answer: 'Niguna',
                        id: 1
                    },
                    {
                        answer: 'Fa#',
                        id: 2
                    },
                    {
                        answer: 'Fa# Do# Sol# Re# La# Mi# Si#',
                        id: 3
                    },
                    {
                        answer: 'Sib',
                        id: 4
                    }
                    ]}/>
                </section>
            </TimerProvider>
        </>
    )
}