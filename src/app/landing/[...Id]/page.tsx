import { movieData } from '@/lib/data'
import React from 'react'   
import Image from 'next/image'
import Link from 'next/link'
import DetailButon from '@/components/input/detail-button'


function Movies({
    params, 
}: {
    params: {
        Id: string[],
    }
}) {
    console.log(params.Id[1])
    const data = movieData.find((data) => data.Id === params.Id[1])
    console.log(data)
    return (
        <div className="w-full h-screen mt-28">
            <div className="max-w-screen-xl mx-auto">  
            <div className="flex items-center justify-center h-[75vh] gap-52">      
                <Image
                src={data?.Poster as string}
                alt={"photo"}
                width={280}
                height={40}
                quality={95}
                className="rounded-md w-96 h-96 mx-1.5 my-2"
                />
                <div className="">
                    <h1 className="text-white text-4xl font-semibold">{data?.Title}</h1>
                    <p className="text-gray-200 text-lg">{data?.Year}</p>
                    <p className="w-96 text-gray-200">{data?.Describe}</p>
                    <div className="mt-4">
                    <DetailButon> 
                        <Link
                        href={`/landing`}
                        > 
                            Back 
                        </Link>
                    </DetailButon>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Movies