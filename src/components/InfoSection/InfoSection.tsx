"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function InfoSection() {
    return (
        <section id="informacoes" className="bg-gradient-to-b from-black to-black/30 backdrop-blur-lg py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    {/* Grid responsivo, 1 coluna no mobile, 2 no desktop */}
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 items-center">
                        {/* Coluna da Esquerda: Informações e Texto */}
                        <div className="text-center md:text-left">
                            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Pronto para Transformar seu Veículo?</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Entre em contato conosco para agendar uma avaliação. Nossa equipe está pronta para oferecer a melhor solução para o seu carro.</p>
                            <div className="mt-8 flex items-center justify-center md:justify-start gap-3 text-gray-400">
                                <MapPin size={20} />
                                <span>Rua de Exemplo, N° 10 - Caieiras</span>
                            </div>
                        </div>

                        {/* Coluna da Direita: Card de Contato do WhatsApp */}
                        <div className="flex justify-center">
                            <Link href="https://api.whatsapp.com/send/?phone=5511937349290&text&type=phone_number&app_absent=0" target="_blank" className="w-full max-w-sm">
                                {/* Card do WhatsApp*/}
                                <div className="flex flex-col items-center justify-center text-center gap-4 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 ease-in-out hover:bg-green-500/10 hover:border-green-200/30 hover:scale-105 group">
                                    <FaWhatsapp className="text-6xl text-green-400 transition-colors group-hover:text-green-300" />
                                    <h3 className="font-heading text-2xl font-bold text-white mt-2">Agende pelo WhatsApp</h3>
                                    <p className="text-sm text-gray-300 leading-">Clique para ser redirecionado!</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
