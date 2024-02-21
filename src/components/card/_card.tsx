import React from 'react'
import CardHeader from './_sections/card-header'
import CardContent from './_sections/card-content'
import CardFooter from './_sections/card-footer'

function Card() {
    return (
        <div className="bg-red-500 w-72 h-72 rounded-md flex justify-center items-center">
            <CardHeader>
                
            </CardHeader>
            <CardContent/>
            <CardFooter/>
        </div>
    )
}

export default Card