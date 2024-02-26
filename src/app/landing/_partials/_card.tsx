"use client"
import React from 'react'
import { movieData } from '@/lib/data'
import Image from 'next/image'


type MovieProps = (typeof movieData)[number]
function CardLanding({
    Id, Poster, Title, Type, Year, Describe
}: MovieProps) { 
    return (
        <div className="w-full md:w-64 h-full rounded-lg px-1.5 py-2 bg-slate-100">
            <div className="flex justify-center">
                <Image
                src={Poster}
                alt={Title}
                width={272}
                height={30}
                quality={95}
                className="rounded-md h-72 mx-1.5 my-2"
                />
            </div>
            <div className="px-1.5 text-slate-800">
                <h3 className="text-lg font-semibold">{Title}</h3>
                <p className="font-sans font-medium">{Year}</p>
                <p className="line-clamp-[3]">{Describe}</p>
            </div>
        </div>
    )
}

export default CardLanding