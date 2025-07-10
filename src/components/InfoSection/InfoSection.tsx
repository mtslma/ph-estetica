"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
// Usando os ícones que você pediu
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function InfoSection() {
    const whatsappLink = "https://api.whatsapp.com/send/?phone=5511937349290&text=Ol%C3%A1%21+Gostaria+de+agendar+um+servi%C3%A7o.&type=phone_number&app_absent=0";
    const instagramLink = "https://www.instagram.com/phestetica_/";

    return (
        <section id="contato" className="min-h-screen bg-black flex items-center justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-start justify-center">
                        
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">Conecte-se com a gente!</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Fale diretamente com nossa equipe para tirar dúvidas, solicitar um orçamento detalhado ou agendar seu serviço.
                            </p>
                            <div className="mt-10 space-y-4">
                                <div className="flex items-center justify-center md:justify-start gap-4 p-3 border border-white/10 rounded-lg bg-white/5">
                                    <Clock size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">Segunda a Sábado - 08:00 às 18:00</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start gap-4 p-3 border border-white/10 rounded-lg bg-white/5">
                                    <MapPin size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">Atendemos em Caieiras - SP e Região</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col gap-10">
                                
                                {/* WhatsApp */}
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                                            <FaWhatsapp className="text-white" size={32} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-white text-lg">Agende seu Horário</p>
                                            <p className="text-sm text-gray-400">Converse conosco no WhatsApp</p>
                                        </div>
                                    </div>
                                    <Link href={whatsappLink} target="_blank" className="mt-6 w-full block text-center rounded-lg border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black transition-all duration-300">
                                        Iniciar Conversa
                                    </Link>
                                </div>

                                {/* Instagram */}
                                <div className="text-center">
                                     <div className="flex items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                                            <FaInstagram size={32} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-white text-lg">Veja Nosso Trabalho</p>
                                            <p className="text-sm text-gray-400">Acompanhe no Instagram</p>
                                        </div>
                                    </div>
                                    <Link href={instagramLink} target="_blank" className="mt-6 w-full block text-center rounded-lg border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black transition-all duration-300">
                                        Acessar @phestetica_
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}