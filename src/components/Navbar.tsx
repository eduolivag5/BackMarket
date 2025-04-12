import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar} from "@heroui/react";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
    return (
        <Navbar>
            <NavbarBrand>
                <NavLink to="/">
                    <img src="/Logo.svg" className="h-6" />
                </NavLink>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Móviles
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link aria-current="page" href="#">
                        Portátiles
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Tablets
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Consolas
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
