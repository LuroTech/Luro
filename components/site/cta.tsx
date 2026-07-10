"use client";

import { ElegantShape } from "@/components/ui/shape-landing-hero";
import { FadeIn } from "@/components/site/fade-in";
import { Magnetic } from "@/components/site/magnetic";

function Cta() {
    return (
        <section
            id="contacto"
            className="relative w-full overflow-hidden bg-[#030303] py-28 md:py-40"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.2}
                    width={480}
                    height={110}
                    rotate={-10}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-12%] top-[8%] md:left-[-6%]"
                />
                <ElegantShape
                    delay={0.4}
                    width={360}
                    height={90}
                    rotate={14}
                    gradient="from-rose-500/[0.15]"
                    className="bottom-[6%] right-[-8%] md:right-[-4%]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <FadeIn>
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
                            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                                Pronto para construir algo{" "}
                            </span>
                            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                                extraordinário?
                            </span>
                        </h2>
                    </FadeIn>

                    <FadeIn custom={1}>
                        <p className="mb-10 text-base font-light leading-relaxed tracking-wide text-white/40 md:text-lg">
                            Conte-nos sobre o seu projeto. Respondemos num dia
                            útil.
                        </p>
                    </FadeIn>

                    <FadeIn
                        custom={2}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Magnetic>
                            <a
                                href="mailto:hello@lurotech.com"
                                className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                <span
                                    aria-hidden
                                    className="shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-black/10 to-transparent"
                                />
                                <span className="relative z-10">
                                    Fale connosco
                                </span>
                                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="#servicos"
                                className="rounded-full border border-white/[0.15] px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            >
                                Ver serviços
                            </a>
                        </Magnetic>
                    </FadeIn>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
        </section>
    );
}

export { Cta };
