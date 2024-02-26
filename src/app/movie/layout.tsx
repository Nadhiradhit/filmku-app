import Footer from '@/components/footer/footer'
import React, { Children } from 'react'
import Header from "@/components/navbar/navbar";

function MovieLayout({
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

export default MovieLayout