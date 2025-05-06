import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { BatteryOption, Product } from "../types";
import { getAllSalesStatus } from "../api";
import { BatteryOptionsList, batteryPrices } from "../data";

export function useProductConfigurator(item: Product) {
    const { data: salesStatus } = useQuery({
        queryKey: ['sales-status-list'],
        queryFn: getAllSalesStatus
    });

    const sortedItemPrices = useMemo(() => {
        return [...item.prices].sort((a, b) => {
            const orderA = salesStatus?.find(s => s.estado === a.status)?.order ?? Infinity;
            const orderB = salesStatus?.find(s => s.estado === b.status)?.order ?? Infinity;
            return orderA - orderB;
        });
    }, [item.prices, salesStatus]);

    const [selectedStatus, setSelectedStatus] = useState<string>(sortedItemPrices[0]?.status || '');
    const [selectedBattery, setSelectedBattery] = useState<BatteryOption>(BatteryOptionsList[0]);
    const [selectedStorage, setSelectedStorage] = useState<number>(item.storages[0]);
    const [selectedColor, setSelectedColor] = useState<string>(item.colors[0]);

    // Cálculo de precios adicionales
    const storagePrices = useMemo(() => {
        return item.storages.reduce<Record<number, number>>((acc, storage, index) => {
            acc[storage] = index * 30; 
            return acc;
        }, {});
    }, [item.storages]);

    const colorPrices = useMemo(() => {
        return item.colors.reduce<Record<string, number>>((acc, color, index) => {
            acc[color] = index * 10; 
            return acc;
        }, {});
    }, [item.colors]);

    // Precio base y precio final
    const basePrice = useMemo(() => {
        return sortedItemPrices.find(p => p.status === selectedStatus)?.price ?? 0;
    }, [sortedItemPrices, selectedStatus]);

    const finalPrice = useMemo(() => {
        const batteryExtra = batteryPrices[selectedBattery.title] || 0;
        const storageExtra = storagePrices[selectedStorage] || 0;
        const colorExtra = colorPrices[selectedColor] || 0;

        return basePrice + batteryExtra + storageExtra + colorExtra;
    }, [basePrice, selectedBattery, selectedStorage, selectedColor, storagePrices, colorPrices]);

    return {
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
    };
}
