import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { MotionProvider } from "@/components/site/motion-provider";
import { Navbar } from "@/components/site/navbar";
import { Services } from "@/components/site/services";
import { Stats } from "@/components/site/stats";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
    return (
        <MotionProvider>
            <div id="top" className="w-full bg-[#030303] text-white">
                <Navbar />

                <HeroGeometric
                    badge="Luro Tech"
                    title1="Construímos o que"
                    title2="outros imaginam."
                    description="A Luro Tech cria websites, aplicações web e software à medida: desenhados com intenção, construídos para durar."
                >
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <a
                            href="mailto:hello@lurotech.com"
                            className="w-full rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                        >
                            Iniciar projeto
                        </a>
                        <a
                            href="#servicos"
                            className="w-full rounded-full border border-white/[0.15] px-6 py-3 text-center text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
                        >
                            Os nossos serviços
                        </a>
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
