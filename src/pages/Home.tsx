import { useQuery } from "@tanstack/react-query";
import { CarruselProducts } from "../components/Carrusel";
import Header from "../components/Header";
import { getAllProducts } from "../api";

export default function Home() {

    const { data } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['all-products']
    })

    return (
        <div>
            <Header />
            {data && (
                <CarruselProducts itemsList={data}  />
            )}            
        </div>
    )
}
