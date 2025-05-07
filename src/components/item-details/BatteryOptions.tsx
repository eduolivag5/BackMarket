import { Image } from "@heroui/react";
import { BatteryIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { BatteryOption } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface BatteryOptionsProps {
    batteryOptionsList: BatteryOption[]
    selectedBattery: BatteryOption
    setSelectedBattery: Dispatch<SetStateAction<BatteryOption>>
    batteryPrices: Record<string, number>
}

export default function BatteryOptions({ batteryOptionsList, selectedBattery, setSelectedBattery, batteryPrices } : BatteryOptionsProps) {

    const handleOptionClick = (battery: BatteryOption) => {
        setSelectedBattery(battery)
        const target = document.getElementById("storage-options");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <div id="battery-options" className='pt-20 md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Image
                    alt="Opciones de almacenamiento"
                    src="/step-battery.avif"
                    className="w-full object-cover"
                />
            </div>

            <div className='md:col-span-2 md:px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona una opción de batería</h1>
                <div className="p-4 mb-4 text-sm bg-blue-100 rounded-lg flex items-center gap-4">
                    <BatteryIcon className="w-20" />
                    Todos los productos tienen garantizada una batería en buen estado.
                </div>
                <div className="space-y-2">
                    {batteryOptionsList.map((battery) => 
                        <div
                            key={battery.title}
                            onClick={() => handleOptionClick(battery)}
                            className={`
                                rounded-md text-sm font-medium transition-colors 
                                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                                disabled:pointer-events-none disabled:opacity-50
                                px-4 cursor-pointer w-full py-4 text-left 
                                flex items-center justify-start gap-4 md:gap-8
                                ${selectedBattery === battery 
                                    ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90' 
                                    : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'}
                            `}
                        >
                            <Checkbox
                                checked={selectedBattery === battery} 
                                onClick={() => handleOptionClick(battery)} 
                            />
                            
                            <div className="flex justify-between items-center w-full gap-4">
                                <div className="flex-1">
                                    <p className="font-bold leading-snug break-words">{battery.title}</p>
                                    <p className="font-light text-sm leading-snug break-words">{battery.description}</p>
                                </div>
                                <span className="font-light shrink-0">
                                    {batteryPrices[battery.title] === 0 
                                    ? "Incluido" 
                                    : `+${batteryPrices[battery.title].toFixed(2)} €`}
                                </span>
                            </div>
                        </div>
                      
                      
                    )}
                </div>                
            </div>
        </div>
    )
}
