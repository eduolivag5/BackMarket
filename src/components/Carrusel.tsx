import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ProductSkeleton } from "./ui/ProductSkeleton";
import { ReviewSkeleton } from "./ui/ReviewSkeleton";

interface CarruselType {
    title: string | undefined;
    format: "compact" | "full";
    itemsList: any[]; 
    ElementToRender: React.ElementType;
    isLoading?: boolean;
}

export function Carrusel({ title, format, itemsList, ElementToRender, isLoading }: CarruselType) {
    const skeletonArray = Array.from({ length: 5 });
    const dataToMap = isLoading ? skeletonArray : itemsList;

    const itemBasis = format === "compact" 
        ? "!basis-[75%] sm:!basis-[50%] md:!basis-[33.33%]" 
        : "!basis-[75%] sm:!basis-[50%] md:!basis-[20%]";

    return (
        <Carousel className="w-full relative py-2">
            <div className="flex items-center justify-between mb-6 px-1">
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h3>
                
                <div className="hidden md:flex gap-2 items-center">
                    <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm" />
                    <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border border-gray-200 bg-white hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm" />
                </div>
            </div>            
            
            <CarouselContent className="-ml-4 py-2">
                {dataToMap.map((item, index) => (
                    <CarouselItem
                        key={item?.id || `sk-${index}`}
                        className={`pl-4 ${itemBasis}`}
                    >
                        {isLoading ? (
                            // Skeletons con su propia tarjeta individual, borde y sombra
                            <div className="h-full p-5 bg-white shadow-sm border border-gray-100 rounded-2xl">
                                {format === "compact" ? <ReviewSkeleton /> : <ProductSkeleton />}
                            </div>
                        ) : (
                            <ElementToRender item={item} />
                        )}
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}