"use client"
import React from 'react'
import Link from 'next/link'
import { links } from '@/lib/data'
import { motion } from "framer-motion"

function Header() {
    return (
        <section className="blur-navbar z-30 fixed top-0">
            <motion.div 
            initial={{ 
                y: -100, 
                opacity: 0 }}
            animate={{ 
                y: 0, 
                opacity: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
            }}
            data-item="navbar">
                <nav className="max-w-screen-xl mx-auto px-2 flex flex-wrap justify-between">
                    <Link
                    href={'/'}
                    target='_blank'
                    className="font-semibold text-2xl font-plus-jakarta-sans"
                    >
                    FilmKu</Link>
                    <div>
                        <ul className="flex items-center justify-center mt-2 gap-2">
                            {links.map((link) =>(
                                <li
                                
                                key={link.hash}
                                >
                                <Link
                                target='_blank'
                                href={link.hash}
                                >
                                {link.name}
                                </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </motion.div>
        </section>
    )
}

export default Header