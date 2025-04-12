import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='space-y-10 mb-10'>
            <Link to="/">
                <img src='./header.jpg' className='rounded-xl' />              
            </Link>
            <div className='mx-auto text-center space-y-2'>
                <p className='font-bold text-5xl'>Sácale partido a la tecnología con nosotros</p>
                <p className='text-xl'>Compra y vende tecnología que es mejor para el planeta.</p>
            </div>            
        </div>
    )
}
