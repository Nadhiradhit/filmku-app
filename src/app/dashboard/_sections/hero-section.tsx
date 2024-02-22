"use client"
import Card from '@/components/card/_card'
import React from 'react'
import useSWR from 'swr'



function HeroSection() {
    
    return (
        <section>
                <h1 className="text-4xl font-body font-bold py-8 text-center">Dashboard</h1>
                    <div className="flex flex-wrap justify-center gap-[1.5rem]"> 
                        <Card imdbID={''}/>
                        
                    </div>
        </section>
    )
}

export default HeroSection