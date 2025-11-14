import { Link } from "@tanstack/react-router";
import { useHeaderQuery } from "../../../api/queries/header.query";
import type { Menu, MenuLink } from "../../../interfaces/menu";
import { Avatar } from "../../../shared/components/Avatar";

export const Header = () => {
    const { data } = useHeaderQuery();
    const menu: Menu = data?.data;

    if (!menu) return null;

    return (
        <div className="w-full bg-white flex justify-between items-center p-4 border-b border-fmgm-secondary">
            <Link to="/">
                <div className="flex items-center gap-4">
                    <Avatar url={`${import.meta.env.VITE_API_URL}${menu.logo.url}`} alt={menu.title} />
                    <h1 className="text-2xl font-bold">{menu.title}</h1>
                </div>
            </Link>
            <div className="flex justify-end gap-4">
                <ul className="flex gap-4">
                    {menu.links.map((link: MenuLink) => (
                        <li key={link.id} className="text-sm font-medium">
                            <Link to={link.url} className="" activeProps={{ className: "text-fmgm-primary" }}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}