"use client";

import { containerVariants, itemVariants } from "@/types/Variants";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Car, Gem, ShieldCheck } from "lucide-react";
import HeroCard from "../HeroCard/HeroCard";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative md:min-h-screen md:h-full bg-black text-white overflow-hidden">
            {/* Carregando o background de carro */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("/car-detail-bg.jpg")' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30" />
            </div>

            {/* Conteúdo principal centralizado */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <motion.div className="flex flex-col items-center" variants={containerVariants} initial="hidden" animate="visible">
                    {/* Título e subtítulo */}
                    <motion.h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider pt-24" variants={itemVariants}>
                        <span className="text-red-700 drop-shadow-[0_1px_2px_rgba(220,38,38,0.4)]">PH</span> Estética
                    </motion.h1>

                    {/* "Slogan" da estética */}
                    <motion.p className="font-sora text-lg md:text-2xl text-gray-300 max-w-xl" variants={itemVariants}>
                        Com técnica e paixão, preservamos o valor e a beleza do seu automóvel em cada detalhe.
                    </motion.p>

                    {/* Botão que leva até a página de contato com as informações do WhatsApp */}
                    <motion.div variants={itemVariants} className="mt-4">
                        <Link href="/servicos" className="font-sora flex items-center gap-2 rounded-full bg-red-600 px-8 py-3 text-base font-bold text-white uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-xl hover:shadow-red-700/40">
                            <Calendar size={20} />
                            Agendar Agora
                        </Link>
                    </motion.div>

                    {/* Container dos cards de serviço */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto" variants={itemVariants}>
                        <HeroCard icon={Car} title="Revitalização Automotiva" description="Uma restauração completa para a aparência do seu veículo. Cuidamos de cada detalhe, da pintura às rodas, para resgatar o brilho original e o impacto de um carro bem cuidado." />

                        <HeroCard icon={ShieldCheck} title="Higienização e Proteção" description="Elimine ácaros, bactérias e odores com uma higienização profunda de estofados e carpetes, restaurando o bem-estar e a segurança no interior do seu carro." />

                        <HeroCard icon={Gem} title="Acabamento de Exposição " description="Eleve o nível da estética com polimento técnico para remover imperfeições e vitrificação para criar uma camada de proteção cerâmica com brilho e durabilidade de anos." />

                        {/*  Link para ver outros serviços */}
                        <Link href={"/servicos"} className="md:col-span-3 animate-pulse">
                            <p className="flex items-center justify-end mt-2 hover:underline">
                                <ArrowRight /> Ver lista de serviços completa
                            </p>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
