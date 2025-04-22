import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductsFiltered } from '../api';
import ProductsList from '../components/ProductsList';

export default function CategoryDetails() {

    const { id } = useParams();

    const { data } = useQuery({
        queryKey: [`category-details-${id}`],
        queryFn: () => getProductsFiltered(id)
    })

    if (data)
    return (
        <div>
            <ProductsList items={data} />
        </div>
    )
}
