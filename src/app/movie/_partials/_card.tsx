"use client"
import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'

const dataFetcher = (url: string) => fetch(`https://www.omdbapi.com/?s=all&plot=full&apikey=${process.env.NEXT_PUBLIC_FILM_API_KEY}`).then((res) => res.json())

function filmData(imdbID: string){
    const { data, error, isLoading} = useSWR(`/dashboard/${imdbID}`, dataFetcher)
    console.log(data)
    return{
        film: data,
        isLoading,
        isError: error
    }
    
}


function Card({imdbID}: any) {
    const { film, isLoading, isError} = filmData(imdbID);

    const filmResult :any = film?.Search
    if (isError) return <div>failed to load</div>
    if (isLoading) return <div className="flex justify-center items-center h-[50vh] text-white font-body font-bold text-3xl"> Basic Loading First !! </div>
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center w-full gap-12 mt-8 cursor-pointer">
            {filmResult.map((film: any, id: number) => (
                <div className="w-full md:w-52 h-full rounded-lg px-1.5 py-2 bg-slate-100 relative" key={id}>
                    <div className="text-start flex flex-col justify-center items-center h-full rounded-md ">
                        <Image
                            src={film.Poster}
                            alt={film.Title}
                            quality={90}
                            width={180}
                            height={20}
                            className="rounded-lg w-full md:w-48 h-44 hover:scale-100 scale-95 duration-300"
                        />
                    </div>
                    <div className="px-2 py-1">
                        <p className="font-body font-semibold text-sm">{film.Title}</p>
                        <p>{film.Year}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card