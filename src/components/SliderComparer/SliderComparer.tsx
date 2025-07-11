/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { SliderComparerProps } from "@/types/Interfaces";


export default function SliderComparer({ beforeImage, afterImage, beforeAlt = "Imagem de antes", afterAlt = "Imagem de depois" }: SliderComparerProps) {
    //  Guarda a posição do slider (de 0 a 100), inicia em 50
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Lógica do movimento
    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        // Só executa se estiver clicando e arrastando
        if (!isDragging || !containerRef.current) return;

        // Pega as coordenadas do container da imagem
        const rect = containerRef.current.getBoundingClientRect();

        // Pega a posição X do clique ou do toque
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

        // Calcula a posição do mouse em relação ao container
        const x = clientX - rect.left;
        let newPosition = (x / rect.width) * 100;

        // Garante que a posição fique entre 0 e 100
        if (newPosition < 0) newPosition = 0;
        if (newPosition > 100) newPosition = 100;

        setSliderPosition(newPosition);
    };

    // Funções para iniciar e parar o arraste
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
        <div ref={containerRef} className="relative w-[300px] h-[300px] select-none overflow-hidden rounded-2xl shadow-xl" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMove} onMouseLeave={handleMouseUp} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onTouchMove={handleMove}>
            {/* Camada base (depois) */}
            <img src={afterImage} alt={afterAlt} className="absolute h-full w-full object-cover" />
            <div className="absolute top-2 right-2 rounded-md bg-black/50 px-2 py-1 text-sm font-semibold text-white pointer-events-none">
                DEPOIS
            </div>

            {/* Camada superior (antes) */}
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
                <img src={beforeImage} alt={beforeAlt} className="absolute h-full w-full object-cover" />
                <div className="absolute top-2 left-2 rounded-md bg-black/50 px-2 py-1 text-sm font-semibold text-white pointer-events-none">
                    ANTES
                </div>
            </div>

            {/* Linha de divisão e botão para arrastar */}
            <div className="absolute top-0 h-full w-1.5 cursor-ew-resize bg-white/80" style={{ left: `calc(${sliderPosition}% - 3px)` }}>
                <div className="absolute top-1/2 -left-5 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                    <ChevronsLeftRight className="text-gray-800" />
                </div>
            </div>
        </div>
    );
}