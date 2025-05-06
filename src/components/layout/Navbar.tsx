import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    ToastProvider,
    addToast
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { NavLink, Link } from "react-router-dom";
import { getAllCategories } from "../../api";
import { useState } from "react";
import { User } from "lucide-react";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: categoriesList } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['all-categories']
    });

    return (
        <>
        <ToastProvider placement="top-right" toastOffset={60} />
        
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            
            {/* Contenido izquierdo con toggle y logo */}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <NavLink to="/">
                        <img src="/Logo.svg" className="h-6" />
                    </NavLink>
                </NavbarBrand>
            </NavbarContent>

            {/* Categorías visibles solo en escritorio */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {categoriesList?.map((category) => (
                    <NavbarItem key={category.id}>
                        <NavLink
                            to={`/category/${category.id}`}
                            className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : ""
                            }
                        >
                            {category.name}
                        </NavLink>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Avatar lado derecho */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <User className="cursor-pointer" onClick={() => {
                        addToast({
                            title: "¡Ops!",
                            description: "Esta función no está habilitada.",
                            color: "primary"
                        })
                    }} />
                </NavbarItem>
            </NavbarContent>

            {/* Menú colapsado para móvil */}
            <NavbarMenu>
                {categoriesList?.map((category) => (
                    <NavbarMenuItem key={category.id}>
                        <Link
                            to={`/category/${category.id}`}
                            className="w-full text-foreground"
                        >
                            {category.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        </>
    );
}
