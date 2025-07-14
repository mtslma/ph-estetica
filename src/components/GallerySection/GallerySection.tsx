"use client";

import ImageCompareSlider from "../SliderComparer/SliderComparer";

export default function ServiceList() {
    return (
        <section className="min-h-screen bg-black grainy-background relative py-2 sm:pt-28">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-poppins font-display text-4xl font-bold text-white sm:text-5xl mt-24 md:mt-0">Galeria de fotos</h2>
                    <p className="font-sora mt-4 text-lg leading-8 text-gray-300">Veja a comparação do antes e depois dos nossos serviços!</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        <ImageCompareSlider beforeImage={"/data/images/saida-ar-antes.png"} afterImage={"/data/images/saida-ar-depois.png"}></ImageCompareSlider>
                        <ImageCompareSlider beforeImage={"/data/images/pneu-antes.png"} afterImage={"/data/images/pneu-depois.png"}></ImageCompareSlider>
                        <ImageCompareSlider beforeImage={"/data/images/cinto-antes.png"} afterImage={"/data/images/cinto-depois.png"}></ImageCompareSlider>
                        <ImageCompareSlider beforeImage={"/data/images/moto-antes.png"} afterImage={"/data/images/moto-depois.png"}></ImageCompareSlider>
                        <ImageCompareSlider beforeImage={"/data/images/onix-antes.png"} afterImage={"/data/images/onix-depois.png"}></ImageCompareSlider>
                        <ImageCompareSlider beforeImage={"/data/images/painel-antes.png"} afterImage={"/data/images/painel-depois.png"}></ImageCompareSlider>
                    </div>
                </div>
            </div>
        </section>
    );
}
