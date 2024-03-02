"use client"
import React from 'react'
import CardLanding from '../_partials/_card'
import { movieData } from '@/lib/data'
import { motion } from 'framer-motion'



function MovieSection() {
    return (
        <motion.div 
        initial={{ 
            y: -100, 
            opacity: 0 }}
        animate={{ 
            y
            : 0, 
            opacity: 1 }}
        transition={{
            ease: 'easeInOut',
            duration: 0.5,
        }}
        
        className="bg-orange-500 h-auto rounded-lg mb-28" data-item="movie-item">
            <div className="px-8 lg:px-16 py-16 flex flex-col justify-center justify-items-center">
                <div className="px-11 lg:px-6">
                    <h1 className="text-3xl lg:text-5xl font-body font-bold text-[#1b1b1b]">More Video</h1>
                    <p className="text-lg lg:text-2xl font-body font-semibold text-[#1b1b1b]">Featuring the latest movies...</p>
                </div>
                <div className="w-full">
                    <div className="flex flex-wrap justify-center items-center py-2 gap-5">
                        {
                            movieData.slice(0, 4).map((movie, index) => (
                                <React.Fragment key={index}>
                                    <CardLanding  {...movie}/>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MovieSection