"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function WeclomeSection() {
    return (
        <motion.div 
        initial={{
            x: -100,
            y: 100,
            opacity: 0,
        }}
        animate={{
            x: 0,
            y: 0,
            opacity: 1,
        }}
        transition={{
            ease: 'easeInOut',
            duration: 0.6,
        }}
        className="flex flex-col justify-center items-center h-[100vh]">
                <h1 className="text-4xl text-center lg:text-6xl text-white font-bold">Hello, Hola, Welcome A board</h1>
                    <Link 
                    href={'/landing'}
                    className="bg-orange-500 px-2 py-2 md:px-8 md:py-4 rounded-full text-white text-xl font-bold my-4 md:my-8"
                    >To Dashboard</Link>
        </motion.div>
    )
}

export default WeclomeSection