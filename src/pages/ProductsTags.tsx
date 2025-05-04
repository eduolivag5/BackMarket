import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductsFiltered } from '../api';
import WhyToBuy from '../components/WhyToBuy';
import ProductsGrid from '../components/ProductsGrid';
import SellConditions from '../components/SellConditions';

export default function ProductsTags() {

    const { id, tags } = useParams();

    const { data: productsList } = useQuery({
        queryKey: [`products-list-${tags}`],
        queryFn: () => getProductsFiltered(id, tags)
    })

    return (
        <div className='space-y-8'>
            <SellConditions />

            <div>
                <h1 className='font-bold font-dm-serif text-4xl'>{tags} reacondicionados</h1>
                <p className='text-sm'>
                    Según un estudio reciente, los iPhone reacondicionados también pueden ser mucho más baratos y 
                    fáciles de comprar: vienen con 2 años de garantía, 30 días de prueba, opción de pago a plazos y 
                    los recibes en menos de 3 días.
                </p>
            </div>

            <div>
                <Link to="/end-fast-tech">
                    <img 
                        src='/EarthMonth_PLP_Banners_Desktop_ES.jpg' 
                        className='hidden md:block rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer' 
                    />
                    <img
                        src='/EarthMonth_PLP_Banners_CardDesktop_ES.jpg'
                        className='md:hidden rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer' 
                    />
                </Link> 
            </div>                      


            {productsList && <ProductsGrid productsList={productsList} />}

            <WhyToBuy />
            
        </div>
    )
}
