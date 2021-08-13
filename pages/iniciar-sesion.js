import Head from 'next/head'
import Link from 'next/link'

import Title from 'components/commons/Title'
import Button from 'components/commons/Button'
import TextInput from 'components/commons/TextInput'


export default function IniciarSesion () {
    return (
        <>
            <Head>
            <title>Iniciar Sesion</title>
            </Head>
            <section
            className='my-4 mx-1'
            >
                <Title/>
                <h2
                className='text-lg font-bold text-center text-gray-700'
                >Inicia sesión con tu email o cuenta de Google
                </h2>
                <form>
                    <TextInput
                    label='Correo electrónico'
                    id='email'
                    name='email'
                    placeholder='prueba@email.com'
                    isRequired
                    //handleChange={email.handleChange}
                    />
                    <TextInput
                    type='password'
                    label='Contraseña'
                    id='pass'
                    name='pass'
                    />
                    <div className='flex mt-4'>
                    <Button 
                    type='primary'
                    onClick={() => console.log('nada')}
                    >Iniciar sesión
                    </Button>
                    <Button
                    >Inicia sesión con Google
                    </Button>
                    </div>
                </form>
                <p 
                className='flex justify-center'
                >No tengo una cuenta
                    <Link
                    href='/registro'
                    >
                        <a 
                        className=' ml-2 text-blue-500 underline cursor-pointer'
                        
                        >Registrase</a>
                    </Link>
                </p>
            </section>
        </>
    )
}