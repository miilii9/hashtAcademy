import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Tutors() {
  return (
    <div className="relative overflow-hidden">
      <div>
        <svg
          className="absolute bottom-96 -left-72"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="735.168"
          height="1243.639"
          viewBox="0 0 735.168 1243.639"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#c95dff" />
              <stop offset="1" stopColor="#0ff2ff" />
            </linearGradient>
            <clipPath id="clip-path">
              <path
                id="Path_150"
                data-name="Path 150"
                d="M252.9,0a138.9,138.9,0,0,0-120,69.257L18.493,267.4a139.064,139.064,0,0,0,0,138.585L132.9,604.129a133.273,133.273,0,0,0,12.5,17.963,144.409,144.409,0,0,0-11.952,17.35L19.042,837.653a139.045,139.045,0,0,0,0,138.584l114.4,198.145a138.824,138.824,0,0,0,120.005,69.259h228.81a138.9,138.9,0,0,0,120.005-69.259L716.674,976.237a139.053,139.053,0,0,0,0-138.584L602.267,639.442a149.849,149.849,0,0,0-12.429-17.965,134.291,134.291,0,0,0,11.954-17.348L716.127,405.986a138.724,138.724,0,0,0,0-138.585L601.792,69.258A139.023,139.023,0,0,0,481.717,0Z"
                transform="translate(0 -0.001)"
                fill="url(#linear-gradient)"
              />
            </clipPath>
          </defs>
          <g
            id="Group_79"
            data-name="Group 79"
            transform="translate(0 -0.001)"
            opacity="0.17"
          >
            <g
              id="Group_78"
              data-name="Group 78"
              transform="translate(0 0.001)"
              clipPath="url(#clip-path)"
            >
              <rect
                id="Rectangle_795"
                data-name="Rectangle 795"
                width="1450.942"
                height="1287.205"
                transform="matrix(0.523, -0.853, 0.853, 0.523, -560.259, 904.023)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="mb-32 mt-16 flex flex-col justify-center items-center ">
        <div className="mb-8 text-4xl font-bold">اساتید آکادمی هشت</div>
        <div className="px-14 sm:w-full md:w-1/2">
          <div className="w-full h-1 bg-gradient-to-r from-mainBlue to-mainPurple to-80% mb-16 rounded-xl"></div>
        </div>
        {/* Tutors cards center */}
        <div className="z-40 sm:pr-0 md:pr-20  xl:px-72 md:px-32 w-full flex flex-wrap justify-center mb-20 md:mr-0 sm:mr-14">
          <Link href="/tutor">
            <div className=" md:mr-28 sm:w-72 md:w-96 mt-4 flex h-48 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
              <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
                <Image src="/happy.png" width={150} height={150} />
              </div>
              <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
                <div className="mb-12 w-full flex flex-col justify-start">
                  <div className=" text-lg font-bold text-white">
                    استاد عباس کیارستمی
                  </div>
                  <div className=" font-light text-sm text-white">
                    مدرس درس کارگردانی
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                    مشاهده دوره های استاد
                  </button>
                </div>
              </div>
            </div></Link>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-48 md:mr-28 sm:w-72 md:w-96 mt-4 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-mainBlue to-mainPurple to-99%">
            <div className="bg-gray-100 shadow-xl sm:-right-14 md:-right-20 absolute rounded-xl flex items-center justify-center sm:w-28 sm:h-28 md:w-40 md:h-40">
              <Image src="/happy.png" width={150} height={150} />
            </div>
            <div className=" md:mx-4 md:w-72 p-3 sm:mr-10 md:mr-20 flex flex-col justify-center ">
              <div className="mb-12 w-full flex flex-col justify-start">
                <div className=" text-lg font-bold text-white">
                  استاد عباس کیارستمی
                </div>
                <div className=" font-light text-sm text-white">
                  مدرس درس کارگردانی
                </div>
              </div>
              <div className="w-full flex justify-end">
                <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
                  مشاهده دوره های استاد
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <svg
          className=" absolute -bottom-72"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="464.129"
          height="785.139"
          viewBox="0 0 464.129 785.139"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#c95dff" />
              <stop offset="1" stopColor="#0ff2ff" />
            </linearGradient>
            <clipPath id="clip-path">
              <path
                id="Path_151"
                data-name="Path 151"
                d="M159.664,0A87.693,87.693,0,0,0,83.9,43.725L11.675,168.817a87.8,87.8,0,0,0,0,87.492L83.9,381.4a84.138,84.138,0,0,0,7.891,11.341A91.17,91.17,0,0,0,84.248,403.7L12.022,528.831a87.782,87.782,0,0,0,0,87.491L84.248,741.415a87.643,87.643,0,0,0,75.762,43.725H304.464a87.692,87.692,0,0,0,75.762-43.725l72.228-125.093a87.787,87.787,0,0,0,0-87.491L380.226,403.7a94.6,94.6,0,0,0-7.847-11.342,84.779,84.779,0,0,0,7.547-10.952l72.182-125.092a87.579,87.579,0,0,0,0-87.492L379.926,43.725A87.769,87.769,0,0,0,304.119,0Z"
                transform="translate(0 -0.001)"
                fill="url(#linear-gradient)"
              />
            </clipPath>
          </defs>
          <g
            id="Group_81"
            data-name="Group 81"
            transform="translate(0 -0.001)"
            opacity="0.17"
          >
            <g
              id="Group_80"
              data-name="Group 80"
              transform="translate(0 0.001)"
              clipPath="url(#clip-path)"
            >
              <rect
                id="Rectangle_796"
                data-name="Rectangle 796"
                width="916.014"
                height="812.643"
                transform="matrix(0.523, -0.853, 0.853, 0.523, -353.705, 570.731)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
