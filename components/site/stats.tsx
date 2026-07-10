import { FadeIn } from "@/components/site/fade-in";

const stats = [
    { value: "120+", label: "Projetos entregues" },
    { value: "98%", label: "Satisfação de clientes" },
    { value: "5+", label: "Anos de experiência" },
    { value: "24/7", label: "Suporte disponível" },
];

function Stats() {
    return (
        <section className="w-full border-y border-white/[0.08] bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <dl className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <FadeIn
                            key={stat.label}
                            custom={i}
                            className="flex flex-col items-center gap-1 px-4 py-8 text-center md:py-14"
                        >
                            <dd className="order-first font-mono text-2xl font-bold tracking-tight text-white md:text-4xl">
                                {stat.value}
                            </dd>
                            <dt className="text-sm text-white/40">
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
