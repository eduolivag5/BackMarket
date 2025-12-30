import { Gallery } from "../components/Gallery";
import Checkpoints from "../components/Checkpoints";
import ProductPrice from "../components/item-details/ProductPrice";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductDetailsById } from "../api";
import { useEffect } from "react";
import ProductConfigurator from "../components/item-details/ProductConfigurator";

export default function ItemDetails() {

    const { id } = useParams();    

    const { data: item } = useQuery({
        queryFn: () => getProductDetailsById(id),
        queryKey: [`product-details-${id}`]
    })

    useEffect(() => {
        if (item) {
            document.title = item.nameShort
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

            <ProductConfigurator item={item} />
            
        </div>
    )
}
