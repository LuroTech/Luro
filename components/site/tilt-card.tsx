"use client";

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

function TiltCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const nx = useMotionValue(0.5);
    const ny = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(ny, [0, 1], [7, -7]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(nx, [0, 1], [-7, 7]), {
        stiffness: 150,
        damping: 20,
    });

    const spotlight = useMotionTemplate`radial-gradient(260px circle at ${px}px ${py}px, rgba(255,255,255,0.07), transparent 70%)`;

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        px.set(e.clientX - rect.left);
        py.set(e.clientY - rect.top);
        nx.set((e.clientX - rect.left) / rect.width);
        ny.set((e.clientY - rect.top) / rect.height);
    }

    function handleMouseLeave() {
        nx.set(0.5);
        ny.set(0.5);
    }

    return (
        <div style={{ perspective: 800 }} className="h-full">
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className={cn("group relative h-full", className)}
            >
                <motion.div
                    aria-hidden
                    style={{ background: spotlight }}
                    className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                {children}
            </motion.div>
        </div>
    );
}

export { TiltCard };
