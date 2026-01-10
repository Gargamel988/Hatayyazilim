"use client";

import { motion } from "framer-motion";

export const ConnectionLine = () => {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-linear-to-r from-indigo-500/50 via-violet-500/50 to-purple-500/50 origin-left"
        />
    );
};
