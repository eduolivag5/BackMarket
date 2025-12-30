import { Link } from "react-router-dom"
import { Image } from "@heroui/react";
import { Product } from "../types";

interface ItemProps {
    item: Product
}

export default function ProductItem({ item } : ItemProps) {

    return (
        <Link to={`/products/details/${item.id}`} className="p-4 rounded-lg">
            <div className="flex justify-center">
                <Image src={item.images[0]} alt={item.nameShort} className="w-40" />
            </div>
            <div className="mt-4">
                <p className="font-extrabold">{item.nameShort}</p>
            </div>
            <div className="mt-4">
                <p className="font-extralight text-xs">Desde</p>
                <p className="font-extrabold">
                    {item.prices.sort((a, b) => a.price - b.price)[0].price}$
                </p>
                <p className="font-medium text-sm line-through">
                    {item.prices.sort((a, b) => b.price - a.price)[0].price}$ nuevo
                </p>
            </div>
        </Link>

    )
}
