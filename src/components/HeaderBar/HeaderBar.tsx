/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Menu } from "lucide-react";
import { HeaderBarProps } from "@/types/Interfaces";

// Lista de navegação
const navLinks = [
    { href: "/servicos", label: "Serviços" },
    { href: "/#informacoes", label: "Contato" },
];

export default function HeaderBar({ toggleMenu }: HeaderBarProps) {
    return (
        <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm border-b border-white/10 z-30">
            <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Carregando a logo */}
                <Link href="/" aria-label="Página Inicial" className="z-40">
                    <img src="/ph-estetica/logo.png" alt="Logo PH Estética" width={45} height={45} className="h-10 w-auto" />
                </Link>

                {/* Navegação de Desktop */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-8 text-md">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-gray-300 transition-colors hover:text-white hover:underline">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botão de Menu para Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Abrir menu" className="z-40 relative">
                        <Menu className="text-white" />
                    </button>
                </div>
            </div>
        </header>
    );
}
