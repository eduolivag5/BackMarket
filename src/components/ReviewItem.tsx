import { Review } from "../types";

interface ReviewItemProps {
    item: Review
}

export default function ReviewItem({ item }: ReviewItemProps) {
    return (
        <div>
            <div
                className="relative p-4 overflow-hidden min-h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
            >

                <span className="py-1 px-2 text-sm font-semibold bg-gray-100 rounded-sm">{item.name_user}</span>

                {/* Sombra degradada */}
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent z-10" />

                {/* Nombre del producto */}
                <p className="absolute pr-4 bottom-4 z-20 text-white text-sm line-clamp-3">
                    {item.comment}
                </p>
            </div>
            <p className="pr-10 p-4 text-sm font-bold">{item.modelo}</p>
        </div>
        
    );
}

