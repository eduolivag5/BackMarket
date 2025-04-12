import React from "react";
import BatteryIcon from "../icons/checkpoints/Battery";
import ButtonsIcon from "../icons/checkpoints/Buttons";
import CameraIcon from "../icons/checkpoints/Camera";
import DataIcon from "../icons/checkpoints/Data";
import LocationIcon from "../icons/checkpoints/Location";
import MemmoryCardsIcon from "../icons/checkpoints/Memmory";
import UnlockIcon from "../icons/checkpoints/Unlocks";

interface CheckpointItemType {
    icon: React.ElementType
    name: string
}

const CheckpointItem = ({ item }: { item: CheckpointItemType }) => (
    <div className="flex-1 flex flex-col items-center justify-center gap-1 text-gray-600">
        <item.icon />
        <p className="text-sm font-medium">{item.name}</p>
    </div>
);

const checkpointsList: CheckpointItemType[] = [
    {
        icon: ButtonsIcon,
        name: 'Botones'
    },
    {
        icon: MemmoryCardsIcon,
        name: 'Lector de SIM y/o tarjeta de memoria'
    },
    {
        icon: DataIcon,
        name: 'Eliminación de datos'
    },
    {
        icon: BatteryIcon,
        name: 'Cargadores y/o cables'
    },
    {
        icon: UnlockIcon,
        name: 'Desbloqueando'
    },
    {
        icon: LocationIcon,
        name: 'GPS y/o sistema de localización'
    },
    {
        icon: CameraIcon,
        name: 'Cámaras'
    },
]

export default function Checkpoints() {
    return (
        <div className='text-center space-y-4'>
            <h1 className='text-xl font-bold'>
                Todos los dispositivos están reacondicionados por profesionales siguiendo 25 puntos de control
            </h1>
            <div className="flex items-start gap-2">
                {checkpointsList.map((item) => <CheckpointItem item={item} />)}
            </div>
        </div>
    )
}
