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

export default function ItemDetails() {

    const { id } = useParams();

    const { data: item } = useQuery({
        queryFn: () => getProductDetailsById(id!),
        queryKey: [`product-details-${id}`]
    })

    if (item)
    return (
        <div className="space-y-10">
            <div className="grid grid-cols-3 items-center gap-10">
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
                <div className="col-span-2 px-10">
                    <ProductPrice item={item} />
                </div>
            </div>

            <Checkpoints />

            {/* OPCIONES DE SELECCIÓN */}
            <ProductStatus />
            <BatteryOptions />
            <StorageOptions storageOptionsList={item.almacenamiento} />
            <ColorsOptions itemImages={item.images} itemColors={item.color} />
        </div>
    )
}
