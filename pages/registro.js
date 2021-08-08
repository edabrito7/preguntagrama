import Head from 'next/head'

import TextInput from 'components/commons/TextInput'

export default function Registro () {
    return (
        <>
            <Head>
                <title>Registo</title>
            </Head>
            <section>
                <h1>Registrate con Google o con tu email</h1>
                <TextInput
                label='Inicia Sesion'
                id='sign-in'
                name='sign-in'
                placeholder='prueba'
                />
                <TextInput
                type='password'
                label='Paass'
                id='pass'
                name='pass'
                placeholder='prueba'
                />
                <p>Errores</p>
            </section>
        </>
    )
}