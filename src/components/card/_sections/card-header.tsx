"use client"
import React from 'react'

type CardHeaderProps = {
    children: React.ReactNode;
}

function CardHeader(
    {children}: CardHeaderProps) {
    return (
        <div className="text-start flex flex-col justify-center items-center h-full rounded-md ">
            {children}
        </div>
    )
}

export default CardHeader