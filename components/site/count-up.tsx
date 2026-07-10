"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({
    target,
    suffix = "",
    duration = 1.8,
    className,
}: {
    target: number;
    suffix?: string;
    duration?: number;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    useEffect(() => {
        if (!inView || !ref.current) return;

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            ref.current.textContent = `${target}${suffix}`;
            return;
        }

        const controls = animate(0, target, {
            duration,
            ease: [0.25, 0.4, 0.25, 1],
            onUpdate: (value) => {
                if (ref.current) {
                    ref.current.textContent = `${Math.round(value)}${suffix}`;
                }
            },
        });
        return () => controls.stop();
    }, [inView, target, suffix, duration]);

    return (
        <span ref={ref} className={className}>
            0{suffix}
        </span>
    );
}

export { CountUp };
