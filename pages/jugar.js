import Head from 'next/head'
import { useEffect, useState } from 'react'
// components
import WithAuth from 'components/commons/withAuth'
import PlayBoxOne from 'components/playBoxOne'
import Loading from 'components/commons/Loading'

// icons
import Life from 'components/icons/life'


// hooks
import { TimerProvider } from 'hooks/useTimer'
import { AnswersProvider } from 'hooks/useAnswers'
import { ActionsProvider } from 'hooks/useActions'
// utils
import { getColor } from 'utils/color'
import { getQuestions, logOut } from 'firebase/client'


function Jugar () {
    const [questions, setQuestions] = useState()
    //const user = useUser()
    // console.log(timer.state)
    const color = getColor(8)
    // console.log(color)
    /*if (!user) return (
        <section className='h-screen'>
            <Loading/>
        </section>
    )*/

    useEffect(() => {
        (async () => {
            const listQuestions = await getQuestions()
            setQuestions(listQuestions)
        })()
    },[])

    if(!questions) return null
    return (
        <>
            <Head>
                <title>Jugar</title>
            </Head>
            <TimerProvider>
                <ActionsProvider>
                    <PlayBoxOne questions={questions}/>
                </ActionsProvider>
            </TimerProvider>
        </>
    )
}

export default WithAuth(Jugar)