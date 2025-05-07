import { Image } from "@heroui/react";
import { Checkbox } from "../ui/checkbox";
import { Dispatch, SetStateAction } from "react";

interface StorageOptionsProps {
    storageOptionsList: number[]
    selectedStorage: number
    setSelectedStorage: Dispatch<SetStateAction<number>>
    storagePrices: Record<number, number>
}

export default function StorageOptions({storageOptionsList, selectedStorage, setSelectedStorage, storagePrices} : StorageOptionsProps) { 

    const handleOptionClick = (storage: number) => {
        setSelectedStorage(storage)
        const target = document.getElementById("colors-options");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <div id="storage-options" className='pt-20 md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Image
                    alt="Opciones de almacenamiento"
                    src="/step-storage.avif"
                    className="w-full object-cover"
                />
            </div>

            <div className='md:col-span-2 md:px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona el almacenamiento</h1>
                <div className="space-y-2">
                    {storageOptionsList.map((storage) =>
                        <div
                            key={storage}
                            onClick={() => handleOptionClick(storage)}
                            className={`
                                rounded-md text-sm font-medium transition-colors 
                                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                                disabled:pointer-events-none disabled:opacity-50
                                px-4 cursor-pointer w-full py-4 text-left 
                                flex items-center justify-start gap-4 md:gap-8
                                ${selectedStorage === storage 
                                    ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90' 
                                    : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'}
                            `}
                        >
                            <Checkbox
                                checked={selectedStorage === storage}                                
                                onClick={() => handleOptionClick(storage)}
                            />
                            <div className="flex justify-between items-center w-full gap-4">
                                <span className="font-bold leading-snug break-words">{storage} GB</span>
                                <span className="font-light shrink-0">
                                    {storagePrices[storage] === 0 ? "Incluido" : `+${storagePrices[storage].toFixed(2)} €`}
                                </span>
                            </div>
                        </div>
                    )}
                </div>                
            </div>
        </div>
    )
}
