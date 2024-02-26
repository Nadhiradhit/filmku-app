import React from 'react'
import WeclomeSection from '@/components/welcome/welcome'

function Dashboard() {
    return (
        <section className="w-full h-screen">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative">
                    <WeclomeSection/>
                    <div className="bg-[#7c491f] absolute top-[10rem] -z-10 right-[50rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                    <div className="bg-[#2c2b2a] absolute top-[10rem] -z-10 left-[-50rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard