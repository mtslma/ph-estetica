"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Definindo a tipagem para as props do nosso componente.
// Ele espera receber 'children' que são do tipo ReactNode.
type TemplateProps = {
    children: ReactNode;
};

export default function Template({ children }: TemplateProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}>
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
