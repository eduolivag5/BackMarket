import { Link } from "react-router-dom"
import SectionTitle from "./layout-items/SectionTitle"

const trendingSearches = [
    {
        title: "iPhone", 
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/1bRy70V8KNknn628bf14h8/705c15a1ba47975f4844b2c3a03ef876/Phone_HP_Category_Smartphone_desktop.jpg"
    },
    {
        title: "MacBook",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/5GjoGJCqWVngJRShjjG7a/7512922aa0bd54c31753861b48a320ba/HP_Category_Laptop_desktop.jpg",
    },
    {
        title: "iPad",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/jW258Um5YCpwOTHNgEokq/2b58f314b180705969b3193bb3dda90e/Phone_HP_Category_Tablet_desktop.jpg"
    }, 
    {
        title: "Consolas",
        imageSrc: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://images.ctfassets.net/mmeshd7gafk1/5Q6Fw32r8NELQcVLLxxqim/2a4d26bb2941ba6a3a49c640dcb02450/Phone_HP_Category_Gaming_desktop.jpg"
    }
]

export default function TrendingSearches() {
    return (
        <div className="space-y-2">
            <SectionTitle title='Compra los "más buscados"' />
            <div className="grid grid-cols-4 gap-4">
                {trendingSearches.map((item) => (
                    <Link to={`/categories/${item.title.toLowerCase()}`} className="space-y-1">
                        <img src={item.imageSrc} className="rounded-lg" />
                        <p className="px-1 font-bold text-lg">{item.title}</p>
                    </Link>
                ))}
            </div>            
        </div>
    )
}
