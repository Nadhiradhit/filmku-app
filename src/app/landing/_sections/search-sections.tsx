import HeaderText from '@/components/header-text'
import React from 'react'
import { BsSearch } from 'react-icons/bs'


function SearchSection() {
    return (
        <>
        <div className="my-16">
            <HeaderText>Search For The Movie</HeaderText>
            <div className="flex flex-col items-center justify-center my-8">
                <form action="" method="post">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                            <BsSearch className="w-4 h-4 text-white"/>
                        </div>
                        <input type="search" name="" id="" className="bg-[#2c2b2a] text-white w-[25rem] block ps-10 p-2.5 py-2 px-4 rounded-lg" placeholder="Search Movie..."/>
                    </div>
                </form>
                <div className="my-4">
                    <p className="text-gray-300 text-lg font-medium">You can watch your favorite movie</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchSection