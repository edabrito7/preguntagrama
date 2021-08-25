import Head from 'next/head'
import Link from 'next/link'

import Title from 'components/commons/Title'
import Button from 'components/commons/Button'
import TextInput from 'components/commons/TextInput'

//firebase
import { singUp, loginWithGoogle } from 'firebase/client'

// hooks
import { useText } from 'hooks/useText'
import { useUser } from 'hooks/useUser'

export default function Registro () {
    const form = useText()
    //const user = useUser()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form.value)
        const user = await singUp(form.value)
        console.log(user)
    }
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
                <form onSubmit={handleSubmit}>
                    <TextInput
                    label='Nombre'
                    id='name'
                    name='name'
                    placeholder='Fernando'
                    isRequired
                    handleChange={form.handleChange}
                    />
                    <TextInput
                    label='Apellido'
                    id='lastName'
                    name='lastName'
                    placeholder='Herrera'
                    isRequired
                    handleChange={form.handleChange}
                    />
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
                    <div className='flex mt-4'>
                    <Button 
                    type='submit'
                    styles='primary'
                    >Registrarse
                    </Button>
                    <Button
                    type='button'
                    onClick={() => loginWithGoogle()}
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
                        
                        >Inicia Sesión</a>
                    </Link>
                </p>
            </section>
        </>
    )
}