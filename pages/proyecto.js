import Head from 'next/head'
import Title from 'components/commons/Title'
import { useRouter } from 'next/router'
import Button from 'components/commons/Button'

export default function Proyecto () {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Sobre el proyecto</title>
            </Head>
            <main
            className='mx-4'
            >
                <Title/>
                <section>
                    <article>
                        <h2
                        className='font-bold text-lg'
                        >Motivos que llevaron al desarrollo de Preguntagrama</h2>
                        <p
                        className='mt-4'
                        >Hay dos motivos principales que me llevaron al desarrollo de esta aplicación web:</p>
                        <ol className='list-decimal list-inside mt-1'>
                            <li>Mejorar como desarrollador frontend.</li>
                            <li>Proveer a mis alumnos con una herramienta de práctica de teoría musical.</li>
                        </ol>
                    </article>
                    <article className='mt-6'>
                        <h2
                        className='font-bold text-lg'
                        >¿Se agregarán más preguntas a la aplicación?
                        </h2>
                        <p
                        className='mt-4'
                        >Respuesta corta: <em className='font-bold' >Sí</em></p>
                        <p>Cuándo?: <em className='font-bold' >No se.</em> Depende de mi disponibilidad</p>
                    </article>
                    <article className='mt-6'>
                        <h2
                        className='font-bold text-lg'
                        >¿Se aceptan sugerencias para mejorar Preguntagrama?
                        </h2>
                        <p
                        className='mt-4'
                        ><em className='font-bold' >Por supuesto que sí.</em> La idea es que este recurso sea lo más útil y divertido posible.</p>
                    </article>
                </section>
                <section className='flex justify-center mt-4'>
                    <Button onClick={() => router.push('/jugar')}>Jugar</Button>
                </section>
            </main>
        </>
    )
}