"use client";

import { Hexagon } from "lucide-react";
import { FadeIn } from "@/components/site/fade-in";

function XIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className={className}
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className={className}
        >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
];

const socialLinks = [
    { label: "X (Twitter)", href: "https://twitter.com", icon: XIcon },
    { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
];

function Footer() {
    return (
        <footer className="w-full bg-[#030303]">
            <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
                <FadeIn className="flex items-center justify-between">
                    <a
                        href="#top"
                        className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                        <Hexagon
                            className="h-9 w-9 text-white transition-transform duration-500 group-hover:rotate-90"
                            strokeWidth={2.25}
                        />
                        <span className="text-xl font-bold tracking-tight text-white">
                            Luro Tech
                        </span>
                    </a>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="rounded-full bg-white/[0.08] p-3 text-white/80 transition-all duration-300 hover:scale-110 hover:bg-white/[0.15] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            );
                        })}
                    </div>
                </FadeIn>

                <div className="my-8 h-px w-full bg-white/[0.08]" />

                <FadeIn
                    custom={1}
                    className="flex flex-col justify-between gap-6 md:flex-row"
                >
                    <div className="space-y-1">
                        <p className="text-sm text-white/60">
                            © 2026 Luro Tech
                        </p>
                        <p className="text-sm text-white/40">
                            Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                        <div className="flex flex-wrap gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-full text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-6">
                            {legalLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="rounded-full text-sm text-white/40 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}

export { Footer };
