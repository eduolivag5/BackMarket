import { Link } from "react-router-dom"
import {Image} from "@heroui/react";
import { Product } from "../types";

interface ItemProps {
    item: Product
}

export default function Item({ item } : ItemProps) {

    return (
        <Link to={`/details/${item.id}`} className="p-4 rounded-lg bg-transparent">
            <Image src={item.images[0]} alt={item.modelo} className="w-40" />
            <div className="mt-4">
                <p className="font-extrabold">{item.modelo}</p>
                <p className="font-light text-gray-500 text-sm">{item.color[0]} - {item.almacenamiento[0]} GB</p>
            </div>
            <div className="mt-4">
                <p className="font-extralight text-xs">Desde</p>
                <p className="font-extrabold">225$</p>
                <p className="font-medium text-sm line-through">300$ nuevo</p>
            </div>
        </Link>
    )
}
