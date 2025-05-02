import { useState } from "react";
import { Review } from "../types";
import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter} from "@heroui/drawer";
import {User} from "@heroui/user";
import { Image } from "@heroui/react";
import { Button } from "@heroui/react";
import StarsRating from "./layout/StarsRating";
import { Link } from "react-router-dom";

interface ReviewItemProps {
    item: Review
}

export default function ReviewItem({ item }: ReviewItemProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-gray-100 transition-colors duration-300">
                <div
                    className="relative p-4 overflow-hidden min-h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                >

                    <span className="py-1 px-2 text-sm font-semibold bg-gray-100 rounded-sm">{item.name_user}</span>

                    {/* Sombra degradada */}
                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent z-10" />

                    {/* Nombre del producto */}
                    <p className="absolute pr-4 bottom-4 z-20 text-white text-sm line-clamp-3">
                        {item.comment}
                    </p>
                </div>
                <p className="pr-10 p-4 text-sm font-bold">{item.model}</p>
            </div>

            <Drawer isOpen={isOpen} size="2xl" onClose={() => setIsOpen(!isOpen)}>
                <DrawerContent>
                {(onClose) => (
                    <>
                        <DrawerHeader>{item.model}</DrawerHeader>
                        <DrawerBody>
                            <div className="flex gap-4 h-full">
                                <div className="flex-1">
                                    <Image src={item.image} />     
                                </div>                                                        
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <User name={item.name_user} />
                                        <p className="text-sm">Comprado el 10 de septiembre de 2024</p>
                                    </div>

                                    <StarsRating rating={item.stars} />

                                    <p className="text-sm leading-relaxed">{item.comment}</p>

                                    <div className="bg-gray-100 rounded-lg p-1 px-4 w-full">
                                        <Link to={`/details/${item.product_id}`} className="font-bold">
                                            {item.model} {'>'}
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="light" onPress={onClose}>Cerrar</Button>
                        </DrawerFooter>
                    </>
                )}
                </DrawerContent>
            </Drawer>
        </div>        
        
    );
}

