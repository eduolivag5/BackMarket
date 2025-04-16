import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import { getAllProducts } from "../api";
import TrendingSearches from "../components/TrendingSearches";
import ReviewsList from "../components/ReviewsList";
import { Carrusel } from "../components/Carrusel";
import ProductItem from "../components/ProductItem";

export default function Home() {

    const { data } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['all-products']
    })

    return (
        <div className="h-full space-y-20">
            <Header />

            <ReviewsList />

            {data && (
                <Carrusel 
                    title="Sugerencias para ti"
                    itemsToShow={5}
                    itemsList={data
                        .sort((a, b) => a.fecha_lanzamiento < b.fecha_lanzamiento ? 1 : -1)
                        .slice(0,10)
                    }
                    ElementToRender={ProductItem}
                />
            )}

            <TrendingSearches />

            <img className="md:hidden rounded-lg"
                src="https://images.ctfassets.net/mmeshd7gafk1/4rQLaohmk9wFHk6ZfdAU9q/dfd7c68e737c3e1073b6c4c673cb5733/Slider_5-mobile__1_.jpg"
            />
            <img className="hidden md:block rounded-lg" 
                src="https://images.ctfassets.net/mmeshd7gafk1/5YDv2y0xq8QaRIp3v6iXpD/dd72334e596215ed160cc47682dc79cb/Slider_5_-_desktop__1_.jpg" 
            />
        </div>
    )
}
