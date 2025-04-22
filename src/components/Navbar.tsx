import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar} from "@heroui/react";
import { Link, NavLink } from "react-router-dom";

const categoriesList = [
    { id: 1, name: "Móviles" },
    { id: 2, name: "Portátiles" },
    { id: 3, name: "Tablets" },
    { id: 4, name: "Consolas" },
]

export default function NavbarComponent() {
    return (
        <Navbar>
            <NavbarBrand>
                <NavLink to="/">
                    <img src="/Logo.svg" className="h-6" />
                </NavLink>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {categoriesList.map((category) => 
                    <NavbarItem key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </NavbarItem>
                )}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
