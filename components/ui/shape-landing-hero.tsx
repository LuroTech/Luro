"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type Variants,
} from "framer-motion";
import { Circle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

const wordEase = [0.25, 0.4, 0.25, 1] as const;

function AnimatedWords({
    text,
    baseDelay,
    className,
}: {
    text: string;
    baseDelay: number;
    className?: string;
}) {
    return (
        <>
            {text.split(" ").map((word, i) => (
                <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.9,
                        delay: baseDelay + i * 0.12,
                        ease: wordEase,
                    }}
                    className={cn("inline-block", className)}
                >
                    {word}
                    {" "}
                </motion.span>
            ))}
        </>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
    children,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    children?: React.ReactNode;
}) {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    const shapesX = useTransform(springX, [-0.5, 0.5], [-26, 26]);
    const shapesY = useTransform(springY, [-0.5, 0.5], [-18, 18]);
    const glowX = useTransform(springX, [-0.5, 0.5], [30, -30]);
    const glowY = useTransform(springY, [-0.5, 0.5], [22, -22]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }

    function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
        const touch = e.touches[0];
        if (!touch) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((touch.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((touch.clientY - rect.top) / rect.height - 0.5);
    }

    function handleTouchEnd() {
        mouseX.set(0);
        mouseY.set(0);
    }

    const title1Words = title1.split(" ").length;

    return (
        <div
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="relative min-h-svh w-full flex items-center justify-center overflow-hidden bg-[#030303]"
        >
            <motion.div
                style={{ x: glowX, y: glowY }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"
            />

            <motion.div
                style={{ x: shapesX, y: shapesY }}
                className="absolute inset-0 overflow-hidden"
            >
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </motion.div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.9, 0.5, 0.9],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="inline-flex"
                        >
                            <Circle className="h-2 w-2 fill-rose-500/80 text-rose-500/80" />
                        </motion.span>
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 md:mb-8 tracking-tight">
                        <AnimatedWords
                            text={title1}
                            baseDelay={0.7}
                            className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                        />
                        <br />
                        <AnimatedWords
                            text={title2}
                            baseDelay={0.7 + title1Words * 0.12}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                        />
                    </h1>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            {description}
                        </p>
                    </motion.div>

                    {children && (
                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>

            <motion.a
                href="#servicos"
                aria-label="Ver a secção seguinte"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
                <motion.span
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 1.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="inline-flex"
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.span>
            </motion.a>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric, ElegantShape }
