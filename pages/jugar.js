import Head from 'next/head'
import { useEffect, useState } from 'react'
// components
import WithAuth from 'components/commons/withAuth'
import PlayBoxOne from 'components/playBoxOne'
import Loading from 'components/commons/Loading'
import Title from 'components/commons/Title'

// icons
import Life from 'components/icons/life'


// hooks
import { TimerProvider } from 'hooks/useTimer'
import { AnswersProvider } from 'hooks/useAnswers'
import { ActionsProvider } from 'hooks/useActions'
// utils
import { getQuestions } from 'firebase/client'


function Jugar ({ questions }) {

    return (
        <>
            <Head>
                <title>Jugar</title>
            </Head>
            <Title/>
            <TimerProvider>
                <ActionsProvider>
                    <PlayBoxOne questions={questions}/>
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