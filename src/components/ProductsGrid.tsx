import { useState, useRef } from 'react';
import { Product } from "../types";
import ProductItem from '../components/ProductItem';
import { Card, Pagination, Skeleton } from '@heroui/react';
import { ProductSkeleton } from './ui/ProductSkeleton';

const PRODUCTS_PER_PAGE = 12;

interface ProductsGridProps {
    productsList: Product[] | undefined;
    isLoading: boolean;
}

export default function ProductsGrid({ productsList, isLoading }: ProductsGridProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const gridRef = useRef<HTMLDivElement>(null);

    // Si carga, simulamos 12 productos; si no, usamos la lista real o vacía
    const displayList = isLoading 
        ? Array.from({ length: 12 }).map((_, i) => ({ id: `p-sk-${i}` })) 
        : (productsList || []);

    const totalPages = Math.ceil(displayList.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = displayList.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    return (
        <div ref={gridRef} className='py-20'>
            {isLoading ? (
                <Skeleton className="w-24 h-4 mb-2 rounded-lg" />
            ) : (
                <p className='text-sm mb-2'>{productsList?.length || 0} productos</p>
            )}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {paginatedProducts.map((product, index) => (
                    <Card key={product.id || index} className="h-full border border-gray-300 shadow-none">
                        {isLoading ? <ProductSkeleton /> : <ProductItem item={product as Product} />}
                    </Card>
                ))}
            </div>

            {!isLoading && totalPages > 1 && (
                <div className="flex justify-center mt-6">
                    <Pagination total={totalPages} page={currentPage} onChange={setCurrentPage} showControls />
                </div>
            )}
        </div>
    );
}
