import Head from 'next/head'
import Link from 'next/link'

import Title from 'components/commons/Title'
import Button from 'components/commons/Button'
import TextInput from 'components/commons/TextInput'

// hooks
import { useText } from 'hooks/useText'

export default function Registro () {
    const email = useText()
    return (
        <>
            <Head>
                <title>Registo</title>
            </Head>
            <section
            className='my-4 mx-1'
            >
                <Title/>
                <h2
                className='text-lg font-bold text-center text-gray-700'
                >Registrate gratis con tu email o cuenta de Google
                </h2>
                <form>
                    <TextInput
                    label='Nombre'
                    id='name'
                    name='name'
                    placeholder='Fernando'
                    isRequired
                    //handleChange={email.handleChange}
                    />
                    <TextInput
                    label='Apellido'
                    id='lastName'
                    name='lastName'
                    placeholder='Herrera'
                    isRequired
                    //handleChange={email.handleChange}
                    />
                    <TextInput
                    label='Correo electrónico'
                    id='email'
                    name='email'
                    placeholder='prueba@email.com'
                    isRequired
                    handleChange={email.handleChange}
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
                    >Registrarse
                    </Button>
                    <Button
                    >Inicia sesión con Google
                    </Button>
                    </div>
                </form>
                <p 
                className='flex justify-center'
                >Ya tengo una cuenta
                    <Link
                    href='/iniciar-sesion'
                    >
                        <a 
                        className=' ml-2 text-blue-500 underline cursor-pointer'
                        
                        >Inicia Sesion</a>
                    </Link>
                </p>
            </section>
        </>
    )
}