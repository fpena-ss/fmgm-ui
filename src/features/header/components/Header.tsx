import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useHeaderQuery } from "@api/queries/header.query";
import type { Menu, MenuLink } from "@interfaces/menu";
import { Avatar } from "@shared/components/Avatar";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data } = useHeaderQuery();
    const menu: Menu = data?.data;

    if (!menu) return null;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="w-full bg-fmgm-blue sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <Link to="/" onClick={closeMenu}>
                    <div className="flex items-center gap-4">
                        <Avatar url={`${import.meta.env.VITE_API_URL}${menu.logo.url}`} alt={menu.title} />
                        <h1 className="text-2xl font-bold text-fmgm-lime">{menu.title}</h1>
                    </div>
                </Link>

                <nav className="hidden md:flex justify-end gap-4">
                    <ul className="flex gap-6">
                        {menu.links.map((link: MenuLink) => (
                            <li key={link.id} className="text-sm font-medium">
                                <Link 
                                    to={link.url} 
                                    className="text-fmgm-green hover:text-fmgm-lime transition-colors" 
                                    activeProps={{ className: "text-fmgm-lime font-semibold" }}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button 
                    className="md:hidden text-fmgm-lime p-2"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-fmgm-blue border-t border-fmgm-green/30 px-6 py-4">
                    <ul className="flex flex-col gap-4 items-center">
                        {menu.links.map((link: MenuLink) => (
                            <li key={link.id}>
                                <Link 
                                    to={link.url} 
                                    className="block text-fmgm-green hover:text-fmgm-lime transition-colors py-2 text-lg text-center"
                                    activeProps={{ className: "text-fmgm-lime font-semibold" }}
                                    onClick={closeMenu}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}
