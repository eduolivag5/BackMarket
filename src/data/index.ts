import { Headphones, RefreshCcw, ShieldCheck, Truck } from "lucide-react";
import { sellConditionItem } from "../types";

export const sellConditions: sellConditionItem[] = [
    {
      icon: ShieldCheck, // por ejemplo, Lucide: <ShieldCheck />
      text: "2 años de garantía comercial",
    },
    {
      icon: Truck, // <Truck />
      text: "Envío gratuito",
    },
    {
      icon: RefreshCcw, // <RefreshCcw />
      text: "30 días de prueba",
    },
    {
      icon: Headphones, // <Headphones />
      text: "Servicio de Atención al Cliente (fines de semana incluidos)",
    },
];
  