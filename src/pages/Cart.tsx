import { ShoppingCart, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Cart() {
    useEffect(() => {
        document.title = "Cesta | ReMarket";
    }, []);

    return (
        <div className="min-h-[75vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center space-y-6">
                
                {/* Icono de cesta vacía con diseño moderno flotante */}
                <div className="relative w-24 h-24 mx-auto bg-emerald-50 rounded-full flex items-center justify-center border-4 border-emerald-100/50 shadow-inner">
                    <ShoppingCart className="w-10 h-10 text-emerald-600 animate-pulse" />
                </div>

                {/* Textos descriptivos */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Tu cesta está vacía</h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Parece que aún no has añadido ningún dispositivo reacondicionado. ¡Explora nuestro catálogo y dale una segunda vida a la tecnología!
                    </p>
                </div>

                {/* Botón de acción hacia categorías */}
                <div className="pt-2">
                    <Link 
                        to="/category/1" 
                        className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all duration-300 text-sm group"
                    >
                        <span>Explorar móviles y dispositivos</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Garantías inferiores de confianza */}
                <div className="pt-8 grid grid-cols-2 gap-4 border-t border-gray-100 text-left">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <div>
                            <span className="block text-xs font-bold text-gray-900">Garantía 24 meses</span>
                            <span className="text-[10px] text-gray-400">Tranquilidad total</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100">
                        <RefreshCw className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <div>
                            <span className="block text-xs font-bold text-gray-900">30 días</span>
                            <span className="text-[10px] text-gray-400">Para devoluciones</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}