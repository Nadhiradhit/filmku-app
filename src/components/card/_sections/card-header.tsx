"use client"
import Image from 'next/image'
import React from 'react'

type CardHeaderProps = {
    children: React.ReactNode;
}

function CardHeader(
    {children}: CardHeaderProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default CardHeader