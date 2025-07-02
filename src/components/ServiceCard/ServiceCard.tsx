import { ServiceCardType } from "@/types/Interfaces";
import { itemVariants } from "@/types/Variants";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ServiceCard({ produto }: ServiceCardType) {
    // Formatação dos preços com e sem desconto
    const finalPrice = (produto.preco - produto.desconto).toFixed(2).replace(".", ",");
    const originalPrice = produto.preco.toFixed(2).replace(".", ",");

    // Informações para montar o link da mensagem
    const whatsappMessage = encodeURIComponent(`Olá! Gostaria de agendar o serviço de *"${produto.nome}"* que vi no site. \n\nPoderíamos conversar sobre os detalhes?`);
    const phoneNumber = "5511972839484";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    return (
        <motion.li key={produto.nome} variants={itemVariants}>
            <div className="relative w-full h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md flex flex-col">
                {produto.desconto > 0 && <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10 uppercase">Oferta!</div>}

                {/* Container para título e descrição */}
                <div className="flex-grow">
                    <h4 className="text-center font-heading text-xl font-semibold text-white">{produto.nome}</h4>
                    <p className="mt-3 text-sm text-gray-400 text-balance text-center font-sans">{produto.descricao}</p>
                </div>

                {/* Campo de preço */}
                <div className="mt-auto pt-4 text-center">
                    {produto.desconto > 0 ? (
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-1 sm:space-y-0">
                            <p className="font-display text-sm sm:text-lg text-gray-400 line-through">R$ {originalPrice}</p>
                            <p className="font-display text-3xl sm:text-4xl font-bold text-white">R$ {finalPrice}</p>
                        </div>
                    ) : (
                        <p className="font-display text-2xl sm:text-4xl font-bold text-white">R$ {originalPrice}</p>
                    )}
                </div>

                {/* Ícone de Agendamento */}
                <div className="mt-6 text-center">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block text-green-500 hover:text-green-400 transition duration-300 ease-in-out">
                        <div className="flex gap-2 group">
                            <FaWhatsapp className="size-6 mx-auto" />
                            <span className="group-hover:underline">Agendar via WhatsApp</span>
                        </div>
                    </a>
                </div>
            </div>
        </motion.li>
    );
}
