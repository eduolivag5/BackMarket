import ReviewItem from "./ReviewItem";
import { Carrusel } from "./Carrusel";
import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../api";

export default function ReviewsList() {

    const { data: reviewsList } = useQuery({
        queryFn: getAllReviews,
        queryKey: [`reviews-list`]
    })

    if (reviewsList)
    return (
        <Carrusel title="Reseñas 15 millones"
            itemsToShow={4}
            itemsList={reviewsList}
            ElementToRender={ReviewItem}
        />
    )
}
