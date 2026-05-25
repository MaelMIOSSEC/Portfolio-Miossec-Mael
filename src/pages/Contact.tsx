export default function Contact() {
    return (
        <section className="p-6.25" id="contact">
            <div className="flex flex-col">
                <div className="flex flex-row gap-5 items-baseline">
                    <div className="text-[#E8B86D] font-mono text-[11px] tracking-[2px]">04</div>
                    <span className="text-[#EEF2FF] text-[20px] font-bold font-serif tracking-[-0.5px]">Contact</span>
                </div>
                <div className="flex flex-row items-center justify-around">
                    <div className="flex flex-col gap-3">
                        <div className="text-[22px] font-bold text-[#EEF2FF] mt-2 font-serif">
                            Travaillons
                            <br />
                            <span className="text-[#E8B86D]">ensemble.</span>
                        </div>
                        <div className="text-[13px] text-[#8B9FBF] leading-[1.65] mb-2.5">Vous souhaitez me proposer une alternance, <br /> collaborer ou simplement échanger ? N'hésitez pas.</div>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="flex justify-center w-7 h-7 border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] items-center">
                                    <span className="text-[#E8B86D] font-mono text-[11px]">@</span>
                                </div>
                                <span className="text-[12px] text-[#8B9FBF] hover:text-[#4ECFB5] font-mono cursor-pointer">mael.miossec.pro@gmail.com</span>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="flex justify-center w-7 h-7 border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] items-center">
                                    <span className="text-[#E8B86D] font-mono text-[11px]">GH</span>
                                </div>
                                <span className="text-[12px] text-[#8B9FBF] hover:text-[#4ECFB5] font-mono cursor-pointer">github.com/MaelMIOSSEC</span>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <div className="flex justify-center w-7 h-7 border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] items-center">
                                    <span className="text-[#E8B86D] font-mono text-[11px]">in</span>
                                </div>
                                <span className="text-[12px] text-[#8B9FBF] hover:text-[#4ECFB5] font-mono cursor-pointer">linkedin.com/in/mael-miossec/</span>
                            </div>
                        </div>
                    </div>
                    <form action="https://formspree.io/f/xjgzenod" method="POST" className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3">
                            <div className="flex flex-col border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] px-3 py-2">
                                <label htmlFor="first-name" className="text-[9px] text-[#4A5D7A] font-mono tracking-[1px] uppercase">
                                    Nom
                                </label>
                                <div className="">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="h-3.25 bg-[#131D2E] rounded-[3px] w-full text-[#EEF2FF] items-center"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] px-3 py-2">
                                <label htmlFor="email" className="text-[9px] text-[#4A5D7A] font-mono tracking-[1px] uppercase">
                                    Email
                                </label>
                                <div className="">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="given-email"
                                        className="h-3.25 bg-[#131D2E] rounded-[3px] w-full text-[#EEF2FF] items-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] px-3 py-2">
                            <label htmlFor="subject" className="text-[9px] text-[#4A5D7A] font-mono tracking-[1px] uppercase">
                                Sujet
                            </label>
                            <div className="">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    autoComplete="given-subject"
                                    className="h-3.25 bg-[#131D2E] rounded-[3px] w-full text-[#EEF2FF] items-center"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col h-25 border border-[#4A5D7A] rounded-[5px] bg-[#0D1321] px-3 py-2">
                            <label htmlFor="message" className="text-[9px] text-[#4A5D7A] font-mono tracking-[1px] uppercase mb-1.5">
                                Message
                            </label>
                            <div className="">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    autoComplete="given-message"
                                    className="h-15 max-h-15 bg-[#131D2E] rounded-[3px] w-full text-[#EEF2FF] items-center"
                                />
                            </div>
                        </div>
                        <button type="submit" className="rounded-[5px] bg-[#E8B86D] font-bold h-10 hover:cursor-pointer">Envoyer le message →</button>
                    </form>
                </div>
            </div>
        </section>
    );
}