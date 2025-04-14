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
        <div className="h-full space-y-20">
            <Header />
            {data && (
                <CarruselProducts title="Sugerencias para ti" itemsList={data
                    .sort((a, b) => a.fecha_lanzamiento < b.fecha_lanzamiento ? 1 : -1)
                    .slice(0,10)}  
                />
            )}            
        </div>
    )
}
