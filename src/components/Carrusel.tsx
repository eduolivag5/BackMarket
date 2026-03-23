import { Card } from "@heroui/react"; // Asumiendo que usas HeroUI
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
    return (
        <Carousel>
            <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-xl">{title}</span>
                <div className="hidden md:flex gap-2 items-center">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </div>            
            <CarouselContent>
                {itemsList.map((item, index) => (
                    <CarouselItem
                        key={item.id || `sk-${index}`}
                        className={`!basis-[66.66%] ${format === "compact" ? "md:!basis-[33.33%]" : "md:!basis-[20%]"}`}
                    >
                        <Card className="h-full shadow-none border border-gray-300">
                            {isLoading ? (
                                // Si el formato es compact, asumimos que es una Review
                                // Si es full, asumimos que es un Producto
                                format === "compact" ? <ReviewSkeleton /> : <ProductSkeleton />
                            ) : (
                                <ElementToRender item={item} />
                            )}
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}