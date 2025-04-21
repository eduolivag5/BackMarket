import { Star } from "lucide-react";

export default function StarsRating({ rating }: { rating: number }) {
  const percentage = (rating / 5) * 100;

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-[80px] h-4">
        {/* Fondo gris */}
        <div className="absolute top-0 left-0 flex w-full h-full text-gray-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="w-4 h-4 shrink-0" />
          ))}
        </div>

        {/* Estrellas rellenas */}
        <div
          className="absolute top-0 left-0 flex h-full overflow-hidden text-zinc-700"
          style={{ width: `${percentage}%` }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" className="w-4 h-4 shrink-0" />
          ))}
        </div>
      </div>

      <p className="text-sm font-bold">{rating.toFixed(1)}/5</p>
    </div>
  );
}
