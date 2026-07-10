"use client";

import { motion, type Variants } from "framer-motion";

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: i * 0.15,
            ease: [0.25, 0.4, 0.25, 1],
        },
    }),
};

function FadeIn({
    children,
    className,
    custom = 0,
}: {
    children: React.ReactNode;
    className?: string;
    custom?: number;
}) {
    return (
        <motion.div
            className={className}
            custom={custom}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}

export { FadeIn };
