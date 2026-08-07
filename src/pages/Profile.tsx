import { User, Package, Heart, ShieldCheck, HelpCircle, LogOut, ChevronRight, Settings, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Profile() {
    useEffect(() => {
        document.title = "Mi Perfil | ReMarket";
    }, []);

    // Secciones que redirigen exclusivamente a rutas existentes en tu App
    const menuSections = [
        {
            title: "Mis compras y actividad",
            items: [
                { icon: <Package className="w-5 h-5 text-emerald-600" />, label: "Explorar categorías", desc: "Ver móviles, tablets y portátiles disponibles", link: "/category/1" },
                { icon: <Heart className="w-5 h-5 text-emerald-600" />, label: "Movimiento Anti-Fast Tech", desc: "Conoce nuestra filosofía y el impacto en el planeta", link: "/end-fast-tech" },
            ]
        },
        {
            title: "Configuración de cuenta",
            items: [
                { icon: <User className="w-5 h-5 text-emerald-600" />, label: "Información personal", desc: "Gestiona tu perfil y datos de cuenta", link: "/profile" },
                { icon: <MapPin className="w-5 h-5 text-emerald-600" />, label: "Términos de uso", desc: "Consulta las condiciones de la plataforma", link: "/terms-of-use" },
            ]
        },
        {
            title: "Soporte y legal",
            items: [
                { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, label: "Garantías y condiciones", desc: "Información sobre tus coberturas y derechos", link: "/terms-of-use" },
                { icon: <HelpCircle className="w-5 h-5 text-emerald-600" />, label: "Avisos legales", desc: "Información legal y regulaciones de la web", link: "/legal-mentions" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 pb-32">
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Cabecera del Perfil (Estática / Visual) */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-center sm:text-left">
                        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 font-black text-2xl flex items-center justify-center border-4 border-emerald-50 shadow-inner">
                            EO
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl font-black text-gray-900">Eduardo Oliva</h1>
                            <p className="text-sm text-gray-500">eduolivag5@gmail.com</p>
                            <span className="inline-flex items-center gap-1.5 mt-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Cliente Verificado
                            </span>
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={() => alert("El panel de ajustes estará disponible próximamente.")}
                            className="inline-flex items-center gap-2 bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 font-bold px-4 py-2.5 rounded-xl border border-gray-100 transition-all text-sm cursor-pointer"
                        >
                            <Settings className="w-4 h-4" />
                            Ajustes
                        </button>
                    </div>
                </div>

                {/* Banner de Sostenibilidad del Usuario */}
                <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-left">
                        <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Tu impacto ecológico</span>
                        <h3 className="text-lg font-bold">¡Has evitado 14kg de CO₂ este año!</h3>
                        <p className="text-xs text-emerald-100">Gracias por elegir tecnología reacondicionada y cuidar el planeta.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 text-center flex-shrink-0">
                        <span className="block text-2xl font-black text-emerald-300">1 Dispositivo</span>
                        <span className="text-[10px] uppercase font-semibold text-emerald-100">Reutilizado</span>
                    </div>
                </div>

                {/* Secciones de Opciones ajustadas a las rutas reales */}
                <div className="space-y-6">
                    {menuSections.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-50">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">{section.title}</h4>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {section.items.map((item, itemIdx) => (
                                    <Link 
                                        key={itemIdx} 
                                        to={item.link} 
                                        className="flex items-center justify-between p-5 hover:bg-gray-50/80 transition-colors group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-emerald-50 rounded-2xl group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 text-sm group-hover:text-emerald-600 transition-colors">
                                                    {item.label}
                                                </h5>
                                                <p className="text-xs text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón de Cerrar Sesión (Simulado/Visual) */}
                <div className="pt-2">
                    <button 
                        onClick={() => alert("La funcionalidad de cierre de sesión estará disponible próximamente.")}
                        className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-4 rounded-2xl border border-red-100 transition-colors text-sm cursor-pointer"
                    >
                        <LogOut className="w-4 h-4" />
                        Cerrar sesión
                    </button>
                </div>

            </div>
        </div>
    );
}