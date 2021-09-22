import Head from 'next/head'

// components
import WithAuth from 'components/commons/withAuth'
import PlayBoxOne from 'components/playBoxOne'
import Title from 'components/commons/Title'

// hooks
import { TimerProvider } from 'hooks/useTimer'
import { ActionsProvider } from 'hooks/useActions'

// utils
import { getQuestions } from 'firebase/client'


function Jugar ({ questions }) {
    const messArray = questions.sort(() => Math.random() - 0.5)

    return (
        <>
            <Head>
                <title>Jugar</title>
            </Head>
            <Title/>
            <TimerProvider>
                <ActionsProvider>
                    <PlayBoxOne questions={messArray}/>
                </ActionsProvider>
            </TimerProvider>
        </>
    )
}

export async function getServerSideProps () {
    const questions = await getQuestions()
    return {
        props: {questions}
    }
}

export default WithAuth(Jugar)