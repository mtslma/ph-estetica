import Link from "next/link";

export default function Footer() {
    const date = new Date();
    return (
        <footer className="font-poppins flex items-center justify-center py-1 bg-black/30">
            <p className="opacity-70">
                &copy; {date.getFullYear()} <span className="text-red-700 drop-shadow-[0_1px_2px_rgba(220,38,38,0.4)]">PH</span> Estética - Powered By <Link href={"https://www.github.com/mtslma"}>mtslma</Link>
            </p>
        </footer>
    );
}
