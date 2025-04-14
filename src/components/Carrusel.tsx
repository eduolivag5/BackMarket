import { Card } from "@heroui/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Item from "./Item"
import { Product } from "../types"

interface CarruselType {
    title: string | undefined;
    itemsList: Product[];
}

export function CarruselProducts({ title, itemsList } : CarruselType) {

    return (
        <Carousel>
            <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-2xl">{title}</p>
                <div className="hidden md:flex gap-2 items-center">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </div>            
            <CarouselContent>
                {itemsList
                    .map((item) => (
                        <CarouselItem key={item.id} className="basis-1/2 md:basis-1/5">
                            <Card className="h-full shadow-none border border-gray-300">
                                <Item item={item} />
                            </Card>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}
