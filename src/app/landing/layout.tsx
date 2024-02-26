import Footer from '@/components/footer/footer'
import React, { Children } from 'react'
import Header from "@/components/navbar/navbar";

function LandingLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default LandingLayout