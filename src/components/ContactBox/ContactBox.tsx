"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ContactBoxProps = {
    icon: ReactNode;
    iconBgGradient: string;
    title: string;
    subtitle: string;
    buttonText: string;
    linkUrl: string;
};

export default function ContactBox({ icon, iconBgGradient, title, subtitle, buttonText, linkUrl }: ContactBoxProps) {
    return (
        <div className="text-center">
            <div className="flex items-center justify-start gap-4">
                {/* O gradiente do ícone agora é uma prop dinâmica */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${iconBgGradient} flex items-center justify-center flex-shrink-0`}>{icon}</div>
                <div className="text-left">
                    <p className="font-bold text-white text-lg">{title}</p>
                    <p className="text-sm text-gray-400">{subtitle}</p>
                </div>
            </div>
            <Link href={linkUrl} target="_blank" className="mt-6 w-full block text-center rounded-lg border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black transition-all duration-300">
                {buttonText}
            </Link>
        </div>
    );
}
