import Footer from '@/components/footer/footer'
import Header from '@/components/navbar/navbar'
import React from 'react'

function AboutLayout({
        children, admin, user
    }:{
        children: React.ReactNode
        admin: React.ReactNode
        user: React.ReactNode
    }) {
    return (
        <>
        <Header/>
            <div className="flex gap-2 px-8 py-8 mt-28">
            {admin}
            {user}
            </div>
            {children}
        <Footer/>
        </>
    )
}

export default AboutLayout