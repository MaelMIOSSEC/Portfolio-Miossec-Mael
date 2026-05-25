import { ArrowRight } from 'lucide-react'

export default function About() {
    return (
        <section
            className="h-125 mt-16.25 bg-[#070B14]"
            id='about'
            style={{
                backgroundImage: 'radial-gradient(circle, #1C2840 1px, transparent 1px)',
                backgroundSize: '28px 28px'
            }}>
            <div className='flex flex-row items-center justify-center h-1/1'>
                <div className="flex flex-col w-1/2">
                    <div className='text-[#41AB98] uppercase font-mono tracking-[2px] text-xs mb-3.75'>{"{ Développeur Web & Logiciel }"}</div>
                    <div className='text-[#EEF2FF] uppercase text-[54px] font-extrabold tracking-[-2.5px] font-serif leading-[0.97]'>Maël</div>
                    <div className='text-[#E8B86D] uppercase text-[54px] font-extrabold tracking-[-2.5px] font-serif leading-[0.97] mb-3.75'>Miossec</div>
                    <div className='text-[#4A5D7A] text-xs tracking-[0.3px] font-[italic] mb-4.5'>Étudiant M1 TIIL-A · UBO Brest · Recherche d'alternance</div>
                    <div className='text-[#8B9FBF] text-[13px] mb-6 max-w-xs leading-[1.65]'>
                        Passionné par le développement web et logiciel,
                        je conçois des applications modernes alliant performance et expérience utilisateur.
                    </div>
                    <div className='flex flex-row gap-3.75 mb-5'>
                        <a href='#projects' id='projects-button' className='flex flex-row items-center bg-[#E8B86D] py-3 px-5 border rounded-lg font-semibold gap-1.25 text-[13px] hover: cursor-pointer'>
                            <p>Voir mes projets</p>
                            <ArrowRight className='w-4.5' />
                        </a>
                        <a href='#contact' id='contact-button' className='text-[#8699B9] py-3 px-5 rounded-lg font-semibold border border-[#8699B9] text-[13px] hover: cursor-pointer'>
                            Me contacter
                        </a>
                    </div>
                    <div className='flex flex-row gap-3.75 items-center'>
                        <span className='text-[#4A5D7A] font-[11px] font-mono cursor-pointer hover:text-[#4ECFB5]'>
                            <a href="https://github.com/MaelMIOSSEC" target="_blank">
                                GitHub
                            </a>
                        </span>
                        <span className='w-6.25 h-px bg-[#4A5D7A]'></span>
                        <span className='text-[#4A5D7A] font-[11px] font-mono cursor-pointer hover:text-[#4ECFB5]'>
                            <a href="https://www.linkedin.com/in/mael-miossec/" target="_blank">
                                LinkedIn
                            </a>
                        </span>
                        <span className='w-6.25 h-px bg-[#4A5D7A]'></span>
                        <span className='text-[#4A5D7A] font-[11px] font-mono cursor-pointer hover:text-[#4ECFB5]'>
                            <a href="mailto:mael.miossec.pro@gmail.com">
                                Email
                            </a>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col w-1/1 max-w-80 bg-[#0D1321] max-h-70 rounded-lg border-[#1C2840] border px-10 py-7  text-[15px] font-mono'>
                    <div className='flex flex-row gap-1.25 mb-3.75'>
                        <div className='w-2 h-2 bg-[#FF5F57] rounded-[10px]'></div>
                        <div className='w-2 h-2 bg-[#FEBC2E] rounded-[10px]'></div>
                        <div className='w-2 h-2 bg-[#28C840] rounded-[10px]'></div>
                    </div>
                    <div className='flex flex-col gap-1 mb-2'>
                        <div className='flex flex-row gap-1.25'>
                            <span className='text-[#4A5D7A]'>const</span>
                            <span className='text-[#4ECFB5]'>dev</span>
                            <span className='text-[#8B9FBF]'>{" = {"}</span>
                        </div>
                        <div className='flex flex-row gap-2 ml-5'>
                            <span className='text-[#8B9FBF]'>name:</span>
                            <div className='flex flex-row'>
                                <span className='text-[#E8B86D]'>"Maël"</span>
                                <span className='text-[#8B9FBF]'>,</span>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 ml-5'>
                            <span className='text-[#8B9FBF]'>stack:</span>
                            <div className='flex flex-row'>
                                <span className='text-[#E8B86D]'>"Full-stack"</span>
                                <span className='text-[#8B9FBF]'>,</span>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 ml-5'>
                            <span className='text-[#8B9FBF]'>location:</span>
                            <div className='flex flex-row'>
                                <span className='text-[#E8B86D]'>"Brest"</span>
                                <span className='text-[#8B9FBF]'>,</span>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 ml-5'>
                            <span className='text-[#8B9FBF]'>open:</span>
                            <div className='flex flex-row'>
                                <span className='text-[#4ECFB5]'>true</span>
                                <span className='text-[#8B9FBF]'>,</span>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <span className='text-[#8B9FBF]'>{"};"}</span>
                        </div>
                    </div>
                    <span className='text-[#4A5D7A] text-[12px] mb-2'>// 🎓 Alternance 2026</span>
                    <span id="cursor" className="text-[#4ECFB5]">▋</span>
                </div>
            </div>
        </section>
    );
}