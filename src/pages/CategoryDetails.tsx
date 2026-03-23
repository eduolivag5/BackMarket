import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCategoryInfo, getProductsFiltered } from '../api';
import { FAQ } from '../components/FAQ';
import ProductsGrid from '../components/ProductsGrid';
import Brands from '../components/Brands';
import { useEffect } from 'react';
import { Skeleton } from '@heroui/react';

export default function CategoryDetails() {
    const { id } = useParams();

    const { data: products, isPending: pPending, isError: pError } = useQuery({
        queryKey: [`category-products-${id}`],
        queryFn: () => getProductsFiltered(id),
    });
    
    const { data: categoryInfo, isPending: cPending, isError: cError } = useQuery({
        queryKey: [`category-info-${id}`],
        queryFn: () => getCategoryInfo(id),
    });

    // Efecto para el título
    useEffect(() => {
        if (categoryInfo) {
            document.title = `${categoryInfo.name} reacondicionados`;
        }        
    }, [categoryInfo]);

    return (
        <div className='space-y-10'>
            {/* Título: Si no hay info, mostramos un esqueleto de texto */}
            {cPending || cError ? (
                <Skeleton className="w-1/3 h-10 rounded-lg" />
            ) : (
                <h1 className='text-4xl md:text-5xl font-medium font-dm-serif'>
                    {categoryInfo?.name} reacondicionados
                </h1>
            )}

            {/* Brands: Siempre renderizamos, el componente interno maneja su carga */}
            <Brands category={categoryInfo!} isLoadingCategory={cPending || cError} />

            {/* Grid de productos: Siempre renderizamos */}
            <ProductsGrid 
                productsList={products} 
                isLoading={pPending || pError} 
            />

            <div className='p-6 md:p-20 rounded-xl bg-white'>
                <FAQ />
            </div>
        </div>
    );
}