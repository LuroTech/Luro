import { FadeIn } from "@/components/site/fade-in";

const services = [
    {
        number: "01",
        title: "Websites",
        description: "Responsivos, rápidos e bem desenhados.",
    },
    {
        number: "02",
        title: "Aplicações Web",
        description: "Apps escaláveis com UX pensada ao detalhe.",
    },
    {
        number: "03",
        title: "Software à Medida",
        description: "Soluções adaptadas a necessidades únicas.",
    },
];

function Services() {
    return (
        <section id="servicos" className="w-full bg-[#030303] py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="mx-auto mb-12 max-w-2xl text-center md:mb-20">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                        Software de ponta a ponta
                    </h2>
                    <p className="text-base text-white/40 md:text-lg">
                        Do conceito à entrega, tratado com rigor.
                    </p>
                </FadeIn>

                <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 md:gap-6">
                    {services.map((service, i) => (
                        <FadeIn key={service.number} custom={i + 1} className="h-full">
                            <article className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.15] md:p-8">
                                <span className="font-mono text-sm tracking-widest text-white/30">
                                    {service.number}
                                </span>
                                <h3 className="mb-2 mt-3 text-lg font-semibold text-white md:text-xl">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-white/40">
                                    {service.description}
                                </p>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Services };
