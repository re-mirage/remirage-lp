"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/containers/SectionContainer";
import Link from "next/link";

const clients = [
    { name: 'Egaliti', logo: '/projects/egaliti/egaliti-logo.png', url: 'https://egaliti.com' },
    { name: 'Advancia', logo: '/projects/advancia/advancia-logo.png', url: 'https://apps.apple.com/jp/app/advancia/id6473286747?l=en-US' },
    { name: 'Fair Finance', logo: '/projects/fairfinance/fairfinance-logo.png', url: 'https://fairfinance.org.uk/' },
    { name: 'Neeb', logo: '/projects/neeb/neeb-logo.svg', url: 'https://neeb.app/' },
    { name: '4Otakus', logo: '/projects/4otakus/4otakus-logo.png', url: 'https://4otakus.com' },
    { name: 'Datawars', logo: '/projects/datawars/datawars-logo.png', url: 'https://datawars.space/' },
    { name: "Master Drain", logo: "/projects/masterdrain/masterdrain-logo.png", url: "http://www.mstdrain.co.uk/" },
    { name: "Jedicoin", logo: "/projects/jedicoin/jedicoin-logo.png", url: "https://jedicoin.io/" },
    { name: "Porthos", logo: "/projects/porthos/porthos-logo.svg", url: "https://www.porthos.co/" },
]

export default function OurClients() {
    return (
        <SectionContainer>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="my-24"
            >
                <h3 className="text-3xl font-bold text-center mb-12">Our Clients</h3>
                <div className="relative overflow-hidden p-4">
                    <motion.div
                        animate={{ x: [0, '-100%'] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex space-x-8"
                    >
                        {[...clients, ...clients].map((client, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
                            >
                                <Link href={client.url} aria-label={client.name}>
                                    <motion.div
                                        className="relative group w-full h-full flex items-center justify-center"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-55 rounded-full filter blur-xl"></div>
                                        <div className="relative w-24 h-24 flex items-center justify-center overflow-hidden rounded-xl  bg-opacity-10">
                                            <Image
                                                src={client.logo}
                                                alt={client.name}
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