import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface SectionHeadlineProps {
    children: ReactNode
}
export default function SectionHeadline({ children }: SectionHeadlineProps) {
    return <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-100"
    >
        {children}
    </motion.h2>
}
