import { Gallery } from "../Gallery";
import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const statuses = [
    {
        estado: "Correcto",
        screen_tags: ["Puede tener arañazos leves", "Piezas revisadas"],
        case_tags: ["Marcas visibles de uso", "Piezas revisadas", "Batería para uso diario"]
    },
    {
        estado: "Bueno",
        screen_tags: ["Impecable", "Piezas revisadas"],
        case_tags: ["Leves marcas de uso", "Piezas revisadas", "Batería para uso diario"]
    },
    {
        estado: "Excelente",
        screen_tags: ["Impecable", "Piezas revisadas"],
        case_tags: ["Casi sin marcas de uso", "Piezas revisadas", "Batería para uso diario"]
    },
    {
        estado: "Premium",
        screen_tags: ["Impecable"],
        case_tags: ["Sin marcas de uso", "Mejor calidad", "Piezas de Apple", "Batería para un uso intenso"]
    },
]

export default function ProductStatus() {

    const [selectedStatus, setSelectedStatus] = useState<string>("Correcto");

    return (
        <div className='grid grid-cols-3 items-center gap-10'>
            <div className='col-span-1'>
                <Gallery 
                    image_urls={[
                        {
                            src: `/status/${selectedStatus.toLowerCase()}_pantalla.avif`, 
                            title: "Pantalla",
                            tags: statuses.find((item) => item.estado === selectedStatus)?.screen_tags
                        }, 
                        {
                            src: `/status/${selectedStatus.toLowerCase()}_carcasa.avif`,
                            title: "Carcasa",
                            tags: statuses.find((item) => item.estado === selectedStatus)?.case_tags
                        }
                    ]} 
                />
            </div>

            <div className='col-span-2 px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona la condición</h1>
                <div className="grid grid-cols-2 gap-2">
                    {statuses.map((status) =>
                        <Button
                            key={status.estado}
                            onClick={() => setSelectedStatus(status.estado)}
                            variant={selectedStatus.toLowerCase() === status.estado.toLowerCase() ? 'default' : 'outline'}
                            className="w-full py-8 text-left flex items-center justify-start gap-8"
                        >
                            <Checkbox
                                checked={selectedStatus.toLowerCase() === status.estado.toLowerCase()}
                                onClick={() => setSelectedStatus(status.estado)}
                            />                         
                            <div className="text-left">
                                <p className="font-bold">{status.estado}</p>
                                <p className="font-light">Precio $$</p>
                            </div>
                        </Button>
                    )}
                </div>                
            </div>
        </div>
    )
}
