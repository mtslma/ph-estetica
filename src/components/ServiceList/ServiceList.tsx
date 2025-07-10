"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CategoriaServicos } from "@/types/Interfaces";
import { containerVariants } from "@/types/Variants";
import ServiceCard from "../ServiceCard/ServiceCard";

export default function ServiceList() {
    const [servicos, setServicos] = useState<CategoriaServicos[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await fetch("/ph-estetica/data/servicos.json");
                if (!response.ok) {
                    throw new Error(`Falha ao carregar os dados: ${response.statusText}`);
                }
                const data = await response.json();
                setServicos(data.categorias);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchServicos();
    }, []);

    if (isLoading) {
        return <div className="text-center py-24 font-sans">Carregando serviços...</div>;
    }
    if (error) {
        return <div className="text-center py-24 text-red-500 font-sans">Erro: {error}</div>;
    }

    return (
        <section id="servicos">
            <div className="relative z-10 mx-auto max-w-7xl px-2 lg:px-8">
                <div className="mt-4 space-y-10 p-4">
                    {servicos.map((categoriaItem) => (
                        <div key={categoriaItem.categoria} className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur-md">
                            <h3 className="font-heading text-3xl font-bold text-red-700 mb-8">{categoriaItem.categoria}</h3>
                            <motion.ul 
                                className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(380px,1fr))]" 
                                variants={containerVariants} 
                                initial="hidden" 
                                whileInView="visible" 
                                viewport={{ once: true }}
                            >
                                {categoriaItem.produtos.map((produto) => (
                                    <ServiceCard key={produto.nome} produto={produto} />
                                ))}
                            </motion.ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}