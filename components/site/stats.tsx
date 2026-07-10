"use client";

import { FadeIn } from "@/components/site/fade-in";
import { CountUp } from "@/components/site/count-up";

const stats = [
    { target: 120, suffix: "+", label: "Projetos entregues" },
    { target: 98, suffix: "%", label: "Satisfação de clientes" },
    { target: 5, suffix: "+", label: "Anos de experiência" },
    { target: 24, suffix: "/7", label: "Suporte disponível" },
];

function Stats() {
    return (
        <section className="w-full border-y border-white/[0.08] bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <dl className="grid grid-cols-2 divide-white/[0.08] md:grid-cols-4 md:divide-x">
                    {stats.map((stat, i) => (
                        <FadeIn
                            key={stat.label}
                            custom={i}
                            className="group flex flex-col items-center gap-2 px-4 py-10 text-center md:py-14"
                        >
                            <dd className="order-first font-mono text-3xl font-bold tracking-tight transition-transform duration-500 group-hover:scale-110 md:text-4xl">
                                <CountUp
                                    target={stat.target}
                                    suffix={stat.suffix}
                                    className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
                                />
                            </dd>
                            <dt className="text-sm font-light tracking-wide text-white/40 transition-colors duration-500 group-hover:text-white/70">
                                {stat.label}
                            </dt>
                        </FadeIn>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export { Stats };
