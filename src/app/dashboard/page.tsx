import React from "react"
import { Metadata } from "next"
import HeroSection from "./_sections/hero-section"

export const metadata: Metadata = {
    title: "Dashboard",
}

function page() {
    return (
        <main className="w-full bg-blue-400 py-8 my-8">
            <div className="max-w-screen-xl h-screen mx-auto">
                <HeroSection/>
            </div>
        </main>       
    )
}

export default page