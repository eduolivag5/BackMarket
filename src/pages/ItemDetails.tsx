import { Gallery } from "../components/Gallery";
import Checkpoints from "../components/Checkpoints";
import ProductPrice from "../components/item-details/ProductPrice";
import ProductStatus from "../components/item-details/ProductStatus";
import StorageOptions from "../components/item-details/StorageOptions";
import BatteryOptions from "../components/item-details/BatteryOptions";

export default function ItemDetails() {

    const item = {
        id: "prueba",
        image: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/ec975bb8-df95-43a5-b04d-de63378f4a12-1_3545f8dd-0f3d-4c11-ad1c-dbd574ca83e4.jpg",
        precio: 349.00,
        precio_old: 749.00,
        nombre: "iPhone 13",
        color: "Blanco estrella",
        almacenamiento: "128 GB"
    }

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-3 items-center gap-10">
                <div className="col-span-1">
                    <Gallery
                        image_urls={[
                            {
                                src: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/ec975bb8-df95-43a5-b04d-de63378f4a12-1_3545f8dd-0f3d-4c11-ad1c-dbd574ca83e4.jpg",
                                tags: [],
                                title: ""
                            },
                            {    
                                src: "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/ec975bb8-df95-43a5-b04d-de63378f4a12-2_31bf5998-c126-4f96-b541-075d1c315fd0.jpg",
                                tags: [],
                                title: ""
                            }
                        ]} 
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
            <StorageOptions />
            
        </div>
    )
}
