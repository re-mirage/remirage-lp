"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/containers/SectionContainer";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import projects from "@/mock/projects";


export default function OurClients() {
    return (
        <SectionContainer>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="my-24"
            >


                <SectionHeading >
                    Our Clients
                </SectionHeading>



                <div className="relative overflow-hidden p-4">
                    <motion.div
                        animate={{ x: [0, '-100%'] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex space-x-8"
                    >
                        {[...projects, ...projects].map((client, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
                            >
                                <Link href={client.url} aria-label={client.title}>
                                    <motion.div
                                        className="relative group w-full h-full flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-55 rounded-full filter blur-xl"></div>
                                        <div className="relative w-24 h-24 flex items-center justify-center overflow-hidden rounded-xl  bg-opacity-10">
                                            <Image
                                                src={client.logo}
                                                alt={client.title}
                                                width={80}
                                                height={40}
                                                className="max-w-full max-h-14 object-contain transition-all duration-300 
                                                    filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                                            />
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </SectionContainer>
    )
}