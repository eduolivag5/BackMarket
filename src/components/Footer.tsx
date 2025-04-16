import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import React from "react";

interface SocialNetwork {
    icon: React.ElementType,
    link: string
}

const socialNetworkList: SocialNetwork[] = [
    {icon: FaTwitter, link: "https://www.twitter.com/back_market_es"},
    {icon: FaFacebook, link: "https://www.facebook.com/Back-Market-Espa%C3%B1a-196051144097157"},
    {icon: FaInstagram, link: "https://www.instagram.com/backmarket_es"},
    {icon: FaLinkedinIn, link: "https://es.linkedin.com/company/back-market"}
]

const servicesList = ["Garantía comercial", "Seguros", "Renove", "Descuento estudiantes", "Pago 100% seguro"]
const paymentsMethodsList = ["visa", "mastercard", "amex", "oney", "paypal", "apple_pay", "google_pay"]

const buyingGuidesList = ["Guías de compra", "Comparar productos", "Ideas de regalos"]

export default function Footer() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="md:grid md:grid-cols-4 space-y-6 md:space-y-0">
                <div id="about-back-market" className="col-span-1 space-y-4">
                    <h1 className="text-lg font-bold">Sobre Back Market</h1>
                    <div className="flex flex-col space-y-1 text-sm">
                        <Link to="/quienes-somos">¿Quiénes somos?</Link>
                        <a href="https://es.trustpilot.com/review/www.backmarket.es"
                            target="_blank" rel="noopener noreferrer">Trustpilot</a>
                        <div id="social-media" className="flex flex-wrap gap-2">
                            {socialNetworkList.map((net) => (
                                <a
                                    key={net.link}
                                    href={net.link}
                                    className="p-2 rounded-full bg-gray-500 text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <net.icon />
                                </a>
                            ))}
                        </div>
                    </div>                    
                </div>
                <div id="services" className="col-span-1 space-y-4">
                    <h1 className="text-lg font-bold">Servicios</h1>
                    <div className="flex flex-col space-y-1 text-sm">
                        {servicesList.map((service) => <p>{service}</p>)}
                        <div className="flex flex-wrap items-center gap-2">
                            {paymentsMethodsList.map((method) => 
                                <img src={`/payments/${method}.svg`} className="h-5" />
                            )}
                        </div>                        
                    </div>
                </div>
                <div id="buying-guides" className="col-span-1 space-y-4">
                    <h1 className="text-lg font-bold">Guías de compra</h1>
                    <div className="flex flex-col space-y-1 text-sm">
                        {buyingGuidesList.map((guide) => <p>{guide}</p>)}
                    </div>
                </div>
                <div id="legal-conditions" className="col-span-1 space-y-4">
                    <h1 className="text-lg font-bold">Condiciones legales</h1>
                    <div className="flex flex-col space-y-1 text-sm">
                        <Link to="terms-of-use">Condiciones generales de uso</Link>
                        <Link to="legal-mentions">Aviso Legal</Link>
                    </div>
                </div>
            </div>

            <hr className="my-6" />

            <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                © 2025 Back Market
                <div className="flex items-center gap-2">
                    <a
                        href="https://app.backmarket.com/Mlqg/h4q0hjmn?&af_ad=es&af_adset=footer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/google-play.svg" />
                    </a>
                    <a
                        href="https://app.backmarket.com/Mlqg/3yvv1eit?&af_ad=es&af_adset=footer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/apple-store.svg" alt="Apple Store" />
                    </a>
                </div>
                   
            </div>
        </div>
    )
}
