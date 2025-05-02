import { Card } from "@heroui/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Product, Review } from "../types"
import React from "react";

interface CarruselType {
    title: string | undefined;
    format: "compact" | "full";
    itemsList: Product[] | Review[];
    ElementToRender: React.ElementType;
}  

export function Carrusel({ title, format, itemsList, ElementToRender } : CarruselType) {

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
                {itemsList
                    .map((item) => (
                        <CarouselItem key={item.id} className={`basis-1/2 ${format === "compact" ? "md:basis-1/4" : "md:basis-1/5"}`}>
                            <Card className="h-full shadow-none border border-gray-300">
                                <ElementToRender item={item} />
                            </Card>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}
