import { useState } from "react";
import { Image } from "@heroui/react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface StorageOptionsProps {
    storageOptionsList: number[]
}

export default function StorageOptions({storageOptionsList} : StorageOptionsProps) {

    const [selectedStorage, setSelectedStorage] = useState<number>(storageOptionsList[0]);

    console.log(selectedStorage)

    return (
        <div className='grid grid-cols-3 items-center gap-10'>
            <div className='col-span-1'>
                <Image
                    alt="Opciones de almacenamiento"
                    src="/step-storage.avif"
                    className="w-full object-cover"
                    height={400}
                />
            </div>

            <div className='col-span-2 px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona el almacenamiento</h1>
                <div className="space-y-2">
                    {storageOptionsList.map((storage) =>
                        <Button
                            key={storage}
                            onClick={() => setSelectedStorage(storage)}
                            variant={selectedStorage === storage ? 'default' : 'outline'}
                            className="w-full py-8 text-left flex items-center justify-start gap-8"
                        >
                            <Checkbox
                                checked={selectedStorage === storage}                                
                                onClick={() => setSelectedStorage(storage)}
                            />
                            <div className="flex justify-between items-center gap-8 w-full">
                                <span className="font-bold">{storage} GB</span>
                                <span className="font-light">Precio $$</span>
                            </div>
                        </Button>
                    )}
                </div>                
            </div>
        </div>
    )
}
