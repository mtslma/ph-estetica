"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import ContactBox from "../ContactBox/ContactBox";

export default function ContactSession() {
    // Link do WhatsApp e Instagram
    const whatsappLink = "https://api.whatsapp.com/send/?phone=5511937349290&text=Ol%C3%A1%21+Gostaria+de+agendar+um+servi%C3%A7o.&type=phone_number&app_absent=0";
    const instagramLink = "https://www.instagram.com/phestetica_/";

    return (
        <section className="min-h-screen bg-black flex items-center justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-center justify-center">
                        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center justify-center md:justify-start md:items-start max-w-[80%]">
                            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">Fale com a gente!</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">Entre em contato diretamente com nossa equipe para tirar dúvidas, solicitar um orçamento detalhado ou agendar seu serviço.</p>
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

                        {/* Caixa com os principais contatos  */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col gap-10">
                                <div className="text-center space-y-8">
                                    {/* Instância para o WhatsApp */}
                                    <ContactBox icon={<FaWhatsapp className="text-white" size={32} />} iconBgGradient="from-green-400 to-teal-600" title="Agende seu Horário" subtitle="Converse conosco no WhatsApp" buttonText="Iniciar Conversa" linkUrl={whatsappLink} />

                                    {/* Instância para o Instagram */}
                                    <ContactBox icon={<FaInstagram className="text-white" size={32} />} iconBgGradient="from-purple-500 via-pink-500 to-orange-500" title="Veja Nosso Trabalho" subtitle="Acompanhe no Instagram" buttonText="Acessar @phestetica_" linkUrl={instagramLink} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
