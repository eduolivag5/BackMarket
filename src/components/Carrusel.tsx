import { Card } from "@heroui/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Product, Review } from "../types"
import SectionTitle from "./layout-items/SectionTitle";
import React from "react";

interface CarruselType {
    title: string | undefined;
    itemsToShow: number;
    itemsList: Product[] | Review[];
    ElementToRender: React.ElementType;
}

export function Carrusel({ title, itemsToShow, itemsList, ElementToRender } : CarruselType) {

    return (
        <Carousel>
            <div className="flex items-center justify-between mb-2">
                <SectionTitle title={title} />
                <div className="hidden md:flex gap-2 items-center">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </div>            
            <CarouselContent>
                {itemsList
                    .map((item) => (
                        <CarouselItem key={item.id} className={`basis-1/2 md:basis-1/${itemsToShow}`}>
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
