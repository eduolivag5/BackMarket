import { Gallery } from "../Gallery";
import { Checkbox } from "../ui/checkbox";
import { Product, StatusList } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface ProductStatusProps {
    salesStatus: StatusList
    sortedItemPrices: Product["prices"]
    selectedStatus: string
    setSelectedStatus: Dispatch<SetStateAction<string>>
}

export default function ProductStatus({salesStatus, sortedItemPrices, selectedStatus, setSelectedStatus} : ProductStatusProps) {
    
    const handleOptionClick = (status: string) => {
        setSelectedStatus(status)
        const target = document.getElementById("battery-options");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    return (
        <div id="product-status" className='md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Gallery 
                    image_urls={[
                        {
                            src: `/status/${selectedStatus.toLowerCase().replace(' ', '_')}_pantalla.avif`, 
                            title: "Pantalla",
                            tags: salesStatus.find((item) => item.estado === selectedStatus)?.screenTags
                        }, 
                        {
                            src: `/status/${selectedStatus.toLowerCase().replace(' ', '_')}_carcasa.avif`,
                            title: "Carcasa",
                            tags: salesStatus.find((item) => item.estado === selectedStatus)?.caseTags
                        }
                    ]} 
                />
            </div>

            <div className='md:col-span-2 md:px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona la condición</h1>
                <div className="grid md:grid-cols-2 gap-2">
                    {sortedItemPrices.map((status) =>
                        <div
                            key={status.status}
                            onClick={() => handleOptionClick(status.status)}
                            className={`
                                rounded-md text-sm font-medium transition-colors 
                                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                                disabled:pointer-events-none disabled:opacity-50
                                px-4 cursor-pointer w-full py-4 text-left 
                                flex items-center justify-start gap-4 md:gap-8
                                ${selectedStatus.toLowerCase() === status.status.toLowerCase() 
                                    ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90' 
                                    : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'}
                            `}
                        >
                            <Checkbox
                                checked={selectedStatus.toLowerCase() === status.status.toLowerCase()}
                                onClick={() => handleOptionClick(status.status)}
                            />                         
                            <div className="flex md:flex-col justify-between md:justify-normal w-full">
                                <p className="font-bold leading-snug break-words">{status.status}</p>
                                <p className="font-light shrink-0">{status.price.toFixed(2)} €</p>
                            </div>
                        </div>
                    )}
                </div>                
            </div>
        </div>
    )
}
