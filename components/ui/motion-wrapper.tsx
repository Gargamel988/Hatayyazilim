"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface MotionProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    disableOnMobile?: boolean;
}

export const FadeUp = ({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    disableOnMobile = true,
}: MotionProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Performance: Disable animations on mobile if requested or if user prefers reduced motion
    if ((disableOnMobile && isMobile) || shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeIn = ({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    disableOnMobile = false,
}: MotionProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if ((disableOnMobile && isMobile) || shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className = "",
    staggerChildren = 0.1,
    delayChildren = 0,
}: {
    children: ReactNode;
    className?: string;
    staggerChildren?: number;
    delayChildren?: number;
}) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren,
                        delayChildren,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
