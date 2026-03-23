import { Skeleton } from "@heroui/react";

export function ReviewSkeleton() {
    return (
        <div className="w-full">
            {/* El contenedor principal con la misma altura min-h-96 */}
            <div className="relative p-4 min-h-96 bg-gray-200 rounded-t-lg overflow-hidden">
                {/* Badge del nombre de usuario */}
                <Skeleton className="w-24 h-6 rounded-sm mb-4" />
                
                {/* Simulación del degradado/contenido inferior */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <Skeleton className="w-full h-3 rounded-lg opacity-50" />
                    <Skeleton className="w-5/6 h-3 rounded-lg opacity-50" />
                    <Skeleton className="w-4/6 h-3 rounded-lg opacity-50" />
                </div>
            </div>
            
            {/* El texto del nombre del producto que va debajo */}
            <div className="p-4">
                <Skeleton className="w-full h-4 rounded-lg" />
            </div>
        </div>
    );
}