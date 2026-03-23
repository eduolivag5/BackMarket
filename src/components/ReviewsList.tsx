import ReviewItem from "./ReviewItem";
import { Carrusel } from "./Carrusel";
import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../api";

export default function ReviewsList() {
    const { data: reviewsList, isPending, isError } = useQuery({
        queryFn: getAllReviews,
        queryKey: [`reviews-list`],
        retry: 1
    });

    // Generamos 3 esqueletos para el formato "compact"
    const skeletonItems = Array.from({ length: 3 }).map((_, i) => ({ id: `rev-sk-${i}` }));
    const isLoading = isPending || isError;

    return (
        <Carrusel 
            title="+15 millones de clientes por todo el mundo"
            format="compact"
            itemsList={isLoading ? (skeletonItems as any) : (reviewsList || [])}
            ElementToRender={ReviewItem}
            isLoading={isLoading} // Esta prop la lee el Carrusel que modificamos antes
        />
    );
}