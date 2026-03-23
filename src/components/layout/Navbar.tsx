import { Smartphone, Tablet, Laptop, Home, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ToastProvider } from "@heroui/react";

export default function NavbarComponent() {
  const categories = [
    { id: "1", name: "Móviles", icon: <Smartphone size={18} /> },
    { id: "2", name: "Tablets", icon: <Tablet size={18} /> },
    { id: "3", name: "Portátiles", icon: <Laptop size={18} /> },
  ];

  const menuItems = [
    { id: "0", name: "Home", icon: <Home size={20} />, path: "/" },
    ...categories.map((c) => ({ ...c, path: `/category/${c.id}` })),
  ];

  return (
    <>
      <ToastProvider placement="top-right" />

      {/* --- NAVBAR SUPERIOR (Escritorio y Tablet) --- */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-white/40 backdrop-blur-2xl border-b border-white/20 z-[100] items-center justify-center">
        <div className="w-full max-w-6xl px-6 flex items-center justify-between">
          <NavLink to="/" className="hover:opacity-60 transition-opacity">
            <img src="/Logo.svg" className="h-6" alt="Logo" />
          </NavLink>

          {/* Navegación solo visible en PC/Tablet */}
          <nav className="hidden md:flex items-center gap-10">
            {categories.map((cat) => (
              <NavLink
                key={cat.id}
                to={`/category/${cat.id}`}
                className={({ isActive }) => 
                  `text-xs font-bold uppercase tracking-widest transition-all ${
                    isActive ? "text-black border-b-2 border-black pb-1" : "text-black/40 hover:text-black"
                  }`
                }
              >
                {cat.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <div className="p-2 bg-black/5 rounded-full cursor-pointer hover:bg-black/10 transition-colors">
                <User size={18} className="text-black/60" />
             </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE BOTTOM BAR (iOS 26 Liquid Glass) --- */}
      <div className="fixed bottom-6 left-0 right-0 z-[200] flex justify-center px-6 md:hidden">
        <nav className="flex items-center justify-around w-full max-w-[340px] h-[72px] bg-white/25 backdrop-blur-[30px] rounded-[35px] border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.1)] px-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-14 h-14"
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex flex-col items-center justify-center w-full h-full gap-1">
                  {/* Fondo activo líquido */}
                  <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isActive ? "bg-white/70 scale-100 opacity-100 shadow-sm" : "scale-50 opacity-0"
                  }`} />
                  
                  <div className={`relative z-10 transition-colors duration-300 ${isActive ? "text-black" : "text-black/30"}`}>
                    {item.icon}
                  </div>
                  
                  <span className={`relative z-10 text-[8px] font-black uppercase tracking-tighter transition-colors duration-300 ${
                    isActive ? "text-black" : "text-black/30"
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