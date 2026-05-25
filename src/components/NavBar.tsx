import { useState } from 'react';
import { ArrowDown } from 'lucide-react'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-slate-800 text-[#7486A1] z-50 bg-[#070B14]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <div className="shrink-0 font-bold text-xl tracking-wide text-[#E8B86D]">
                        MM
                    </div>

                    {/* Liens - Version Bureau */}
                    <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
                        <a href="#about" className="hover:text-sky-400 transition-colors">À propos</a>
                        <a href="#stack" className="hover:text-sky-400 transition-colors">Stack</a>
                        <a href="#projects" className="hover:text-sky-400 transition-colors">Projets</a>
                        <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
                        <div className="border border-solid rounded-sm px-3.75 py-0.75 items-center text-[#E8B86D] hover:cursor-pointer">
                            <a className='flex flex-row' href="/cv-miossec-mael.pdf" download="CV_Mael_Miossec.pdf" target="_blank">
                                <p>CV</p>
                                <ArrowDown className='h-4.75' />
                            </a>
                        </div>
                    </div>

                    {/* Bouton Burger - Version Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
                            aria-label="Menu principal"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Déroulant - Version Mobile */}
            {isOpen && (
                <div className="flex flex-col items-center md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
                    <a href="#hero" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-900">Accueil</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-900">À propos</a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-900">Projets</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-900">Contact</a>
                    <div className="border border-solid w-[76.25px] h-8 rounded-sm px-3.75 py-0.75 items-center text-[#E8B86D] hover:cursor-pointer">
                        <a className='flex flex-row' href="/cv-miossec-mael.pdf" download="CV_Mael_Miossec.pdf" target="_blank">
                            <p>CV</p>
                            <ArrowDown className='h-5.25' />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}