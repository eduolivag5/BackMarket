import { Link } from "react-router-dom";
import { Image } from "@heroui/react";
import { Product } from "../types";
import { Sparkles } from "lucide-react";

interface ItemProps {
    item: Product;
}

export default function ProductItem({ item }: ItemProps) {
    if (!item.prices || item.prices.length === 0) return null;

    const sortedPrices = [...item.prices].sort((a, b) => a.price - b.price);
    const minPrice = sortedPrices[0].price;
    const maxPrice = sortedPrices[sortedPrices.length - 1].price;

    const discountPercentage = maxPrice > minPrice 
        ? Math.round(((maxPrice - minPrice) / maxPrice) * 100) 
        : 0;

    return (
        <Link 
            to={`/products/details/${item.id}`} 
            /* AQUÍ ESTÁ EL CAMBIO CLAVE: Cada Link es una caja independiente 
               con su propio fondo, borde, sombra estática y sombra flotante en hover */
            className="flex flex-col justify-between h-full p-5 bg-white rounded-2xl border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-emerald-500 transition-all duration-300 group"
        >
            <div>
                {/* Etiqueta de ahorro */}
                <div className="flex justify-between items-start mb-3">
                    {discountPercentage > 0 ? (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                            <Sparkles className="w-3 h-3 text-emerald-500" />
                            Hasta -{discountPercentage}%
                        </span>
                    ) : (
                        <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                            Reacondicionado
                        </span>
                    )}
                </div>

                {/* Imagen del producto con zoom individual solo al hacer hover sobre ESTE item */}
                <div className="flex justify-center items-center h-44 my-2 overflow-hidden">
                    <Image 
                        src={item.images[0]} 
                        alt={item.nameShort} 
                        className="w-36 h-36 object-contain group-hover:scale-105 transition-transform duration-300" 
                    />
                </div>

                {/* Nombre del producto */}
                <div className="mt-2">
                    <p className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {item.nameShort}
                    </p>
                </div>
            </div>

            {/* Bloque de Precios */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline justify-between gap-2">
                <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Desde</span>
                    <span className="font-black text-lg text-gray-900">
                        {minPrice}$
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-[11px] text-gray-400 block line-through">
                        {maxPrice}$ nuevo
                    </span>
                </div>
            </div>
        </Link>
    );
}