import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Header from 'components/commons/Header'
import Button from 'components/commons/Button'
import HomeImage from 'assets/home.jpg'
import { useUser } from 'hooks/useUser'

export default function Home() {
  const router = useRouter()
  const user = useUser()
  const handlePlay = () => {
    user ? router.push('/jugar') : router.push('/registro')
  }
  return (
    <>
      <Head>
        <title>Preguntagrama</title>
      </Head>
      <div className='flex   items-center flex-col h-full bg-white rounded-2xl'>
        <Header/>
        <figure className='border-0  w-7/12 h-3/6   my-12 relative'>
          <Image
            src={HomeImage}
            alt="Preguntagrama home"
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            className='rounded-md'
          />
        </figure>
        <Button 
          style='register'
          onClick={handlePlay}
          >
            {user ? 'Jugar' : 'Registrarse y Jugar'}
        </Button>
        <Button 
          onClick={() => router.push('/iniciar-sesion')}
          >
            Iniciar sesión
        </Button>
        <Button 
          onClick={() => router.push('/instrucciones')}
          style='secundary'
          >
            Instrucciones
        </Button>
      </div>
    </>
  )
}
