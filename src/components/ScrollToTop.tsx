"use client"
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {

    const [showScrollToTop, setShowScrollToTop] = useState(false)
    const [showTableOfContents, setShowTableOfContents] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }




    return (
        <AnimatePresence>
            {showScrollToTop && (
                <motion.button
                    className="fixed bottom-4 right-4 p-2 bg-primary text-primary-foreground rounded-full shadow-lg"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronUp className="w-6 h-6" />
                    <span className="sr-only">Scroll to top</span>
                </motion.button>
            )}
        </AnimatePresence>
    )
}
