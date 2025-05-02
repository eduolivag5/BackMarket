import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'

export default function Header() {
    return (
        <div className='space-y-10'>
            <Link to="/category/1" >
                <img src='./header.jpg' className='hidden md:block rounded-xl transition-shadow duration-300 hover:shadow-xl cursor-pointer' />
                <img src='./header_mobile.jpg' className='md:hidden rounded-xl transition-shadow duration-300 hover:shadow-xl cursor-pointer' />           
            </Link>
            <SectionTitle 
                title='Sácale partido a la tecnología con nosotros'
                subtitle='Compra y vende tecnología que es mejor para el planeta.'
            />
        </div>
    )
}
