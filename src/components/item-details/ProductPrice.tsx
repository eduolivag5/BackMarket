import { Link } from 'react-router-dom'
import { HeartIcon } from "@heroicons/react/24/outline";
import { Button, Chip } from "@heroui/react";
import { InfoItem } from '../InfoItem';
import ShippingIcon from '../../icons/Shipping';
import GarantiaIcon from '../../icons/Garantia';
import VerificationIcon from '../../icons/Verification';

export default function ProductPrice({ item } : {item: any}) {
    return (
        <div className='space-y-4'>
            <Chip 
                color="success" 
                startContent={<img src="/butterfly.svg" className="w-5 h-5" />} 
                endContent={<Link to="#eco" className="underline font-semibold">Más sostenible que nuevo</Link>} 
                variant="flat"
                className="px-4"
            />
            <p className="text-3xl font-semibold">
                {item.nombre} {item.almacenamiento}GB - {item.color} - Libre
            </p>

            <div className="flex gap-4">
                <div id={`price-${item.id}`} className="flex-1">
                    <p className="text-xl font-bold">{item.precio.toFixed(2)} €</p>
                    <div id={`disccount-${item.id}`} className="flex gap-2 items-center">
                        <span className="font-medium text-sm line-through">{item.precio.toFixed(2)} € nuevo</span>
                        <Chip color="success"variant="flat">
                            <p className="font-bold">Ahorra 403,00 €</p>
                        </Chip>
                    </div>
                    <p className="text-xs">IVA incluido*</p>
                </div>

                <div className="flex items-center gap-2 flex-1">
                    <Button color="primary" radius="sm" size="lg" className="w-full border border-foreground font-bold">
                        <Link to="/buy">
                            Comprar
                        </Link>
                    </Button>
                    <Button isIconOnly color="secondary" radius="sm" className="p-2 border border-foreground">
                        <HeartIcon />
                    </Button>
                </div>
            </div>

            <hr />

            <div className="space-y-2">
                <InfoItem
                    Icon={ShippingIcon}
                    title="Envío gratuito el 15 abr - 16 abr."
                    subtitle="Envío rápido entre el 14 abr y el 15 abr desde 5,00 €."
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
