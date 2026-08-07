import { Phone, Tablet, Laptop, Home, User } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { ToastProvider } from "@heroui/react";

export default function NavbarComponent() {
  const categories = [
    { id: "1", name: "Móviles", icon: <Phone size={16} /> },
    { id: "2", name: "Tablets", icon: <Tablet size={16} /> },
    { id: "4", name: "Portátiles", icon: <Laptop size={16} /> },
  ];

  const menuItems = [
    { id: "0", name: "Inicio", icon: <Home size={20} />, path: "/" },
    ...categories.map((c) => ({ ...c, path: `/category/${c.id}` })),
    { id: "profile", name: "Perfil", icon: <User size={20} />, path: "/profile" }
  ];

  return (
    <>
      <ToastProvider placement="top-right" />

      {/* --- NAVBAR SUPERIOR (Escritorio y Tablet) --- */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 z-[100] items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] [transform:translateZ(0)]">
        <div className="w-full max-w-7xl px-8 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group [will-change:transform]">
            <img src="/Logo.svg" className="h-7 transition-transform duration-300 ease-out group-hover:scale-105" alt="ReMarket Logo" />
          </NavLink>

          {/* Navegación Central */}
          <nav className="flex items-center gap-2 bg-gray-100/60 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-md">
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/category/${cat.id}`}
                className={({ isActive }) => 
                  `flex items-center gap-2 px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ease-out [will-change:transform,background-color] ${
                    isActive 
                      ? "bg-white text-emerald-600 shadow-sm shadow-black/5 scale-[1.02]" 
                      : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                  }`
                }
              >
                {cat.icon}
                <span>{cat.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            <Link 
              to="/profile" 
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-emerald-50/60 text-gray-700 hover:text-emerald-700 rounded-full border border-gray-200/60 transition-all duration-300 ease-out text-xs font-bold shadow-sm [will-change:background-color]"
              title="Mi perfil"
            >
              <User size={16} />
              <span>Mi Cuenta</span>
            </Link>
          </div>

        </div>
      </header>

      {/* --- MOBILE BOTTOM BAR (Isla Flotante) --- */}
      <div className="fixed bottom-6 left-0 right-0 z-[200] flex justify-center px-4 md:hidden [transform:translateZ(0)]">
        <nav className="flex items-center justify-around w-full max-w-[400px] h-[72px] bg-white/90 backdrop-blur-2xl rounded-full border border-white/50 shadow-[0_15px_35px_rgba(0,0,0,0.08)] px-2 [transform:translateZ(0)]">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="relative flex items-center justify-center w-14 h-12"
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex flex-col items-center justify-center w-full h-full gap-0.5">
                  {/* Fondo activo con renderizado acelerado */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ease-out [will-change:transform,opacity] ${
                    isActive ? "bg-emerald-100/70 scale-100 opacity-100 shadow-sm" : "scale-50 opacity-0 pointer-events-none"
                  }`} />
                  
                  <div className={`relative z-10 transition-all duration-300 ease-out [will-change:transform,color] ${isActive ? "text-emerald-700 scale-110 -translate-y-0.5" : "text-gray-400"}`}>
                    {item.icon}
                  </div>
                  
                  <span className={`relative z-10 text-[9px] font-bold uppercase tracking-tight transition-colors duration-300 ease-out ${
                    isActive ? "text-emerald-900 font-extrabold" : "text-gray-400"
                  }`}>
                    {item.name}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}