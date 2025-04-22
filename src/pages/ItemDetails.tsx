import { Gallery } from "../components/Gallery";
import Checkpoints from "../components/Checkpoints";
import ProductPrice from "../components/item-details/ProductPrice";
import ProductStatus from "../components/item-details/ProductStatus";
import StorageOptions from "../components/item-details/StorageOptions";
import BatteryOptions from "../components/item-details/BatteryOptions";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetailsById } from "../api";
import ColorsOptions from "../components/item-details/ColorsOptions";
import { useEffect } from "react";

export default function ItemDetails() {

    const { id } = useParams();    

    const { data: item } = useQuery({
        queryFn: () => getProductDetailsById(id),
        queryKey: [`product-details-${id}`]
    })

    useEffect(() => {
        if (item) {
            document.title = `${item.modelo} ${item.almacenamiento[0]}GB - ${item.color[0]}`
        }           
    }, [item])

    if (item)
    return (
        <div>
            <div className="mb-20 md:grid md:grid-cols-3 items-center gap-10">
                <div className="col-span-1">
                    <Gallery
                        image_urls={
                            item.images.map((src: string) => ({
                                src,
                                tags: [],
                                title: ""
                            })) || []
                        }
                    />
                </div>
                <div className="col-span-2 px-4 md:px-10">
                    <ProductPrice item={item} />
                </div>
            </div>

            <Checkpoints />

            {/* OPCIONES DE SELECCIÓN */}
            <div id="buy" className="py-20 space-y-20">
                <ProductStatus itemPrices={item.prices} />
                <BatteryOptions />
                <StorageOptions storageOptionsList={item.almacenamiento} />
                <ColorsOptions itemImages={item.images} itemColors={item.color} />
            </div>
            
        </div>
    )
}
