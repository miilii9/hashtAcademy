"use client"
import MapComponent from "@/components/Map";
import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <div className=" flex justify-around mb-64 sm:mt-12 md:mt-20 w-full sm:flex-col md:flex-row px-10">
      <div className="sm:flex md:hidden flex-col w-full">
        <div className="mb-8 text-4xl font-bold">تماس با ما</div>
        <div className=" w-full h-1 bg-gradient-to-r from-mainBlue to-mainPurple to-80% mb-6 rounded-xl"></div>
      </div>
      <div className="flex flex-col sm:hidden md:flex md:w-2/5 ">
        <div className="mb-8 text-4xl font-bold">تماس با ما</div>
        <div className="w-56 h-1 bg-gradient-to-r from-mainBlue to-mainPurple to-80% mb-6 rounded-xl"></div>
        <div className="mb-4 flex items-center">
          <Image className="ml-1" src="/location.svg" width={20} height={20} />
          <p className=" font-bold">          آدرس ۱: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          </p>
        </div>
        <div className="mb-4 flex items-center">
          <Image className="ml-1" src="/contactinsta.svg" width={20} height={20} />
          <p className=" font-bold"> Instagram
          </p>
        </div>
        <div className="mb-4 flex items-center">
          <Image className="ml-1" src="/telephone.svg" width={20} height={20} />
          <p className=" font-bold" dir="ltr">        ۰۴۱ ۴۴۴ ۲۳۹۸
          </p>
        </div>
        <div className="mb-8 flex items-center">
          <Image className="ml-1" src="/phone.svg" width={20} height={20} />
          <p className=" font-bold" dir="ltr">        ۰۴۱ ۴۴۴ ۲۳۹۸
          </p>
        </div>
        <MapComponent />
      </div>
      <div className=" flex flex-col sm:w-full md:w-2/6 sm:mb-20 md:mb-0">
        <div className="mb-5">برای ما پیامی دارید؟ برای ما بنویسید</div>
        <div className="flex w-full mb-2 sm:flex-col md:flex-row">
          <div className="ml-2 sm:w-full md:w-1/2 sm:mb-2">
            <input
              type="text"
              id="full_name"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
              placeholder="نام و نام خانوادگی شما"
              required
            />
          </div>
          <div className="sm:w-full md:w-1/2">
            <input
              type="email"
              id="email"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full md:h-[550px] text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="...ما مشتاق خواندن پیام های شما هستیم"
          ></textarea>
        </div>
        <div className="w-full flex sm:justify-center md:justify-end">
          <button className="px-16 py-3 rounded-lg text-white flex justify-center items-center bg-gradient-to-r from-mainBlue to-mainPurple to-80%">
            ارسال پیام
          </button>
        </div>
      </div>
      <div className="flex flex-col md:hidden w-full ">
        <div className="mb-4 flex items-center">
          <Image className="ml-1" src="/location.svg" width={20} height={20} />
          <p className=" font-bold">          آدرس ۱: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          </p>
        </div>
        <div className="mb-4 flex items-center">
          <Image className="ml-1" src="/contactinsta.svg" width={20} height={20} />
          <p className=" font-bold"> Instagram
          </p>
        </div>
        <div className="mb-4 flex items-center">
          <Image className="ml-1" src="/telephone.svg" width={20} height={20} />
          <p className=" font-bold" dir="ltr">        ۰۴۱ ۴۴۴ ۲۳۹۸
          </p>
        </div>
        <div className="mb-8 flex items-center">
          <Image className="ml-1" src="/phone.svg" width={20} height={20} />
          <p className=" font-bold" dir="ltr">        ۰۴۱ ۴۴۴ ۲۳۹۸
          </p>
        </div>
      </div>
    </div>
  );
}
