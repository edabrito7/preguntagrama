import  Link  from 'next/link'


export default function Header () {
    return (
        <header className='flex w-full justify-end p-2'>
            <h1 className='mr-auto sm:text-2xl lg:text-4xl text-lg font-bold'>Preguntagrama &#127929;</h1>
            <nav>
                <ul className='flex'>
                    <li className='mx-2 text-sm md:text-base'>
                        <Link href='/proyecto'>
                            <a>Sobre el proyecto</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

