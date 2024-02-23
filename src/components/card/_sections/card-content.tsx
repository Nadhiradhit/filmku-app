import React from 'react'

type CardContentProps = {
    children: React.ReactNode;
}

function CardContent(
    {children}: CardContentProps) {
    return (
        <div className="bg-red-50">
            {children}
        </div>
    )
}

export default CardContent