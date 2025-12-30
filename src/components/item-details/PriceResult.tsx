import { addToast, Button, Chip, Image, ToastProvider } from "@heroui/react"
import { BatteryOption, Product } from "../../types"

interface PriceResultProps {
    item: Product
    finalPrice: number
    selectedStatus: string
    selectedBattery: BatteryOption
    selectedStorage: number
    selectedColor: string
}

export default function PriceResult({item, finalPrice, selectedStatus, selectedBattery, selectedColor, selectedStorage} : PriceResultProps) {
    
    const highPrice = item.prices.sort((a, b) => a.price < b.price ? 1 : -1)[0].price;
    
    return (
        <>
        <ToastProvider placement="top-right" toastOffset={60} />
        <div id="price-result" className='pt-20 md:grid md:grid-cols-3 items-center space-y-4 md:space-y-0 gap-10'>
            <div className='col-span-1'>
                <Image src={item.images[0]} />
            </div>            

            <div className='md:col-span-2 md:px-20'>
                <h1 className="text-5xl font-medium mb-4 font-dm-serif">¡Tachán!</h1>
                <div className="p-4 space-y-4 rounded-md border border-primary">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold">{item.nameShort}</h1>
                        <div className="flex flex-wrap items-center gap-2">
                            <Chip color="default" variant="faded">{selectedStatus}</Chip>
                            <Chip color="default" variant="faded">{selectedBattery.title}</Chip>
                            <Chip color="default" variant="faded">{selectedStorage}</Chip>
                            <Chip color="default" variant="faded">{selectedColor}</Chip>
                        </div>
                    </div>                    

                    <div id={`price-${item.id}`} className="md:flex-1">
                        <p className="text-2xl font-bold">
                            {finalPrice.toFixed(2)}$
                        </p>
                        <div id={`disccount-${item.id}`} className={`flex gap-2 items-center justify-between ${finalPrice >= highPrice && 'hidden'}`}>
                            <span className="font-medium text-xs md:text-sm line-through">
                                {highPrice.toFixed(2)}€ nuevo
                            </span>
                            <Chip color="success"variant="flat">
                                <p className="text-xs md:text-sm font-bold">
                                    Ahorra {(highPrice - finalPrice).toFixed(2)}€
                                </p>
                            </Chip>
                        </div>
                        <p className="text-xs">IVA incluido*</p>
                    </div>

                    <Button
                        color="primary"
                        radius="sm"
                        size="lg"
                        className="w-full border border-foreground font-bold"
                        onPress={() => {
                            addToast({
                                title: "¡Ops!",
                                description: "Esta función no está habilitada.",
                                color: "primary"
                            })
                        }}
                    >
                        Añadir al carrito
                    </Button>
                </div>
            </div>
            
        </div>
        </>
    )
}
