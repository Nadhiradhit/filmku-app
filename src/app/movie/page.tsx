
import React from "react"
import { Metadata } from "next"
import HeroSection from "./_sections/hero-section"

export const metadata: Metadata = {
    title: "Movie",
}

function DashboardMovie() {
    return (
        <main className="w-full min-h-screen py-28 px-2">
            <div className="max-w-screen-2xl h-auto mx-auto">
                <HeroSection/>
            </div>
        </main>       
    )
}

export default DashboardMovie