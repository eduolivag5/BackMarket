import Header from "../components/Header";
import TrendingSearches from "../components/TrendingSearches";
import ReviewsList from "../components/ReviewsList";
import ProductsList from "../components/ProductsList";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useEffect } from "react";
import { ShieldCheck, Truck, RefreshCw, Leaf, Sparkles, Phone, Laptop, Tablet } from "lucide-react";

export default function Home() {
    const { data, isLoading, isError } = useQuery({
        queryFn: getAllProducts,
        queryKey: ['all-products']
    });

    useEffect(() => {
        document.title = "Productos reacondicionados y mejores para el planeta | ReMarket";
    }, []);

    // Categorías rápidas con iconos de Lucide (remplazando emojis)
    const quickCategories = [
        { id: 1, name: "Smartphones", icon: <Phone className="w-8 h-8 text-emerald-600" />, path: "/category/1" },
        { id: 3, name: "Tablets", icon: <Tablet className="w-8 h-8 text-emerald-600" />, path: "/category/2" },
        { id: 2, name: "Portátiles", icon: <Laptop className="w-8 h-8 text-emerald-600" />, path: "/category/4" },
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 pb-20 space-y-12 md:space-y-16">
            {/* Header principal */}
            <Header />

            {/* Barra de confianza y beneficios (Nuevo) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xs md:text-sm text-gray-900">Garantía de 24 meses</h4>
                            <p className="text-[11px] text-gray-500">Tranquilidad total asegurada</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Truck className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xs md:text-sm text-gray-900">Envío rápido</h4>
                            <p className="text-[11px] text-gray-500">Recíbelo en pocos días</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <RefreshCw className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xs md:text-sm text-gray-900">30 días de prueba</h4>
                            <p className="text-[11px] text-gray-500">Devoluciones sin compromiso</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                            <Leaf className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-xs md:text-sm text-gray-900">100% Reacondicionado</h4>
                            <p className="text-[11px] text-gray-500">Ayuda a reducir residuos</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cuadrícula de categorías populares con iconos modernos */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">¿Qué estás buscando hoy?</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {quickCategories.map((cat) => (
                        <Link 
                            key={cat.id} 
                            to={cat.path}
                            className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300"
                        >
                            <div className="p-4 bg-emerald-50 rounded-2xl group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                                {cat.icon}
                            </div>
                            <div>
                                <span className="block font-bold text-base text-gray-900 group-hover:text-emerald-600 transition-colors">{cat.name}</span>
                                <span className="text-xs text-gray-400">Ver dispositivos</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Contenedor principal de la plataforma */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                
                {/* Listado de productos destacados */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-amber-500" />
                            Ofertas destacadas para ti
                        </h2>
                    </div>
                    <ProductsList items={data?.slice(0,20)} isLoading={isLoading || isError} />
                </div>

                {/* Tendencias de búsqueda */}
                <TrendingSearches />

                {/* Banner de Sostenibilidad con diseño moderno en degradado */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-800 text-white p-8 md:p-12 shadow-xl">
                    <div className="relative z-10 max-w-xl space-y-4">
                        <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            Impacto ambiental
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">La tecnología reacondicionada ayuda al planeta</h3>
                        <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
                            Creemos incondicionalmente en un mundo que hace más con lo que ya tenemos. Cada compra reduce la huella de carbono y evita residuos electrónicos.
                        </p>
                        <div>
                            <Link 
                                to="/category/1" 
                                className="inline-block bg-white text-emerald-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-50 transition-colors text-sm"
                            >
                                Únete al movimiento
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sección de Reseñas */}
                <div className="space-y-6">
                    <SectionTitle
                        title="Lo que opinan nuestros clientes"
                        subtitle="Miles de compradores confían en nuestra calidad reacondicionada cada día."
                    />
                    <ReviewsList />
                </div>

                {/* Banner promocional de imágenes con diseño flotante */}
                <div className="rounded-3xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    <Link to={`/category/1`}>
                        <img className="md:hidden w-full h-auto object-cover cursor-pointer"
                            src="https://images.ctfassets.net/mmeshd7gafk1/4rQLaohmk9wFHk6ZfdAU9q/dfd7c68e737c3e1073b6c4c673cb5733/Slider_5-mobile__1_.jpg"
                            alt="Promoción móvil"
                        />
                        <img className="hidden md:block w-full h-auto object-cover cursor-pointer" 
                            src="https://images.ctfassets.net/mmeshd7gafk1/5YDv2y0xq8QaRIp3v6iXpD/dd72334e596215ed160cc47682dc79cb/Slider_5_-_desktop__1_.jpg" 
                            alt="Promoción escritorio"
                        />
                    </Link>
                </div>

            </main>
        </div>
    );
}