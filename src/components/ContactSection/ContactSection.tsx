"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, PhoneCall } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import ContactBox from "../ContactBox/ContactBox";

export default function ContactSection() {
    // Link do WhatsApp e Instagram
    const whatsappLink = "https://api.whatsapp.com/send/?phone=5511937349290&text=Ol%C3%A1%21+Gostaria+de+agendar+um+servi%C3%A7o.&type=phone_number&app_absent=0";
    const instagramLink = "https://www.instagram.com/phestetica_/";

    return (
        <section className="py-8 md:py-8 bg-black flex items-center justify-center">
            <div className="mx-auto w-full max-w-[90%] md:max-w-5xl px-4 lg:px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    
                    {/* Informações gerais */}
                    <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-center justify-between">
                        

                        {/* Caixa explicando a área de contato */}
                        <div className="flex flex-col md:max-w-full">
                            <h2 className="font-poppins font-bold tracking-tight text-center md:text-left text-white text-3xl sm:text-5xl">Informações de contato</h2>
                            <p className="font-sora mt-6 text-lg leading-8 text-gray-300 text-justify md:max-w-xl">Fale com nossa equipe para tirar dúvidas, solicitar um orçamento detalhado ou agendar seu serviço pelo nosso telefone ou WhatsApp.</p>
                            
                            
                            {/* Lista de caixinhas com informações */}
                            <div className="mt-6 space-y-4">
                                <div className="font-heading flex items-center justify-start gap-4 p-3 border border-white/10 rounded-lg bg-white/5">
                                    <Clock size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">Atendimento 8:00 às 22:00</span>
                                </div>
                                <div className="font-heading flex items-center justify-start gap-4 p-3 border border-white/10 rounded-lg bg-white/5">
                                    <MapPin size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">Caieiras SP e Região</span>
                                </div>
                                <div className="font-heading flex items-center justify-start gap-4 p-3 border border-white/10 rounded-lg bg-white/5">
                                    <PhoneCall size={20} className="text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">Contato (11) 93734-9290</span>
                                </div>
                            </div>
                        </div>

                        {/* Caixa com os principais contatos  */}
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="w-full min-h-full lg:max-w-sm p-9 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col gap-10">
                                <div className="text-center space-y-8">
                                    {/* Instância para o WhatsApp */}
                                    <ContactBox icon={<FaWhatsapp className="text-white" size={32} />} iconBgGradient="from-green-400 to-teal-600" title="Agende seu Horário" subtitle="Converse no WhatsApp" buttonText="Iniciar Conversa" linkUrl={whatsappLink} />

                                    {/* Instância para o Instagram */}
                                    <ContactBox icon={<FaInstagram className="text-white" size={32} />} iconBgGradient="from-purple-500 via-pink-500 to-orange-500" title="Veja Nosso Trabalho" subtitle="Acompanhe o Instagram" buttonText="Acessar @phestetica_" linkUrl={instagramLink} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
