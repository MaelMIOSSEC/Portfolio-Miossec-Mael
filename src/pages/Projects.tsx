import { MoveUpRight } from 'lucide-react'

export default function Projects() {
    return (
        <section className="p-6.25" id='projects'>
            <div className="flex flex-col">
                <div className="flex flex-row gap-5 items-baseline">
                    <div className="text-[#E8B86D] font-mono text-[11px] tracking-[2px]">03</div>
                    <span className="text-[#EEF2FF] text-[20px] font-bold font-serif tracking-[-0.5px]">Projets</span>
                    <span className="text-[#4A5D7A] text-[12px]">Académiques & personnels</span>
                </div>
                <div className="flex flex-row gap-2.5 py-3.75">
                    <div className="flex flex-col w-1/2 border border-[#4A5D7A] rounded-xl bg-[#0D1321] overflow-hidden">
                        <div className="h-50 w-1/1 bg-[#131D2E] relative items-center justify-center">
                            <div className="bg-[url('/Deskampet.webp')] bg-cover bg-center h-1/1 w-full"></div>
                            <div className="text-[#E8B86D] top-2.5 left-3.5 border border-[rgba(232,184,109,0.12)] bg-[#2D2F35] text-[9px] px-2 py-0.5 rounded-[3px] font-mono tracking-[1px] absolute">FEATURED</div>
                        </div>
                        <div className="flex flex-row px-3.75 py-2.5 items-center justify-between">
                            <div className="flex-flex-col">
                                <span className="text-[#EEF2FF] text-[15px] font-semibold mb-1.25 font-serif">Deskampet</span>
                                <p className="text-[#8B9FBF] text-[12px] leading-[1.55] mb-2.5">Site vitrine réalisé en collaboration avec un membre de ma famille possédant une entreprise de PetSitting nommée Deskampet.</p>
                                <div className='flex flex-row gap-2.5'>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>React</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>TypeScript</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>Tailwind</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a
                                    href='https://deskampet-omega.vercel.app/'
                                    target='_blank'
                                    className='flex flex-row border gap-1.25 border-[#E8B86D] cursor-pointer px-3.75 py-0.75 items-center rounded-[5px]'>
                                    <span className='text-[#E8B86D] text-[12px]'>Live</span>
                                    <MoveUpRight className='w-3.75 text-[#E8B86D]' />
                                </a>
                                <a
                                    href='https://github.com/MaelMIOSSEC/Deskampet'
                                    target='_blank'
                                    className=' h-8 flex flex-row border gap-1.25 border-[#243352] cursor-pointer px-3.75 py-0.75 items-center rounded-[5px]'>
                                    <span className='text-[#8B9FBF] text-[12px]'>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 border border-[#4A5D7A] rounded-xl bg-[#0D1321] overflow-hidden">
                        <div className="h-50 w-1/1 bg-[#131D2E] relative items-center justify-center">
                            <div className="bg-[url('/kanban.webp')] bg-cover bg-center h-1/1 w-full"></div>
                            <div className="text-[#E8B86D] top-2.5 left-3.5 border border-[rgba(232,184,109,0.12)] bg-[#2D2F35] text-[9px] px-2 py-0.5 rounded-[3px] font-mono tracking-[1px] absolute">FEATURED</div>
                        </div>
                        <div className="flex flex-row px-3.75 py-2.5 items-center justify-between">
                            <div className="flex-flex-col">
                                <span className="text-[#EEF2FF] text-[15px] font-semibold mb-1.25 font-serif">StackBan</span>
                                <p className="text-[#8B9FBF] text-[12px] leading-[1.55] mb-2.5">Ce projet est une application de gestion de tâches de type Kanban distribuée, combinant un frontend React/Vite propulsé par Deno. Son architecture s'appuie sur un serveur d'authentification Deno (JWT) et un serveur de données Java Spring Boot (SQL).</p>
                                <div className='flex flex-row gap-2.5'>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>React</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>TypeScript</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>MongoDB</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>Spring</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a
                                    href='https://projet-si-sor.vercel.app'
                                    target='_blank'
                                    className='flex flex-row border gap-1.25 border-[#E8B86D] cursor-pointer px-3.75 py-0.75 items-center rounded-[5px]'>
                                    <span className='text-[#E8B86D] text-[12px]'>Live</span>
                                    <MoveUpRight className='w-3.75 text-[#E8B86D]' />
                                </a>
                                <a
                                    href='https://github.com/MaelMIOSSEC/Projet-SI-SOR'
                                    target='_blank'
                                    className=' h-8 flex flex-row border gap-1.25 border-[#243352] cursor-pointer px-3.75 py-0.75 items-center rounded-[5px]'>
                                    <span className='text-[#8B9FBF] text-[12px]'>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2.5'>
                    <div className="flex flex-col w-1/3 border border-[#4A5D7A] rounded-xl bg-[#0D1321] overflow-hidden">
                        <div className="h-50 w-1/1 bg-[#131D2E] relative items-center justify-center">
                            <div className="bg-[url('/FitPlace.webp')] bg-cover bg-center h-1/1 w-full"></div>
                        </div>
                        <div className="flex flex-row px-3.75 py-2.5 items-center justify-between">
                            <div className="flex-flex-col">
                                <span className="text-[#EEF2FF] text-[15px] font-semibold mb-1.25 font-serif">FitPlace</span>
                                <p className="text-[#8B9FBF] text-[12px] leading-[1.55] mb-2.5">FitPlace est une plateforme dédiée à la musculation et au bien-être. Elle offre des informations clés sur la musculation, des exemples d'exercices, des conseils nutritionnels et un calculateur de besoins caloriques.</p>
                                <div className='flex flex-row gap-2.5'>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>HTML</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>CSS</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 border border-[#4A5D7A] rounded-xl bg-[#0D1321] overflow-hidden">
                        <div className="h-50 w-1/1 bg-[#131D2E] relative items-center justify-center">
                            <div className="bg-[url('/SOR.webp')] bg-cover bg-center h-1/1 w-full"></div>
                        </div>
                        <div className="flex flex-row px-3.75 py-2.5 items-center justify-between">
                            <div className="flex-flex-col">
                                <span className="text-[#EEF2FF] text-[15px] font-semibold mb-1.25 font-serif">Real-time polls</span>
                                <p className="text-[#8B9FBF] text-[12px] leading-[1.55] mb-2.5">Real-time polls est un projet réalisé au cours de ma première année de Master 1 TIIL-a afin d'apprendre à utiliser le language TypeScript couplé au Framework React.</p>
                                <div className='flex flex-row gap-2.5'>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>TypeScript</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>React</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>Deno</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>SQLite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3 border border-[#4A5D7A] rounded-xl bg-[#0D1321] overflow-hidden">
                        <div className="h-50 w-1/1 bg-[#131D2E] relative items-center justify-center">
                            <div className="bg-[url('/Prestige-Properties.webp')] bg-cover bg-center h-1/1 w-full"></div>
                        </div>
                        <div className="flex flex-row px-3.75 py-2.5 items-center justify-between">
                            <div className="flex-flex-col">
                                <span className="text-[#EEF2FF] text-[15px] font-semibold mb-1.25 font-serif">Prestige Properties</span>
                                <p className="text-[#8B9FBF] text-[12px] leading-[1.55] mb-2.5">Ce projet est un site web d'agence immobilière de luxe nommé Prestige Properties. Il intègre un catalogue de biens immobiliers et propose une fonctionnalité de gestion des favoris.</p>
                                <div className='flex flex-row gap-2.5'>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>HTML</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>CSS</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>JavaScript</span>
                                    <span className='text-[#44AE9C] bg-[#131D2E] border border-[#243352] text-[12px] px-1.75 py-0.5 rounded-[3px]'>XML</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}