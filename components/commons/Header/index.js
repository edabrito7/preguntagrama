import  Link  from 'next/link'


export default function Header () {
    return (
        <nav className='flex w-full justify-end'>
            <h1 className='mr-auto'>Preguntagrama</h1>
            <ul className='flex'>
                <li className='mx-2'>
                    <Link href='/proyecto'>
                        <a>Sobre el proyecto</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

