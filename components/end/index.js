import { useRouter } from 'next/router'
// components
import Button from 'components/commons/Button'

export default function End () {
    const router = useRouter()
    return (
        <>
            <section
            className='flex flex-col  h-full'
            >
            <h2
            className='text-lg font-bold text-center text-blue-500 mb-4'
            >Parece que no tenemos más preguntagramas &#128549;</h2>
            <p
            className='my-8 mx-2'
            >Lo sentimos mucho, pero no te preocupes que pronto vendremos con nuevos preguntamodos que desafiarán tus conocimientos al máximo.</p>
                <div
                className='flex  items-center flex-col '
                >
                    <Button
                    style='primary'
                    onClick={() => router.reload()}
                    >Volver a jugar!
                    </Button>
                    <Button
                    style='secundary'
                    onClick={() =>router.push('/')}
                    >Home</Button>
                </div>
            </section>
        </>
    )
}