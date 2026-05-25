export default function Contact() {
    return (
        <footer className="flex flex-row px-10 py-5 bg-[#0D1321] justify-around">
            <div className="text-[14px] text-[#4A5D7A] hover:cursor-pointer">© 2026 Mael Miossec. Construit avec React + Tailwind.</div>
            <div className="flex flex-row gap-5">
                <a href="https://github.com/MaelMIOSSEC" target="_blank" className="text-[14px] text-[#4A5D7A] hover:cursor-pointer hover:text-[#4ECFB5]">GitHub</a>
                <a href="https://www.linkedin.com/in/mael-miossec/" target="_blank" className="text-[14px] text-[#4A5D7A] hover:cursor-pointer hover:text-[#4ECFB5]">Linkedin</a>
            </div>
        </footer>
    );
}