import { LucideIcon } from "lucide-react";

export interface HeaderBarProps {
    toggleMenu: () => void;
}

export interface HeroCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface MobileSidebarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export interface ServiceCardType {
    produto: Produto;
}

export interface Produto {
    nome: string;
    descricao: { [key: string]: string[] };
    extra: string[];
    valores: { [key: string]: number };
}

export interface CategoriaServicos {
    categoria: string;
    produtos: Produto[];
}

export interface SliderComparerProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
}
