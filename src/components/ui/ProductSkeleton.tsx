import { Skeleton } from "@heroui/react";

export function ProductSkeleton() {
    return (
        <div className="p-4 rounded-lg w-full space-y-5">
            {/* Espacio de la imagen (w-40 centrado) */}
            <div className="flex justify-center">
                <Skeleton className="rounded-lg w-40 h-40" />
            </div>
            
            {/* Título */}
            <div className="space-y-2">
                <Skeleton className="w-3/4 h-4 rounded-lg" />
            </div>

            {/* Precios */}
            <div className="space-y-2 mt-4">
                <Skeleton className="w-1/4 h-3 rounded-lg" /> {/* "Desde" */}
                <Skeleton className="w-1/2 h-5 rounded-lg" /> {/* Precio actual */}
                <Skeleton className="w-1/3 h-3 rounded-lg" /> {/* Precio nuevo */}
            </div>
        </div>
    );
}