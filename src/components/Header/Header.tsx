"use client";

import { useState } from "react";
import HeaderBar from "../HeaderBar/HeaderBar";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Renderiza a barra do topo */}
            <HeaderBar toggleMenu={toggleMenu} />

            {/* Renderiza a sidebar e passa o estado e a função para fechá-la */}
            <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
}
