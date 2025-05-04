import { useState } from "react";
import { Image } from "@heroui/react";
import { Checkbox } from "../ui/checkbox";

interface StorageOptionsProps {
    storageOptionsList: number[]
}

export default function StorageOptions({storageOptionsList} : StorageOptionsProps) {

    const [selectedStorage, setSelectedStorage] = useState<number>(storageOptionsList[0]);

    return (
        <div className='md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
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
                            onClick={() => setSelectedStorage(storage)}
                            className={`
                                whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                                h-9 px-4 cursor-pointer
                                w-full py-8 text-left flex items-center justify-start gap-8 ${selectedStorage === storage ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90' : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'}`}
                        >
                            <Checkbox
                                checked={selectedStorage === storage}                                
                                onClick={() => setSelectedStorage(storage)}
                            />
                            <div className="flex justify-between items-center gap-4 md:gap-8 w-full">
                                <span className="font-bold">{storage} GB</span>
                                <span className="font-light">Precio $$</span>
                            </div>
                        </div>
                    )}
                </div>                
            </div>
        </div>
    )
}
