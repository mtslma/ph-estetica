import type { Metadata } from "next";
import { Oswald, Poppins, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-sora",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "900"],
    variable: "--font-poppins",
});

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-oswald",
});

export const metadata: Metadata = {
    title: "PH Estética",
    description: "Serviços premium de estética automotiva.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${sora.variable} ${poppins.variable} ${oswald.variable} antialiased bg-black text-white`}>
                <Header></Header>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
