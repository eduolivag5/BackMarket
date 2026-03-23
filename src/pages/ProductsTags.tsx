import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductsFiltered } from '../api';
import WhyToBuy from '../components/WhyToBuy';
import ProductsGrid from '../components/ProductsGrid';
import SellConditions from '../components/SellConditions';
import { useEffect } from 'react';
import { Skeleton } from '@heroui/react'; // Asegúrate de importar Skeleton

export default function ProductsTags() {
    const { id, tags } = useParams();

    // Extraemos isPending e isError para manejar el estado visual
    const { data: productsList, isPending, isError } = useQuery({
        queryKey: [`products-list-${tags?.toLowerCase()}`],
        queryFn: () => getProductsFiltered(id, tags?.toLowerCase()),
        retry: 1 // Reintento rápido en caso de fallo
    });

    useEffect(() => {
        if (tags) {
            document.title = `${tags} reacondicionados | BackMarket`;
        }        
    }, [tags]);

    // Consolidamos el estado de carga/error
    const isLoading = isPending || isError;

    return (
        <div className='space-y-8'>
            <SellConditions />

            <div>
                {/* Si no hay tags (raro por el router, pero posible), mostramos un esqueleto de título */}
                {!tags ? (
                    <Skeleton className="w-2/3 h-12 rounded-lg mb-4" />
                ) : (
                    <h1 className='font-medium font-dm-serif text-4xl md:text-5xl'>
                        {tags} reacondicionados
                    </h1>
                )}
                
                <p className='text-sm mt-2'>
                    Según un estudio reciente, los {tags || 'dispositivos'} reacondicionados también pueden ser mucho más baratos y 
                    fáciles de comprar: vienen con 2 años de garantía, 30 días de prueba, opción de pago a plazos y 
                    los recibes en menos de 3 días.
                </p>
            </div>

            {/* Banner publicitario */}
            <div>
                <Link to="/end-fast-tech">
                    <img 
                        src='/EarthMonth_PLP_Banners_Desktop_ES.jpg' 
                        className='hidden md:block rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer' 
                        alt="Banner promocional"
                    />
                    <img
                        src='/EarthMonth_PLP_Banners_CardDesktop_ES.jpg'
                        className='md:hidden rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer' 
                        alt="Banner promocional móvil"
                    />
                </Link> 
            </div> 

            <ProductsGrid 
                productsList={productsList} 
                isLoading={isLoading} 
            />

            <WhyToBuy />
        </div>
    );
}