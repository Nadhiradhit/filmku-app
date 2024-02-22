"use client"
import React from 'react'
import CardHeader from './_sections/card-header'
import CardContent from './_sections/card-content'
import CardFooter from './_sections/card-footer'
import useSWR from 'swr'

const dataFetcher = (url: string) => fetch(`https://www.omdbapi.com/?s=spongebob&apikey=${process.env.NEXT_PUBLIC_FILM_API_KEY}`).then((res) => res.json())

function filmData(imdbID: string){
    const { data, error, isLoading} = useSWR(`/dashboard/${imdbID}`, dataFetcher)
    console.log(data)
    return{
        film: data,
        isLoading,
        isError: error
    }
    
}


function Card({imdbID}: {imdbID: string}) {
    const { film, isLoading, isError} = filmData(imdbID);

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div className="bg-red-500 w-72 h-72 rounded-md flex justify-center items-center">
            <CardHeader> 
                <p>{film.imdbID}</p>
            </CardHeader>
            <CardContent> 
                <p></p>
            </CardContent>
            <CardFooter> 
                <p></p>
            </CardFooter>
        </div>
    )
}

export default Card