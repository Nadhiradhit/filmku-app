"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { links } from '@/lib/data'
import { motion } from "framer-motion"


// const visibleNavbar = function() {
//     const [isSticky, setIsSticky] = useState(false)

//     const handleScrolling = function() {
//         setIsSticky(window.scrollY > 0)
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', handleScrolling)
//         return () => {
//             window.removeEventListener('scroll', handleScrolling)
//         }
//     }, [])
// }

function Header() {
    return (
        <section>
            <motion.div 
                initial={{
                    opacity: 0,
                    y: -100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                
                data-item="navbar"
                className="blur-navbar fixed top-0 z-30"
                >
                <nav className="max-w-screen-2xl mx-auto px-2 flex flex-wrap justify-between">  
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
                    >
                        <Link
                            href={'/'}
                            target='_blank'
                            className="font-semibold text-2xl font-plus-jakarta-sans"
                        >
                            Film<span className="text-orange-500 text-lg font-bold">Ku</span>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ 
                            x: 100, 
                            opacity: 0 }}
                        animate={{ 
                            x: 0, 
                            opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 0.5,
                        }}
                    >
                        <ul className="flex items-center justify-center gap-2">
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
                    </motion.div>
                </nav>
            </motion.div>
        </section>
    )
}

export default Header