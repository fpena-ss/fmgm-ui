import type { Logo } from "./shared";

export interface FooterLink {
    id: number;
    text: string;
    url: string;
}

export interface LegalInfo {
    id: number;
    title: string;
    links: FooterLink[];
}

export interface ContactInfo {
    id: number;
    title: string;
    email: string;
    phone: string;
    image: Logo | null;
}

export type NetworkType = 'instagram' | 'facebook' | 'linkedin' | 'other';

export interface Network {
    id: number;
    text: string;
    icon: Logo | null;
    url: string;
    type: NetworkType;
}

export interface Info {
    id: number;
    legalInfo: LegalInfo;
    contactInfo: ContactInfo;
    copyright: string;
    icon: Logo[];
    networks: Network[];
}

export interface Footer {
    id: number;
    info: Info;
}
