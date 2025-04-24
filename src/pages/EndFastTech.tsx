import { Card } from "@heroui/react";
import YouTubeEmbed from "../components/YoutubeEmbed";

interface Add {
    title: string
    value: string
    description: string
}

interface Tip {
    image: string
    title: string
}

const adds: Add[] = [
    {
        title: "Estamos produciendo tecnología en exceso.",
        value: "16 mil millones",
        description: "Este es el número de smartphones que están circulando en el mundo actualmente. Esto significa 2 por cada ser humano del planeta (y sí, incluyendo a los bebés)."
    },
    {
        title: "Estamos generando más residuos electrónicos.",
        value: "82%",
        description: "La cantidad de residuos electrónicos ha aumentado desde 2010. Los vertederos ahora se extienden por todo el mundo, desde las zonas rurales de Hong Kong hasta México."
    },
    {
        title: "Estamos aumentando nuestra huella de carbono.",
        value: "40%",
        description: "Es el porcentaje que representa la etapa de fabricación en la huella de carbono total de la tecnología digital."
    }
]

const tips: Tip[] = [
    {image: "Reuse__1_.avif", title: "Reusar"},
    {image: "Repair__1_.avif", title: "Reparar"},
    {image: "Refurbish__1_.avif", title: "Reacondicionar"}
]

export default function EndFastTech() {
    return (
        <div className="space-y-10">
            <div className="space-y-2 text-center">
                <h1 className="text-5xl font-bold">Acabemos con la fast tech.</h1>
                <p className="text-lg font-medium">
                    La tecnología es ahora más potente, innovadora y avanzada que nunca.<br />
                    Entonces, ¿por qué cada año vamos corriendo detrás del último modelo?
                </p>
            </div>

            <div>
                <YouTubeEmbed />
            </div>

            <div className="space-y-2 leading-relaxed">
                <p>
                    La carrera de la fast tech por lanzar cada año "el dispositivo más innovador de la historia" 
                    está alimentando la crisis climática.
                </p>
                <p>
                    La fast tech es un sistema de sobreproducción y sobreconsumo que se basa en dispositivos diseñados 
                    para acabar en la basura, ya sea porque se rompen o porque la última "actualización" los deja 
                    obsoletos.
                </p>
                <p>
                    Está en todas partes. En nuestros bolsillos, en la economía mundial y, sobre todo, en nuestros 
                    residuos. Es hora de enfrentarnos al impacto de la fast tech en el planeta.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                {adds.map((add) => 
                    <div className="flex-1 space-y-2 bg-white rounded-lg p-4 md:p-8">
                        <h1 className="font-medium">{add.title}</h1>
                        <p className="w-full rounded-3xl p-8 font-bold bg-black text-white text-5xl">
                            {add.value}
                        </p>
                        <p className="text-sm leading-relaxed">{add.description}</p>
                    </div>
                )}
            </div>

            <h1 className="text-4xl font-bold text-center">Cambia el chip <br/>(y no el móvil)</h1>

            <div className="flex flex-col md:flex-row gap-4">
                {tips.map((tip) => 
                    <Card className="flex-1 p-4 text-center">
                        <p className="text-xl font-medium mb-2">{tip.title}</p>
                        <img src={`/tips/${tip.image}`} />
                    </Card>
                )}                    
            </div>


        </div>
    )
}
