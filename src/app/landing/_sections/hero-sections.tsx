"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import heroPoster from '@/assets/img/poster1.jpg'

function HeroSection() {
    return (
        <motion.div
        initial={{ 
            x: -100, 
            opacity: 0 }}
        animate={{ 
            x: 0, 
            opacity: 1 }}
        transition={{
            ease: 'easeInOut',
            duration: 0.5,
        }}
        className="relative px-2 py-2">
            <h1 className="text-5xl lg:text-6xl font-body font-bold uppercase text-center text-white">Welcome to FilmKu.com</h1>
            <p className="text-lg lg:text-2xl font-body font-semibold text-center text-gray-300 mt-2">Find Your 
                <motion.span 
                animate={{ 
                    y: 100, 
                    opacity: 1 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 2,
                }}
                className="bg-orange-500 rounded-full px-2 ms-2 text-slate-950">
                    Favorite Movie!
                </motion.span>
            </p>
            <div className="flex flex-row justify-center items-center py-28  text-white">
                <h1 className="text-5xl lg:text-6xl font-body font-bold lg:mr-24">
                    Filmku adalah <span className="text-gray-300"> Lorem ipsum, dolor sit amet </span> consectetur adipisicing elit. <span className="text-gray-300"> Repellendus sunt placeat saepe! </span>
                </h1>
                <motion.div
                whileHover={{ 
                    scale: 1.2,
                    rotate: -5, 
                }}
                className="hidden lg:block"
                >
                    <Image
                    src={heroPoster
                    }
                    width={800}
                    height={600}
                    quality={100}
                    alt={'Photo'}
                    className="rounded-md"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default HeroSection