import React from 'react'

type CardContentProps = {
    children: React.ReactNode;
}

function CardContent(
    {children}: CardContentProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default CardContent