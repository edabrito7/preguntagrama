import Head from 'next/head'
import { useRouter } from 'next/router'

// components
import Title from 'components/commons/Title'
import Button from 'components/commons/Button'

// icons
import Clock from 'components/icons/clock'
import Life from 'components/icons/life'

export default function Instrucciones () {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Instrucciones</title>
            </Head>
            <main
            className='mx-4'
            >
                <Title/>
                <section 
                className='my-2'
                >
                    <h2
                    className='font-bold text-lg'
                    >Idea general</h2>
                    <p
                    className='mt-4'
                    >
                        El juego consiste en responder preguntas sobre teoría o lenguaje musical.
                        Existe diversas preguntas agrupadas en categorías, algunas de ellas son:
                    </p>
                    <ul 
                    className='mt-2 mb-4 mx-4'
                    >
                        <li className='list-disc'>Escalas</li>
                        <li className='list-disc'>Arpegios</li>
                        <li className='list-disc'>Figuras</li>
                    </ul>
                    <h2
                    className='font-bold text-lg'
                    >¿Tengo un máximo de tiempo para responder?</h2>
                    <p
                    className='my-4'
                    >
                        Si, cada pregunta tiene un tiempo máximo para responderse de 30 segundos. 
                        El tiempo se puede extender 15 segundos al hacer click en el icono del reloj en la parte inferior-derecha de cada pregunta.
                    </p>
                    <figure
                    className='flex justify-center items-center my-8'
                    >
                        <Clock/>
                    </figure>
                    <h2
                    className='font-bold text-lg'
                    >¿Qué pasa si me equivoco mucho?</h2>
                    <p
                    className='my-4'
                    >
                        Perderás vidas. Al empezar tienes un total de 3 vidas, por cada pregunta incorrecta pierdes una vida,
                        también pierdes una vida si se te acaba el tiempo. 
                        Si te quedas sin vidas debes comenzar desde el principio &#128542;.
                    </p>
                    <figure
                    className='flex justify-center items-center my-8'
                    >
                        <Life />
                        <Life />
                        <Life
                        stroke='#00000029'
                        />
                    </figure>
                </section>
                <section className='flex justify-center mt-4'>
                    <Button onClick={() => router.push('/jugar')}>Jugar</Button>
                </section>
            </main>
        </>
    )
}