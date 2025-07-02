"use client";

import ServiceList from "@/components/ServiceList/ServiceList";

export default function Servicos() {
    return (
        <section id="servicos" className="grainy-background relative py-2 sm:pt-28">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30"></div>
            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-poppins font-display text-4xl font-bold text-white sm:text-5xl">Nossos Serviços</h2>
                    <p className="font-sora mt-4 text-lg leading-8 text-gray-300">Oferecemos soluções completas para cuidar de cada detalhe do seu veículo.</p>
                </div>
            </div>

            <ServiceList></ServiceList>
        </section>
    );
}
