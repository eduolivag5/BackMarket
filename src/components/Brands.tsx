import { useQuery } from '@tanstack/react-query'
import { Category } from '../types'
import { getBrandsByCategory } from '../api'
import { Link } from 'react-router-dom'
import { Skeleton } from '@heroui/react'

interface BrandsProps {
    category: Category
    isLoadingCategory: boolean
}

export default function Brands({ category, isLoadingCategory }: BrandsProps) {
    const { data: brandsList, isPending, isError } = useQuery({
        queryKey: [`brands-list-${category?.id}`],
        queryFn: () => getBrandsByCategory(category!.id),
        enabled: !!category?.id // Solo se ejecuta si tenemos el ID de categoría
    });

    const loading = isLoadingCategory || isPending || isError;
    const displayBrands = loading 
        ? Array.from({ length: 4 }).map((_, i) => ({ id: i })) 
        : (brandsList || []);

    return (
        <div className="w-full space-y-2">
            {loading ? (
                <Skeleton className="w-48 h-6 rounded-lg" />
            ) : (
                <span className="font-semibold text-xl">{`${category?.name} baratos`}</span>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {displayBrands.map((item: any, i) => (
                    <div key={item.id || i} className="space-y-1">
                        {loading ? (
                            <>
                                <Skeleton className="aspect-video w-full rounded-xl" />
                                <Skeleton className="w-20 h-5 rounded-lg ml-1" />
                            </>
                        ) : (
                            <Link to={`/category/${category?.id}/${item.marca.toLowerCase()}`} className="group">
                                <img src={item.imgHeader} className="rounded-xl object-cover transition-shadow duration-300 group-hover:shadow-lg" />
                                <p className="px-1 font-bold text-lg">{item.marca}</p>
                            </Link>
                        )}
                    </div>
                ))}
            </div>            
        </div>
    );
}