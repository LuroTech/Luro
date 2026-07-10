"use client";

import { FadeIn } from "@/components/site/fade-in";
import { TiltCard } from "@/components/site/tilt-card";
import { cn } from "@/lib/utils";

const services = [
    {
        number: "01",
        title: "Websites",
        description: "Responsivos, rápidos e bem desenhados.",
        accent: "from-indigo-500/60",
        hover: "hover:border-indigo-400/25",
    },
    {
        number: "02",
        title: "Aplicações Web",
        description: "Apps escaláveis com UX pensada ao detalhe.",
        accent: "from-rose-500/60",
        hover: "hover:border-rose-400/25",
    },
    {
        number: "03",
        title: "Software à Medida",
        description: "Soluções adaptadas a necessidades únicas.",
        accent: "from-violet-500/60",
        hover: "hover:border-violet-400/25",
    },
];

function Services() {
    return (
        <section id="servicos" className="relative w-full bg-[#030303] py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                            Software de ponta a ponta
                        </span>
                    </h2>
                    <p className="text-base font-light tracking-wide text-white/40 md:text-lg">
                        Do conceito à entrega, tratado com rigor.
                    </p>
                </FadeIn>

                <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-6">
                    {services.map((service, i) => (
                        <FadeIn key={service.number} custom={i + 1} className="h-full">
                            <TiltCard>
                                <article
                                    className={cn(
                                        "relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-colors duration-500",
                                        service.hover
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "mb-6 h-1.5 w-12 rounded-full bg-gradient-to-r to-transparent transition-all duration-500 group-hover:w-20 group-active:w-20",
                                            service.accent
                                        )}
                                    />
                                    <span className="font-mono text-sm tracking-widest text-white/30 transition-colors duration-500 group-hover:text-white/60 group-active:text-white/60">
                                        {service.number}
                                    </span>
                                    <h3 className="mb-2 mt-3 text-xl font-bold text-white/90">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-white/40">
                                        {service.description}
                                    </p>
                                </article>
                            </TiltCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Services };
