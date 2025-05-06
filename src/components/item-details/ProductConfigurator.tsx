import { Product } from "../../types";
import ProductStatus from "./ProductStatus";
import BatteryOptions from "./BatteryOptions";
import StorageOptions from "./StorageOptions";
import ColorsOptions from "./ColorsOptions";
import { useProductConfigurator } from "../../hooks/useProductConfigurator";
import { BatteryOptionsList, batteryPrices } from "../../data";
import PriceResult from "./PriceResult";

export default function ProductConfigurator({ item }: { item: Product }) {
    const {
        salesStatus,
        sortedItemPrices,
        selectedStatus,
        setSelectedStatus,
        selectedBattery,
        setSelectedBattery,
        selectedStorage,
        setSelectedStorage,
        selectedColor,
        setSelectedColor,
        storagePrices,
        colorPrices,
        finalPrice
    } = useProductConfigurator(item);

    return (
        <div id="buy" className="py-20">
            {salesStatus && (
                <ProductStatus
                    salesStatus={salesStatus}
                    sortedItemPrices={sortedItemPrices}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                />
            )}

            <BatteryOptions
                batteryOptionsList={BatteryOptionsList}
                selectedBattery={selectedBattery}
                setSelectedBattery={setSelectedBattery}
                batteryPrices={batteryPrices}
            />
            
            <StorageOptions
                storageOptionsList={item.storages}
                selectedStorage={selectedStorage}
                setSelectedStorage={setSelectedStorage}
                storagePrices={storagePrices}
            />
            
            <ColorsOptions
                itemImages={item.images}
                itemColors={item.colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                colorPrices={colorPrices}
            />

            <hr />

            <PriceResult
                item={item}
                finalPrice={finalPrice} 
                selectedBattery={selectedBattery}
                selectedColor={selectedColor}
                selectedStatus={selectedStatus}
                selectedStorage={selectedStorage}    
            />
        </div>
    );
}
