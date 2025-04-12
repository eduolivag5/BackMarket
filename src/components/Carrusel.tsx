import { Card } from "@heroui/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Item from "./Item"

export function CarouselDemo() {
    return (
        <Carousel>
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/5">
                        <Card className="shadow-none border border-gray-300">
                            <Item />
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
