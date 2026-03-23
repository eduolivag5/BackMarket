import { Product } from "../types";
import { Carrusel } from "./Carrusel";
import ProductItem from "./ProductItem";

interface ProductsListProps {
    items: Product[] | undefined;
    isLoading: boolean;
}

export default function ProductsList({ items, isLoading }: ProductsListProps) {
    // Generamos 5 espacios para el esqueleto
    const skeletonItems = Array.from({ length: 5 }).map((_, i) => ({ id: `skeleton-${i}` }));

    return (
        <Carrusel 
            title="Sugerencias para ti"
            format="full"
            itemsList={isLoading ? (skeletonItems as any) : (items || [])}
            ElementToRender={ProductItem}
            isLoading={isLoading}
        />
    );
}