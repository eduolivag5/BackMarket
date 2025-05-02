import { Carrusel } from "../components/Carrusel";
import ProductItem from "../components/ProductItem";
import { Product } from "../types";

interface ProductsListProps {
    items: Product[]
}

export default function ProductsList({ items } : ProductsListProps) {

    return (
        <Carrusel 
            title="Sugerencias para ti"
            format="full"
            itemsList={items
                .slice(0,10)
            }
            ElementToRender={ProductItem}
        />
    )
}
