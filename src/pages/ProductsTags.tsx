import { Link, useParams } from 'react-router-dom';
import { sellConditions } from '../data';
import { useQuery } from '@tanstack/react-query';
import { getProductsFiltered } from '../api';
import ProductItem from '../components/ProductItem';
import { Card } from '@heroui/react';
import WhyToBuy from '../components/WhyToBuy';

export default function ProductsTags() {

    const { tags } = useParams();

    const { data: productsList } = useQuery({
        queryKey: [`products-list-${tags}`],
        queryFn: () => getProductsFiltered(undefined, tags)
    })

    return (
        <div className='space-y-8'>
            <div className='p-4 flex justify-between rounded-lg mb-4 bg-gray-200'>
                {sellConditions.map((cond) => 
                    <div className='flex-1 justify-center flex items-center gap-4'>
                        <p><cond.icon /></p>
                        <p className='text-sm'>{cond.text}</p>
                    </div>
                )}
            </div>

            <div>
                <h1 className='font-bold text-4xl'>{tags} reacondicionado</h1>
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
                        className='rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer' 
                    />
                </Link> 
            </div>
                       


            {productsList && 
                <div>
                    <p className='text-sm mb-2'>{productsList.length} productos</p>
                    <div className='grid grid-cols-4 gap-4'>
                    {productsList.map((product) => 
                        <Card className="h-full border border-gray-300">
                            <ProductItem item={product} />
                        </Card>                        
                    )}
                    </div>
                </div>
            }

            <WhyToBuy />
            
        </div>
    )
}
