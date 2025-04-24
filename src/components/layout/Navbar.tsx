import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Avatar} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink } from "react-router-dom";
import { getAllCategories } from "../../api";

export default function NavbarComponent() {

    const { data: categoriesList } = useQuery({
        queryFn: getAllCategories,
        queryKey: ['all-categories']
    })

    return (
        <Navbar>
            <NavbarBrand>
                <NavLink to="/">
                    <img src="/Logo.svg" className="h-6" />
                </NavLink>
            </NavbarBrand>

            {categoriesList &&
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {categoriesList.map((category) => 
                        <NavbarItem key={category.id}>
                            <Link to={`/category/${category.id}`}>
                                {category.name}
                            </Link>
                        </NavbarItem>
                    )}
                </NavbarContent>
            }
            
            <NavbarContent justify="end">
                <NavbarItem>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
