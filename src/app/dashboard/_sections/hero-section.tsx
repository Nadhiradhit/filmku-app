"use client"
import Card from '@/components/card/_card'
import React from 'react'
import useSWR from 'swr'



function HeroSection() {
    
    return (
        <section className="">
                <h1 className="text-4xl font-body font-bold py-8 text-center">Dashboard</h1>
                    <Card/>
        </section>
    )
}

export default HeroSection