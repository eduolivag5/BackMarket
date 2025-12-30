import { useQuery } from '@tanstack/react-query'
import { Category } from '../types'
import { getBrandsByCategory } from '../api'
import { Link } from 'react-router-dom'

interface BrandsProps {
    category: Category
}

export default function Brands({ category } : BrandsProps) {

    const { data: brandsList } = useQuery({
        queryKey: [`brands-list-${category.id}`],
        queryFn: () => getBrandsByCategory(category.id)
    })

    if (brandsList)
    return (
        <div className="w-full space-y-2">
            <span className="font-semibold text-xl">{`${category.name} baratos`}</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brandsList.map((item) => (
                    <Link key={item.id} to={`/category/${category.id}/${item.marca.toLowerCase()}`} className="space-y-1">
                        <img src={item.imgHeader} className="rounded-xl object-cover transition-shadow duration-300 hover:shadow-lg cursor-pointer" />
                        <p className="px-1 font-bold text-lg">{item.marca}</p>
                    </Link>
                ))}
            </div>            
        </div>
    )
}
