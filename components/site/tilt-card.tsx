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

    function setFromPoint(
        clientX: number,
        clientY: number,
        target: HTMLElement
    ) {
        const rect = target.getBoundingClientRect();
        px.set(clientX - rect.left);
        py.set(clientY - rect.top);
        nx.set((clientX - rect.left) / rect.width);
        ny.set((clientY - rect.top) / rect.height);
    }

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        setFromPoint(e.clientX, e.clientY, e.currentTarget);
    }

    function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
        const touch = e.touches[0];
        if (!touch) return;
        setFromPoint(touch.clientX, touch.clientY, e.currentTarget);
    }

    function reset() {
        nx.set(0.5);
        ny.set(0.5);
    }

    return (
        <div style={{ perspective: 800 }} className="h-full">
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                onTouchStart={handleTouchMove}
                onTouchMove={handleTouchMove}
                onTouchEnd={reset}
                onTouchCancel={reset}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className={cn("group relative h-full", className)}
            >
                <motion.div
                    aria-hidden
                    style={{ background: spotlight }}
                    className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
                />
                {children}
            </motion.div>
        </div>
    );
}

export { TiltCard };
