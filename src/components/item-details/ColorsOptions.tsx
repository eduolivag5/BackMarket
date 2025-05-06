import { Dispatch, SetStateAction } from "react";
import { Checkbox } from "../ui/checkbox";
import { Product } from "../../types";
import { Gallery } from "../Gallery";

interface ColorsOptionsProps {
    itemImages: Product["images"]
    itemColors: Product["colors"]
    selectedColor: string
    setSelectedColor: Dispatch<SetStateAction<string>>
    colorPrices: Record<string, number>
}

export default function ColorsOptions({itemImages, itemColors, selectedColor, setSelectedColor, colorPrices} : ColorsOptionsProps) {

    const handleOptionClick = (color: string) => {
        setSelectedColor(color)
        const target = document.getElementById("price-result");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <div id="colors-options" className='py-20 md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
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
                        <div
                            key={color}
                            onClick={() => handleOptionClick(color)}
                            className={`
                                whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                                h-9 px-4 cursor-pointer
                                w-full py-8 text-left flex items-center justify-start gap-8 ${selectedColor === color ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90' : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'}`}
                        >
                            <Checkbox
                                checked={selectedColor === color} 
                                onClick={() => handleOptionClick(color)} 
                            />                            
                            <div>
                                <p className="font-bold">{color}</p>
                                <span className="font-light">+{colorPrices[color].toFixed(2) || 0} €</span>
                            </div>
                        </div>
                    )}
                </div>                
            </div>
        </div>
    )
}
