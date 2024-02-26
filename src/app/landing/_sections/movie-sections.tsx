import React from 'react'
import CardLanding from '../_partials/_card'
import { movieData } from '@/lib/data'



function MovieSection() {
    return (
        <div className="bg-orange-500 h-auto rounded-lg mb-28">
            <div className="px-16 py-16 flex flex-col justify-center justify-items-center">
                <h1 className="text-5xl font-body font-bold text-[#1b1b1b]">More Video</h1>
                <p className="text-2xl font-body font-semibold text-[#1b1b1b]">Featuring the latest movies...</p>
                <div className="w-full">
                    <div className="flex flex-wrap justify-center items-center py-2 gap-5">
                        {
                            movieData.slice(0, 4).map((movie, index) => (
                                <React.Fragment key={index}>
                                    <CardLanding  {...movie}/>
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSection