import Footer from '@/components/footer/footer'
import React, { Children } from 'react'


function MovieLayout({
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

export default MovieLayout