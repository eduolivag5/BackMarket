import { useState, useRef } from 'react';
import { Product } from "../types";
import ProductItem from '../components/ProductItem';
import { Card, Pagination } from '@heroui/react';

interface ProductsGrid {
    productsList: Product[];
}

const PRODUCTS_PER_PAGE = 12;

export default function ProductsGrid({ productsList }: ProductsGrid) {
    const [currentPage, setCurrentPage] = useState(1);
    const gridRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.ceil(productsList.length / PRODUCTS_PER_PAGE);

    const paginatedProducts = productsList.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (gridRef.current) {
            gridRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={gridRef} className='py-20'>
            <p className='text-sm mb-2'>{productsList.length} productos</p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {paginatedProducts.map((product) => (
                    <Card key={product.id} className="h-full border border-gray-300">
                        <ProductItem item={product} />
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <Pagination
                    total={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}  
                    showControls
                    isCompact
                />
            </div>
        </div>
    );
}
