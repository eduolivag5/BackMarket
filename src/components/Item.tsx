import { Link } from "react-router-dom"
import {Image} from "@heroui/react";

export default function Item() {

    const item = {
        id: "prueba",
        image: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/ec975bb8-df95-43a5-b04d-de63378f4a12-1_3545f8dd-0f3d-4c11-ad1c-dbd574ca83e4.jpg",
        precio: 349.00,
        precio_old: 749.00,
        nombre: "iPhone 13",
        color: "Blanco estrella",
        almacenamiento: "128 GB"
    }

    return (
        <Link to={`/details/${item.id}`} className="p-4 rounded-lg bg-transparent">
            <Image src={item.image} alt={item.nombre} className="w-40" />
            <div className="mt-4">
                <p className="font-extrabold">{item.nombre}</p>
                <p className="font-light text-gray-500 text-sm">{item.color} - {item.almacenamiento}</p>
            </div>
            <div className="mt-4">
                <p className="font-extralight text-xs">Desde</p>
                <p className="font-extrabold">{item.precio.toFixed(2)}$</p>
                <p className="font-medium text-sm line-through">{item.precio_old.toFixed(2)}$ nuevo</p>
            </div>
        </Link>
    )
}
