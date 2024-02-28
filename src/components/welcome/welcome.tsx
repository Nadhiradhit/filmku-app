"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'

function WeclomeSection() {
    return (
        <motion.div 
        initial={{
            y: 100,
            opacity: 0,
        }}
        animate={{
            y: 0,
            opacity: 1,
        }}
        transition={{
            ease: 'easeInOut',
            duration: 1,
        }}
        className="flex flex-col justify-center items-center min-h-screen w-full">
                <h1 className="text-4xl text-center lg:text-[8rem] lg:leading-[8rem] text-white font-bold uppercase">Hello, <span className="text-gray-300"> Hola, </span> Welcome A board </h1>
                    <motion.div 
                    whileHover={{
                        scale: [null, 1.4, 1.2],
                    }}
                    transition={{ 
                        duration: 0.3 
                    }}
                    className="bg-orange-500 px-4 py-2 md:px-8 md:py-4 rounded-full text-white text-lg lg:text-xl font-medium lg:font-bold my-4 md:my-8 flex items-center gap-2">
                        <Link href={'/landing'}> To Dashboard </Link>
                        <BsArrow90DegRight/>
                    </motion.div>
        </motion.div>
    )
}

export default WeclomeSection