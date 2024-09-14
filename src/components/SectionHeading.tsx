import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface SectionHeadingProps {
    children: ReactNode
    className?: string
}
export default function SectionHeading({ children, className }: SectionHeadingProps) {
    return <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("text-5xl font-bold text-center mb-12  bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-pink-500 " + className)}
    >
        {children}
    </motion.h2>
}
