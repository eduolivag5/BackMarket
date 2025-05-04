import { Gallery } from "../Gallery";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Product } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { getAllSalesStatus } from "../../api";

interface ProductStatusProps {
    itemPrices: Product["prices"]
}

export default function ProductStatus({itemPrices} : ProductStatusProps) {

    const {data: salesStatus} = useQuery({
        queryKey: ['sales-status-list'],
        queryFn: getAllSalesStatus
    })

    const sortedItemPrices = [...itemPrices].sort((a, b) => {
        const orderA = salesStatus?.find(s => s.estado === a.status)?.order ?? Infinity;
        const orderB = salesStatus?.find(s => s.estado === b.status)?.order ?? Infinity;
        return orderA - orderB;
    });

    const [selectedStatus, setSelectedStatus] = useState<string>(sortedItemPrices[0].status);

    if (salesStatus)
    return (
        <div className='md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Gallery 
                    image_urls={[
                        {
                            src: `/status/${selectedStatus.toLowerCase().replace(' ', '_')}_pantalla.avif`, 
                            title: "Pantalla",
                            tags: salesStatus.find((item) => item.estado === selectedStatus)?.screen_tags
                        }, 
                        {
                            src: `/status/${selectedStatus.toLowerCase().replace(' ', '_')}_carcasa.avif`,
                            title: "Carcasa",
                            tags: salesStatus.find((item) => item.estado === selectedStatus)?.case_tags
                        }
                    ]} 
                />
            </div>

            <div className='md:col-span-2 md:px-20'>
                <h1 className="text-xl font-medium mb-4">Selecciona la condición</h1>
                <div className="grid grid-cols-2 gap-2">
                    {sortedItemPrices.map((status) =>
                        <div
                            key={status.status}
                            onClick={() => setSelectedStatus(status.status)}
                            className={`
                                whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                                h-9 px-4 cursor-pointer
                                w-full py-8 text-left flex items-center justify-start gap-8 ${selectedStatus.toLowerCase() === status.status.toLowerCase() ? 'bg-primary text-primary-foreground shadow hover:bg-primary/90' : 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground'}`}
                        >
                            <Checkbox
                                checked={selectedStatus.toLowerCase() === status.status.toLowerCase()}
                                onClick={() => setSelectedStatus(status.status)}
                            />                         
                            <div className="text-left">
                                <p className="font-bold">{status.status}</p>
                                <p className="font-light">{status.price}$</p>
                            </div>
                        </div>
                    )}
                </div>                
            </div>
        </div>
    )
}
