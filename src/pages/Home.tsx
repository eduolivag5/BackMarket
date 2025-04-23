import Header from "../components/Header";
import TrendingSearches from "../components/TrendingSearches";
import ReviewsList from "../components/ReviewsList";
import ProductsList from "../components/ProductsList";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api";


export default function Home() {

    const { data } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['all-products']
    })

    return (
        <div className="h-full space-y-20">
            <Header />

            {data && <ProductsList items={data} />}

            <TrendingSearches />
            
            <ReviewsList />            

            <img className="md:hidden rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer"
                src="https://images.ctfassets.net/mmeshd7gafk1/4rQLaohmk9wFHk6ZfdAU9q/dfd7c68e737c3e1073b6c4c673cb5733/Slider_5-mobile__1_.jpg"
            />
            <img className="hidden md:block rounded-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer" 
                src="https://images.ctfassets.net/mmeshd7gafk1/5YDv2y0xq8QaRIp3v6iXpD/dd72334e596215ed160cc47682dc79cb/Slider_5_-_desktop__1_.jpg" 
            />
        </div>
    )
}
