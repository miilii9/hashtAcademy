"use client"
import React from 'react'
import Image from 'next/image'
export default function BlogSuggestion() {
    return (
        <div className="flex flex-col m-4 w-80 mb-12">
            <div className="bg-gray-300 w-full h-28 rounded-xl relative overflow-hidden">
                <Image src="/apple.jpg" fill />
            </div>
            <div className="flex flex-col justify-center items-center px-3 py-1">
                <div className="text-gray-900 text-lg mb-3 mt-2">
                    مطالب مهم درباره فیزیک هسته آلبالو
                </div>
                <div className="flex mt-2">
                    <span className=" px-2 py-1 mx-1 bg-gray-600 text-white text-sm  rounded-lg flex justify-center items-center">
                        12 فروردین
                    </span>
                    <span className=" px-2 py-1 mx-1 bg-gray-600 text-white text-sm  rounded-lg flex justify-center items-center">
                        3 دقیقه
                    </span>
                    <span className=" px-2 py-1 mx-1 bg-purple-400 text-white text-sm  rounded-lg flex justify-center items-center">
                        مشاهده مطالب
                    </span>
                </div>
            </div>
        </div>
    )
}
