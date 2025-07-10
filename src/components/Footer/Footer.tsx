export default function Footer() {
    const date = new Date();
    return (
        <footer className="font-poppins text-sm flex items-center justify-center py-1 bg-black">
            <p>
                &copy; {date.getFullYear()} <span className="text-red-700 drop-shadow-[0_1px_2px_rgba(220,38,38,0.4)]">PH</span> Estética - Caieiras, SP
                {/* <Link target="_blank" href={"https://www.github.com/mtslma"}>
                    mtslma
                </Link> */}
            </p>
        </footer>
    );
}
