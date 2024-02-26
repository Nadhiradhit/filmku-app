import Card from '@/app/movie/_partials/_card'
import React from 'react'



function HeroSection() {
    
    return (
        <section className="">
                <h1 className="text-2xl font-body font-semibold uppercase pb-2 px-4 text-white">Movies</h1>
                <p className="px-4 text-lg font-body font-semibold text-white">Many Movies that you might like!</p>
                    <div>
                        <Card/>
                    </div>
        </section>
    )
}

export default HeroSection