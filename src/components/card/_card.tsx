"use client"
import React from 'react'
import CardHeader from './_sections/card-header'
import CardContent from './_sections/card-content'
import CardFooter from './_sections/card-footer'
import useSWR from 'swr'
import Image from 'next/image'

const dataFetcher = (url: string) => fetch(`https://www.omdbapi.com/?s=frozen&apikey=${process.env.NEXT_PUBLIC_FILM_API_KEY}`).then((res) => res.json())

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
    if (isLoading) return <div>loading...</div>
    return (
        <div className="flex flex-wrap justify-center w-full gap-12 mt-8">
            {filmResult.map((film: any, id: number) => (
                <div className="w-auto h-full rounded-lg px-1.5 py-2 bg-slate-100 relative" key={id}>
                    <CardHeader>
                        <Image
                            src={film.Poster}
                            alt={film.Title}
                            quality={90}
                            width={180}
                            height={20}
                            className="rounded-lg w-48 h-44 "
                        />
                    </CardHeader>
                    <CardContent>
                        <p className="font-body font-semibold text-sm">{film.Title}</p>
                    </CardContent>
                    <CardFooter>
                        <p>{film.Year}</p>
                    </CardFooter>
                </div>
            ))}
        </div>
    );
}

export default Card