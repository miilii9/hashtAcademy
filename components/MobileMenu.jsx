import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function MobileMenu() {
    return (
        <div className="sticky shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] bottom-0 md:hidden sm:flex bg-white h-16 justify-around items-center z-50">
            <Link href="/">
                <div className="mx-3 hover:bg-gray-100 rounded-full p-2 ease-in-out transition-all duration-100 delay-75 hover:scale-125">
                    <Image src="/house.svg" width={25} height={25} alt='house' />
                </div>
            </Link>
            <Link href="/courses">
                <div className="mx-3 hover:bg-gray-100 rounded-full p-2 ease-in-out transition-all duration-100 delay-75 hover:scale-125">
                    <Image src="/courses.svg" width={25} height={25} />
                </div>
            </Link>
            <Link href="/online">
                <div className="mx-3 hover:bg-gray-100 rounded-full p-2 ease-in-out transition-all duration-100 delay-75 hover:scale-125">
                    <Image src="/camera.svg" width={25} height={25} />
                </div>
            </Link>
            <Link href="/blogs">
                <div className="mx-3 hover:bg-gray-100 rounded-full p-2 ease-in-out transition-all duration-100 delay-75 hover:scale-125">
                    <Image src="/education.svg" width={25} height={25} />
                </div>
            </Link>
            <Link href="/seminars">
                <div className="mx-3 hover:bg-gray-100 rounded-full p-2 ease-in-out transition-all duration-100 delay-75 hover:scale-125">
                    <Image src="/board.svg" width={25} height={25} />
                </div>
            </Link>
        </div>
    )
}
