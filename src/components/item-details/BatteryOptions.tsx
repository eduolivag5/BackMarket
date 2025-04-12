import { useState } from "react";
import { Image } from "@heroui/react";
import { BatteryIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface BatteryOption {
    title: string
    description: string
}

const BatteryOptionsList: BatteryOption[] = [
    {
        title: "Batería estándar",
        description: "Ideal para un uso diario"
    },
    {
        title: "Batería nueva",
        description: "Lo mejor para un uso intensivo"
    }
]

export default function BatteryOptions() {

    const [selectedBattery, setSelectedBattery] = useState<BatteryOption>(BatteryOptionsList[0]);

    return (
        <div className='grid grid-cols-3 items-center gap-10'>
            <div className='col-span-1'>
                <Image
                    alt="Opciones de almacenamiento"
                    src="/step-battery.avif"
                    className="w-full object-cover"
                    height={400}
                />
            </div>

            <div className='col-span-2 px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona una opción de batería</h1>
                <div className="p-4 mb-4 text-sm bg-blue-100 rounded-lg flex items-center gap-4">
                    <BatteryIcon />
                    Todos los productos tienen garantizada una batería en buen estado.
                </div>
                <div className="space-y-2">
                    {BatteryOptionsList.map((battery) => 
                        <Button
                            key={battery.title}
                            onClick={() => setSelectedBattery(battery)}
                            variant={selectedBattery === battery ? 'default' : 'outline'}
                            className="w-full py-8 text-left flex items-center justify-start gap-8"
                        >
                            <Checkbox
                                checked={selectedBattery === battery} 
                                onClick={() => setSelectedBattery(battery)} 
                            />                            
                            <div className="flex justify-between items-center gap-8 w-full">
                                <div>
                                    <p className="font-bold">{battery.title}</p>
                                    <p className="font-light text-sm">{battery.description}</p>
                                </div>
                                <span className="font-light">Precio $$</span>
                            </div>
                        </Button>
                    )}
                </div>                
            </div>
        </div>
    )
}
