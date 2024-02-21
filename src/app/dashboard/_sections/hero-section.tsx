import Card from '@/components/card/_card'
import React from 'react'

function HeroSection() {
    return (
        <section>
                <h1 className="text-4xl font-body font-bold py-8 text-center">Dashboard</h1>
                    <div className="flex flex-wrap justify-center gap-[1.5rem]"> 
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        
                    </div>
        </section>
    )
}

export default HeroSection