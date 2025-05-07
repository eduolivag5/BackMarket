import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCategoryInfo, getProductsFiltered } from '../api';
import { FAQ } from '../components/FAQ';
import ProductsGrid from '../components/ProductsGrid';
import Brands from '../components/Brands';
import { useEffect } from 'react';

export default function CategoryDetails() {

    const { id } = useParams();

    const { data: products } = useQuery({
        queryKey: [`category-products-${id}`],
        queryFn: () => getProductsFiltered(id),
    });
    
    const { data: categoryInfo } = useQuery({
        queryKey: [`category-info-${id}`],
        queryFn: () => getCategoryInfo(id),
    });

    useEffect(() => {
        if (categoryInfo) {
            document.title = `${categoryInfo.name} reacondicionados` 
        }        
    }, [categoryInfo])
    

    return (
        <div className='space-y-10'>

            <h1 className='text-4xl md:text-5xl font-medium font-dm-serif'>{categoryInfo?.name} reacondicionados</h1>

            {categoryInfo && <Brands category={categoryInfo} />}

            {products && <ProductsGrid productsList={products} />}

            <div className='p-6 md:p-20 rounded-xl bg-white'>
                <FAQ />
            </div>
        </div>
    )
}
