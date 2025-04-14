import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Product } from "../../types";
import { Gallery } from "../Gallery";

interface ColorsOptionsProps {
    itemImages: Product["images"]
    itemColors: Product["color"]
}

export default function ColorsOptions({itemImages, itemColors} : ColorsOptionsProps) {

    const [selectedColor, setSelectedColor] = useState<string>(itemColors[0]);

    return (
        <div className='md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Gallery
                    image_urls={
                        itemImages.map((src: string) => ({
                            src,
                            tags: [],
                            title: ""
                        })) || []
                    }
                />
            </div>

            <div className='md:col-span-2 md:px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona el color</h1>
                <div className="grid grid-cols-2 gap-2">
                    {itemColors.map((color) => 
                        <Button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            variant={selectedColor === color ? 'default' : 'outline'}
                            className="w-full py-8 text-left flex items-center justify-start gap-4 md:gap-8"
                        >
                            <Checkbox
                                checked={selectedColor === color} 
                                onClick={() => setSelectedColor(color)} 
                            />                            
                            <div>
                                <p className="font-bold">{color}</p>
                                <span className="font-light">Precio $$</span>
                            </div>
                        </Button>
                    )}
                </div>                
            </div>
        </div>
    )
}
