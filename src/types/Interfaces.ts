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
    descricao: string;
    preco: number;
    desconto: number;
}

export interface CategoriaServicos {
    categoria: string;
    produtos: Produto[];
}

