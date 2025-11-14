import type { Logo } from "./shared";

export type MenuLinkTypeEnum = 'link' | 'button';

export interface MenuLink {
    id: string;
    title: string;
    url: string;
    icon: string;
    type: MenuLinkTypeEnum;
}

export interface Menu {
    id: string;
    title: string;
    logo: Logo;
    links: MenuLink[];
}

