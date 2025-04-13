import { Card } from "@heroui/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Item from "./Item"
import { Product } from "../types"

interface CarruselType {
    itemsList: Product[]
}

export function CarruselProducts({ itemsList } : CarruselType) {

    return (
        <Carousel>
            <CarouselContent>
                {itemsList
                    .sort((a, b) => a.fecha_lanzamiento < b.fecha_lanzamiento ? 1 : -1)
                    .map((item) => (
                        <CarouselItem key={item.id} className="basis-1/5">
                            <Card className="shadow-none border border-gray-300">
                                <Item item={item} />
                            </Card>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
