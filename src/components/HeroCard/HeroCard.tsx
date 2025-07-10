import { HeroCardProps } from "@/types/Interfaces";

export default function HeroCard({ icon: Icon, title, description }: HeroCardProps) {
    return (
        <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 h-full">
            <div className="p-3 bg-red-600/10 rounded-full border border-red-600/30 inline-block">
                <Icon className="text-white" size={32} />
            </div>

            <div className="flex flex-col flex-grow">
                <h3 className="font-poppins text-xl font-bold text-white mb-2">{title}</h3>
                <p className="font-sora text-sm text-gray-300 leading-relaxed text-justify">{description}</p>
            </div>
            
        </div>
    );
}