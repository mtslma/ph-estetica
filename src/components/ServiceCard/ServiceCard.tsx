import { ServiceCardType } from "@/types/Interfaces";
import { itemVariants } from "@/types/Variants";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function ServiceCard({ produto }: ServiceCardType) {
    const whatsappMessage = encodeURIComponent(`Olá! Gostaria de agendar o serviço de *"${produto.nome}"* que vi no site. \n\nPoderíamos conversar sobre os detalhes?`);
    const phoneNumber = "5511937349290";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

    const renderDescricao = (descricao: { [key: string]: string[] }) => {
        return (
            <div className="mt-4 text-sm text-gray-300 text-balance text-left space-y-4">
                {Object.entries(descricao).map(([categoria, itens]) => (
                    <div key={categoria}>
                        {categoria !== 'geral' && <h5 className="font-semibold text-white capitalize mb-2">{categoria}</h5>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {itens.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <IoCheckmarkCircle className="text-red-600 flex-shrink-0" />
                                    <span className="text-gray-400">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderPrecos = (valores: { [key: string]: number }) => {
        const precos = Object.entries(valores);
        return (precos.length == 0 ?
            <p className="font-poppins text-xl font-bold text-white">Valor a consultar</p> :
            <div className="flex flex-col items-center justify-center space-y-2">
                {precos.map(([nome, valor]) => (
                    <div key={nome} className="text-center">
                        <span className="font-poppins text-lg capitalize text-gray-300">{nome}: </span>
                        <span className="font-poppins text-2xl sm:text-3xl font-bold text-white">
                            R$ {valor.toFixed(2).replace('.', ',')}
                        </span>
                    </div>
                ))}
            </div>
        )
    };

    return (
        <motion.li key={produto.nome} variants={itemVariants} className="flex">
            <div className="w-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md flex flex-col flex-1">
                <div className="flex flex-col md:flex-grow">
                    <h4 className="font-poppins text-center font-heading text-xl font-semibold text-white">{produto.nome}</h4>
                    {renderDescricao(produto.descricao)}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row items-center justify-center sm:gap-4">
                    <div className="pt-6 text-center">
                        {renderPrecos(produto.valores)}
                    </div>
                    <div className="mt-6 text-center">
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block text-green-500 hover:text-green-400 transition duration-300 ease-in-out">
                            <div className="p-2 rounded-full bg-emerald-900 flex items-center gap-2 group">
                                <FaWhatsapp className="size-6" />
                                <span className="font-sora group-hover:underline">Agendar via WhatsApp</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </motion.li>
    );
}