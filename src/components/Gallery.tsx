import { Card, Chip, Image } from "@heroui/react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface GalleryItemType {
    src: string;
    title: string | undefined;
    tags: string[] | undefined;
}

interface GalleryProps {
    image_urls: GalleryItemType[]
}

export function Gallery({ image_urls }: GalleryProps) {
    return (
        <Carousel>
            <CarouselContent>
                {Array.from({ length: image_urls.length }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Card className="relative shadow-none border-none bg-gradient-to-b from-pink-400 to-orange-400">
                            <Image
                                alt={`Imagen de artículo ${index + 1}`}
                                src={image_urls[index].src}
                                className="w-full object-cover"
                                height={400}
                            />
                            
                            {(image_urls[index].tags || image_urls[index].title) && (
                                <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                                    <p className="text-3xl font-extrabold mb-2 text-gray-100">{image_urls[index].title}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {image_urls[index].tags?.map((tag, tagIndex) => (
                                            <Chip key={tagIndex} size="sm" variant="solid">
                                            {tag}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="mt-2 flex gap-2 items-center justify-center">
                <CarouselPrevious />
                {image_urls.map((image, index) => (
                    <Image
                        radius="sm"
                        alt={`Imagen de artículo ${index + 1}`}
                        src={image.src}
                        className="w-full object-cover border border-gray-300"
                        height={40}
                    />
                ))}
                <CarouselNext />
            </div>
            
        </Carousel>
    )
}
