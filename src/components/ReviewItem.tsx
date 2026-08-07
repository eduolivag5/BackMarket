import { useState } from "react";
import { Review } from "../types";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
import { User } from "@heroui/user";
import { Image } from "@heroui/react";
import { Button } from "@heroui/react";
import StarsRating from "./layout/StarsRating";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ReviewItemProps {
    item: Review;
}

export default function ReviewItem({ item }: ReviewItemProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="h-full">
            {/* Tarjeta de la reseña con diseño flotante, bordes redondeados y sombra independiente */}
            <div 
                onClick={() => setIsOpen(true)} 
                className="group flex flex-col justify-between h-full bg-white rounded-2xl border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:border-emerald-500 transition-all duration-300 cursor-pointer overflow-hidden"
            >
                {/* Contenedor de la imagen de fondo */}
                <div
                    className="relative p-5 overflow-hidden h-72 bg-cover bg-center flex flex-col justify-between"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    {/* Insignia del usuario con efecto blur moderno */}
                    <span className="self-start py-1.5 px-3 text-xs font-semibold bg-white/90 backdrop-blur-md text-gray-800 rounded-full shadow-sm">
                        {item.userName}
                    </span>

                    {/* Sombra degradada para legibilidad del comentario */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                    {/* Comentario recortado a 3 líneas */}
                    <p className="relative z-20 text-white text-xs md:text-sm line-clamp-3 font-medium leading-relaxed">
                        "{item.comment}"
                    </p>
                </div>

                {/* Título del producto inferior */}
                <div className="p-4 bg-white flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                        {item.productNameShort}
                    </p>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
            </div>

            {/* Drawer Modernizado */}
            <Drawer isOpen={isOpen} size="2xl" onClose={() => setIsOpen(false)}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="border-b border-gray-100 pb-4">
                                <div>
                                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider block mb-1">Opinión verificada</span>
                                    <h3 className="text-xl font-black text-gray-900">{item.productNameShort}</h3>
                                </div>
                            </DrawerHeader>

                            <DrawerBody className="py-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start h-full">
                                    {/* Imagen grande en el Drawer */}
                                    <div className="flex justify-center items-center bg-gray-50 rounded-2xl p-4 border border-gray-100 overflow-hidden">
                                        <Image 
                                            src={item.image} 
                                            alt={item.productNameShort}
                                            className="w-full h-80 object-cover rounded-xl shadow-sm" 
                                        />
                                    </div>                                       
                                    
                                    {/* Información detallada */}
                                    <div className="flex flex-col space-y-6">
                                        <div className="flex items-center justify-between">
                                            <User 
                                                name={item.userName} 
                                                description="Cliente verificado"
                                                classNames={{
                                                    name: "font-bold text-gray-900",
                                                    description: "text-emerald-600 text-xs font-medium"
                                                }}
                                            />
                                            <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                <span>Compra segura</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <StarsRating rating={item.stars} />
                                            <p className="text-xs text-gray-400">Publicado recientemente</p>
                                        </div>

                                        <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                                "{item.comment}"
                                            </p>
                                        </div>

                                        {/* Tarjeta de enlace al producto */}
                                        <div className="mt-auto">
                                            <Link 
                                                to={`/products/details/${item.productId}`} 
                                                onClick={onClose}
                                                className="group flex items-center justify-between p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 rounded-2xl transition-all duration-300"
                                            >
                                                <div>
                                                    <span className="text-[11px] font-semibold text-emerald-700 block uppercase">Ver producto reseñado</span>
                                                    <span className="font-bold text-sm text-gray-900 group-hover:text-emerald-900">
                                                        {item.productNameShort}
                                                    </span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </DrawerBody>

                            <DrawerFooter className="border-t border-gray-100 pt-4">
                                <Button 
                                    variant="flat" 
                                    onPress={onClose}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl px-6"
                                >
                                    Cerrar
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}