import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Title from 'components/commons/Title'
import Button from 'components/commons/Button'
import TextInput from 'components/commons/TextInput'
// firebase
import { signIn, loginWithGoogle } from 'firebase/client'
// hooks
import { useText } from 'hooks/useText'
import { useUser } from 'hooks/useUser'


export default function IniciarSesion () {
    const [hasErrors, setHasErrors] = useState(false)
    const form = useText()
    //const user = useUser()
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await signIn(form.value)

        if (response) return router.push('/jugar')
        setHasErrors(true)
    }

    const handleSignInGoogle = async () => {
        const user = await loginWithGoogle()
        if(user) return router.push('/jugar')
    }

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
                <form onSubmit={handleSubmit}>
                    <TextInput
                    label='Correo electrónico'
                    id='email'
                    name='email'
                    placeholder='prueba@email.com'
                    isRequired
                    handleChange={form.handleChange}
                    />
                    <TextInput
                    type='password'
                    label='Contraseña'
                    id='password'
                    name='password'
                    handleChange={form.handleChange}
                    />
                    <div className='flex mt-4 relative '>
                    <Button 
                    type='submit'
                    style='primary'
                    >Iniciar sesión
                    </Button>
                    <Button
                    onClick={handleSignInGoogle}
                    >Inicia sesión con Google
                    </Button>
                    {
                        hasErrors ? (
                            <p className='text-center text-red-600 absolute -bottom-4 w-full' >Usuario o contraseña incorrecta</p>
                        ) : null
                    }
                    </div>
                </form>
                <p 
                className='flex justify-center mt-6'
                >No tengo una cuenta
                    <Link
                    href='/registro'
                    >
                        <a 
                        className=' ml-2 text-blue-500 underline cursor-pointer'
                        
                        >Registrarse</a>
                    </Link>
                </p>
            </section>
        </>
    )
}