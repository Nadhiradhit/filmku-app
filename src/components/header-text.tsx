import React from 'react'

function HeaderText({ 
    children } : { 
        children: React.ReactNode 
    }) {
    return (
        <>
            <h1 className="text-4xl text-white font-bold uppercase text-center">{children}</h1>
        </>
    )
}

export default HeaderText