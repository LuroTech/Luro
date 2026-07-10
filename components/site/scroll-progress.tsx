"use client";

import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-indigo-400 via-white/70 to-rose-400"
        />
    );
}

export { ScrollProgress };
