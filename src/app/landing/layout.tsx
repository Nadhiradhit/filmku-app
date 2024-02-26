import Footer from '@/components/footer/footer'
import React, { Children } from 'react'


function LandingLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}

export default LandingLayout