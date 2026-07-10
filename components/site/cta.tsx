import { FadeIn } from "@/components/site/fade-in";

function Cta() {
    return (
        <section id="contacto" className="w-full bg-[#030303] py-20 md:py-40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <FadeIn>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                            Pronto para construir algo extraordinário?
                        </h2>
                    </FadeIn>

                    <FadeIn custom={1}>
                        <p className="mb-8 text-base leading-relaxed text-white/40 md:mb-10 md:text-lg">
                            Conte-nos sobre o seu projeto. Respondemos num dia
                            útil.
                        </p>
                    </FadeIn>

                    <FadeIn
                        custom={2}
                        className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
                    >
                        <a
                            href="mailto:hello@lurotech.com"
                            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                        >
                            Fale connosco
                        </a>
                        <a
                            href="#servicos"
                            className="w-full rounded-full border border-white/[0.15] px-6 py-3 text-center text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                        >
                            Ver serviços
                        </a>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

export { Cta };
