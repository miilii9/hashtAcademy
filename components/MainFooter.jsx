"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function () {
  const pathname = usePathname();

  return (
    <div className={`w-full ${pathname === "/" ? "bg-gray-700" : null}`}>
      {/* Footer ilustration */}
      <div className="flex flex-col justify-center relative">
        <div className="w-full flex justify-center absolute -top-12">
          <Image src="/icon.svg" width={60} height={60} />
        </div>
        <div className=" w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 393.831"
            width="100%"
          >
            <path
              id="Path_52"
              data-name="Path 52"
              d="M680.473-80.4,0,32.329v281.1H1366V32.329Z"
              transform="translate(0 80.397)"
              fill="#e5e5e5"
            />
          </svg>
        </div>

        <div className=" md:mt-32 lg:mt-24 w-full flex sm:flex-col lg:flex-row absolute sm:items-center lg:justify-around sm:justify-center">
          {/* Footer Links */}
          <div className="  lg:items-start md:max-w-xl sm:w-full sm:items-center flex flex-col sm:mb-16 lg:mb-0">
            <div className="py-5 font-bold text-lg text-gray-400">
              لینک های فلان
            </div>
            <ul className="flex flex-wrap  sm:justify-center lg:justify-start items-center sm:max-w-[6rem] md:max-w-sm">
              <Link href="/faq">
                <li className="md:ml-6 text-gray-400 my-1 text-sm">
                  سوالات متداول
                </li>
              </Link>
              <Link href="/policy">
                <li className="md:ml-6 text-gray-400 my-1 text-sm">
                  قوانین و مقررات
                </li>
              </Link>
              <Link href="/tutors">
                <li className="md:ml-6 text-gray-400 my-1 text-sm">
                  معرفی اساتید
                </li>
              </Link>
              <li className="md:ml-6 text-gray-400 my-1 text-sm">
                همایش ها
              </li>
              <Link href="/contact">
                <li className="md:ml-6 text-gray-400 my-1 text-sm">
                  ارتباط با ما
                </li>
              </Link>
              <Link href="/about">
                <li className="md:ml-6 text-gray-400 my-1 text-sm">
                  درباره ما
                </li>
              </Link>
              <li className="md:ml-6 text-gray-400 my-1 text-sm">صفحه بیسار</li>
            </ul>
          </div>
          {/* Footer social */}
          <div className=" flex sm:w-2/3 lg:max-w-md justify-around">
            <div className="">
              <Image src="/telegram.svg" width={30} height={30} />
            </div>
            <div className="">
              <Image src="/youtube.svg" width={40} height={40} />
            </div>
            <div className="">
              <Image src="/instagram.svg" width={30} height={30} />
            </div>
            <div className="">
              <Image src="/facebook.svg" width={15} height={15} />
            </div>
            <div className="">
              <Image src="/linkdin.svg" width={30} height={30} />
            </div>
            <div className="">
              <Image src="/twitter.svg" width={35} height={35} />
            </div>
          </div>
        </div>
        <div className="lg:hidden w-full h-96 bg-[#e5e5e5]"></div>
      </div>

      <div className="w-full h-20 flex justify-center items-center bg-gradient-to-r from-mainBlue to-mainPurple to-80% text-white">
        تمامی حقوق متعلق به بندگان خداست
      </div>
    </div>
  );
}
