import React from 'react'

type CardFooterProps = {
    children: React.ReactNode;
}
function CardFooter(
    {children}: CardFooterProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default CardFooter