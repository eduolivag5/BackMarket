import { Headphones, RefreshCcw, ShieldCheck, Truck } from "lucide-react";
import { faqItem, sellConditionItem } from "../types";

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
  

export const faqList: faqItem[] = [
  {
    question: "Móviles baratos y buenos: ¿Hay ofertas con Back Market?",
    answer: "Con Back Market tienes ofertas todos los días del año, por lo que comprarás un móvil barato, ya que comprando reacondicionado siempre te ahorras dinero, hasta un 70%."
  },
  {
    question: "¿Cuál es la diferencia entre un móvil de segunda mano, uno usado y los reacondicionados de Back Market?",
    answer: "La diferencia entre un teléfono reacondicionado y uno de segunda mano es sencilla: generalmente, los "
      + "móviles de segunda mano no suelen someterse a una revisión antes de ser puestos a la venta. Esto puede "
      + "traducirse en un precio más bajo, pero la incertidumbre respecto al funcionamiento del producto puede llevar " 
      + "a costos adicionales inesperados. En caso de cualquier inconveniente técnico, tampoco cuentas con respaldo "
      + "alguno, lo que implica que podrías quedarte con un dispositivo que no funciona correctamente. "
      + "Los móviles reacondicionados de Back Market son sometidos a pruebas exhaustivas y reparaciones necesarias, " 
      + "asegurando que cumplan con estándares de calidad y funcionalidad."
  },
  {
    question: "Financiar móviles: ¿Puedo pagar mi móvil a plazos?",
    answer: "Por supuesto que puedes obtener tu móvil financiado, y para ello puedes hacerlo a través de Oney. Puedes financiar la compra en 3, 4 o 6 plazos y tienes 14 días para renunciar al crédito."
  }
]