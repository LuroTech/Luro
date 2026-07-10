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
                    <div className="flex flex-wrap items-center justify-center gap-4">
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
                                    Iniciar projeto
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
