import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MotionProvider } from "@/components/site/motion-provider";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Magnetic } from "@/components/site/magnetic";
import { Navbar } from "@/components/site/navbar";
import { Services } from "@/components/site/services";
import { Stats } from "@/components/site/stats";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
    return (
        <MotionProvider>
            <div id="top" className="w-full bg-[#030303] text-white">
                <ScrollProgress />
                <Navbar />

                <HeroGeometric
                    badge="Luro Tech"
                    title1="Construímos o que"
                    title2="outros imaginam."
                    description="A Luro Tech cria websites, aplicações web e software à medida: desenhados com intenção, construídos para durar."
                >
                    <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <Magnetic className="w-full sm:w-auto">
                            <a
                                href="mailto:hello@lurotech.com"
                                className="group relative inline-flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                            >
                                <span
                                    aria-hidden
                                    className="shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-black/10 to-transparent"
                                />
                                <span className="relative z-10">
                                    Iniciar projeto
                                </span>
                                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </Magnetic>
                        <Magnetic className="w-full sm:w-auto">
                            <a
                                href="#servicos"
                                className="inline-flex w-full items-center justify-center rounded-full border border-white/[0.15] px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:bg-white/[0.05] hover:text-white active:scale-95 active:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                            >
                                Os nossos serviços
                            </a>
                        </Magnetic>
                    </div>
                </HeroGeometric>

                <Services />
                <Stats />
                <Cta />
                <Footer />
            </div>
        </MotionProvider>
    );
}
