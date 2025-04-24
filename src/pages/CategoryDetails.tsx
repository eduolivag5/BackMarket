import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCategoryInfo, getProductsFiltered } from '../api';
import { FAQ } from '../components/FAQ';
import ProductsGrid from '../components/ProductsGrid';

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
    

    return (
        <div>

            <h1 className='text-5xl font-bold'>{categoryInfo?.name} reacondicionados</h1>

            {products && <ProductsGrid productsList={products} />}

            <div className='p-6 md:p-20 rounded-xl bg-white'>
                <FAQ />
            </div>
        </div>
    )
}
