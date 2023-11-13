import React from "react";
import Image from "next/image";
export default function BlogCard() {
  return (
    <div className="flex m-4">
      <div className="bg-white relative sm:w-24 md:w-48 h-24 rounded-xl overflow-hidden">
        <Image src="/apple.jpg" alt="course" fill />
      </div>
      <div className="flex flex-col justify-center items-center px-3 py-1">
        <h3 className="text-white sm:text-base md:text-xl mb-3">
          مطالب مهم درباره فیزیک هسته آلبالو
        </h3>
        <div className="flex mt-2">
          <div className="flex px-2 py-1 bg-gray-600 rounded-lg">
            <div className="flex justify-center items-center">
              <Image src="/blogcalender.svg" width={12} height={12} className="calender" />
            </div>
            <span className="mr-1 text-white sm:text-xs md:text-sm  flex justify-center items-center">
              12 فروردین
            </span>
          </div>
          <div className="flex px-2 py-1 bg-gray-600 rounded-lg mx-1">
            <div className="flex justify-center items-center">
              <Image src="/productclock.svg" width={12} height={12} alt="clock" />
            </div>
            <span className="mr-1 text-white sm:text-xs md:text-sm flex justify-center items-center">
              3 دقیقه
            </span>
          </div>
          <span className=" px-2 py-1 bg-mainPurple text-white sm:text-xs md:text-sm  rounded-lg flex justify-center items-center">
            مشاهده مطالب
          </span>
        </div>
      </div>
    </div>
  );
}
