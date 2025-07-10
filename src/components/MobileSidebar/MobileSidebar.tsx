"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";
import { MobileSidebarProps } from "@/types/Interfaces";

const navLinks = [
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" },
];

export default function MobileSidebar({ isOpen, toggleMenu }: MobileSidebarProps) {
    const sidebarVariants: Variants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Fundo de overlay com blur */}
                    <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" onClick={toggleMenu} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />

                    {/* Painel da Sidebar com o novo estilo */}
                    <motion.div
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        // ✅ ESTILO DE VIDRO SUTIL APLICADO AQUI
                        className="
                            fixed top-0 right-0 h-full w-4/5 max-w-sm 
                            flex flex-col p-6 z-50
                            bg-black/75 backdrop-blur-2xl 
                            border-l border-white/5
                        "
                    >
                        {/* Header da Sidebar */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                            {/* Mantendo o "PH Estética" como está, mas usando a cor mais vibrante */}
                            <p className="font-display font-bold text-xl text-white tracking-wider">
                                <span className="text-red-600 drop-shadow-[0_1px_2px_rgba(220,38,38,0.4)]">PH</span> Estética
                            </p>
                            <button onClick={toggleMenu} aria-label="Fechar menu" className="p-2 rounded-full text-gray-300 transition-colors hover:bg-white/10 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Links da Sidebar com separadores */}
                        <nav className="flex-1">
                            <ul className="flex flex-col">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={toggleMenu}
                                            // ✅ HOVER E ESTILO DOS LINKS APRIMORADOS
                                            className="
                                                block rounded-md px-3 py-4 text-gray-200 text-lg font-medium 
                                                transition-all duration-200
                                                hover:bg-red-600/10 hover:text-red-600 hover:pl-4
                                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                                            "
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
