"use client";

import { motion } from "framer-motion";
import { Home, Layers, Mail, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links: { label: string; id: string; icon: LucideIcon }[] = [
    { label: "Início", id: "top", icon: Home },
    { label: "Serviços", id: "servicos", icon: Layers },
    { label: "Contacto", id: "contacto", icon: Mail },
];

function Navbar() {
    const [active, setActive] = useState("top");

    useEffect(() => {
        function onScroll() {
            const position = window.scrollY + window.innerHeight / 3;
            let current = "top";
            for (const link of links) {
                const el = document.getElementById(link.id);
                if (el && el.offsetTop <= position) {
                    current = link.id;
                }
            }
            setActive(current);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            aria-label="Navegação principal"
            className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-auto sm:top-5"
        >
            <div className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#030303]/60 p-1.5 shadow-lg shadow-black/30 backdrop-blur-lg">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = active === link.id;
                    return (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setActive(link.id)}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                                "relative rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition-colors sm:px-7",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                                isActive
                                    ? "text-white"
                                    : "text-white/60 hover:text-white"
                            )}
                        >
                            <span className="hidden sm:inline">
                                {link.label}
                            </span>
                            <span className="inline sm:hidden">
                                <Icon className="h-4 w-4" />
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="tubelight"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                                >
                                    <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-white">
                                        <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-white/20 blur-md" />
                                        <div className="absolute -top-1 h-6 w-8 rounded-full bg-white/20 blur-md" />
                                        <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-white/20 blur-sm" />
                                    </div>
                                </motion.div>
                            )}
                        </a>
                    );
                })}
            </div>
        </motion.nav>
    );
}

export { Navbar };
