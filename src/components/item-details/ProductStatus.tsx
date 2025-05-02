import { Gallery } from "../Gallery";
import { useState } from "react";
import { Button } from "../ui/button";
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

    const [selectedStatus, setSelectedStatus] = useState<string>("Correcto");

    if (salesStatus)
    return (
        <div className='md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Gallery 
                    image_urls={[
                        {
                            src: `/status/${selectedStatus.toLowerCase()}_pantalla.avif`, 
                            title: "Pantalla",
                            tags: salesStatus.find((item) => item.estado === selectedStatus)?.screen_tags
                        }, 
                        {
                            src: `/status/${selectedStatus.toLowerCase()}_carcasa.avif`,
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
                        <Button
                            key={status.status}
                            onClick={() => setSelectedStatus(status.status)}
                            variant={selectedStatus.toLowerCase() === status.status.toLowerCase() ? 'default' : 'outline'}
                            className="w-full py-8 text-left flex items-center justify-start gap-4 md:gap-8"
                        >
                            <Checkbox
                                checked={selectedStatus.toLowerCase() === status.status.toLowerCase()}
                                onClick={() => setSelectedStatus(status.status)}
                            />                         
                            <div className="text-left">
                                <p className="font-bold">{status.status}</p>
                                <p className="font-light">{status.price}$</p>
                            </div>
                        </Button>
                    )}
                </div>                
            </div>
        </div>
    )
}
