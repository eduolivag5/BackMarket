import { Link } from 'react-router-dom'
import { HeartIcon } from "@heroicons/react/24/outline";
import { Button, Chip } from "@heroui/react";
import { InfoItem } from '../InfoItem';
import ShippingIcon from '../../icons/Shipping';
import GarantiaIcon from '../../icons/Garantia';
import VerificationIcon from '../../icons/Verification';
import { Product } from '../../types';

export default function ProductPrice({ item } : {item: Product}) {

    const lowPrice = item.prices.sort((a, b) => a.price > b.price ? 1 : -1)[0].price;
    const highPrice = item.prices.sort((a, b) => a.price < b.price ? 1 : -1)[0].price;

    const today = new Date();
    const tomorrow = new Date(today); 
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateOptions: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };

    return (
        <div className='space-y-4'>
            <Chip 
                color="success" 
                startContent={<img src="/butterfly.svg" className="w-5 h-5" />} 
                endContent={<Link to="#eco" className="underline font-semibold">Más sostenible que nuevo</Link>} 
                variant="flat"
                className="hidden md:flex px-4"
            />
            <p className="text-3xl font-semibold">
                {item.modelo} {item.almacenamiento[0]}GB - {item.color[0]} - Libre
            </p>

            <div className="flex gap-4">
                <div id={`price-${item.id}`} className="md:flex-1">
                    <p className="text-xl font-bold">
                        {lowPrice.toFixed(2)}$
                    </p>
                    <div id={`disccount-${item.id}`} className="flex gap-2 items-center">
                        <span className="font-medium text-xs md:text-sm line-through">
                            {highPrice.toFixed(2)}€ nuevo
                        </span>
                        <Chip color="success"variant="flat">
                            <p className="text-xs md:text-sm font-bold">
                                Ahorra {(highPrice - lowPrice).toFixed(2)}€
                            </p>
                        </Chip>
                    </div>
                    <p className="text-xs">IVA incluido*</p>
                </div>

                <div className="flex items-center gap-2 flex-1">
                    <Button
                        color="primary"
                        radius="sm"
                        size="lg"
                        className="w-full border border-foreground font-bold"
                        onPress={() => {
                            const target = document.getElementById("buy");
                            if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Comprar
                    </Button>
                    <Button isIconOnly color="secondary" radius="sm" className="hidden md:block p-2 border border-foreground">
                        <HeartIcon />
                    </Button>
                </div>
            </div>

            <hr />

            <div className="space-y-2">
                <InfoItem
                    Icon={ShippingIcon}
                    title={`Envío gratuito hoy ${today.toLocaleString('es-ES', dateOptions)}.`}
                    subtitle={`Envío rápido entre el ${today.toLocaleString('es-ES', dateOptions)} 
                        y el ${tomorrow.toLocaleString('es-ES', dateOptions)} desde 5,00 €.`
                    }
                />
                <InfoItem
                    Icon={GarantiaIcon}
                    title="30 días de prueba"
                    subtitle="24 meses de garantía"
                />
                <InfoItem
                    Icon={VerificationIcon}
                    title="Reacondicionado por expertos"
                />
            </div>
        </div>
    )
}
