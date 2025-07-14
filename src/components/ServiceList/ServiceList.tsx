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

    // Função para buscar as informações de serviços
    useEffect(() => {
        const fetchServicos = async () => {
            try {
                // Rota para os arquivos públicos do projeto
                const response = await fetch("/data/servicos.json");
                if (!response.ok) {
                    throw new Error(`Falha ao carregar os dados: ${response.statusText}`);
                }
                const data = await response.json();
                setServicos(data.categorias);
                // Tratando erros
            } catch (err) {
                setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchServicos();
    }, []);

    // Retornando páginas para condições especiais
    if (isLoading) return <div className="bg-black h-screen animate-bounce">Carregando o conteúdo...</div>;
    if (error) return <div className="text-center text-2xl py-24 text-red-500 font-sans bg-black h-screen">{error}</div>;

    return (
        <section className="min-h-screen bg-black grainy-background relative py-2 sm:pt-28">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-poppins font-display text-4xl font-bold text-white sm:text-5xl mt-24 md:mt-0">Nossos Serviços</h2>
                    <p className="font-sora mt-4 text-lg leading-8 text-gray-300">Oferecemos soluções completas para cuidar de cada detalhe do seu veículo.</p>
                </div>
            </div>

            {/* Mapeando os itens */}
            <div className="mx-auto max-w-7xl px-2 lg:px-8">
                <div className="mt-4 space-y-10 p-4">
                    {servicos.map((categoriaItem) => (
                        <div key={categoriaItem.categoria} className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur-md">
                            <h3 className="font-heading text-3xl font-bold text-red-700 mb-8">{categoriaItem.categoria}</h3>
                            <motion.ul className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(90%,1fr))] md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
