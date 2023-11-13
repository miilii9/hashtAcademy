"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [width, setWidth] = useState(0);


  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
  }, []);


  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col justify-center relative">
        <div className="lg:hidden sm:flex py-56 w-full bg-[#c95dff] border-0"></div>
        <div className="w-full flex justify-center absolute -bottom-[75px]">
          <Image src="/icon.svg" width={90} height={90} />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1368.015 510.903"
          >
            <path
              id="Path_105"
              data-name="Path 105"
              d="M0,179.933H1366s2.1,390.432,0,388.949c-684.637,161.272-684.638,161.27-1366,0C-.22,568.732,0,179.933,0,179.933Z"
              transform="translate(0.583 -179.433)"
              fill="#c95dff"
              stroke="#c95dff"
              strokeWidth={Math.floor(width) > 1024 ? 0 : 10}
            />
          </svg>
        </div>
        {/* About Page banner */}
        <div className="w-full flex justify-center absolute">
          <div className="flex flex-col relative justify-center items-center md:max-w-xl sm:max-w-xs">
            <div className=" text-white text-4xl mb-6 font-bold">درباره ما</div>
            <div className="w-72 h-1 rounded-xl bg-blue-300 mb-6"></div>
            <div className=" text-base flex text-center text-white font-extralight font-Dana mb-9 leading-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای
            </div>
            <div>
              <button className="border border-white rounded-lg px-6 py-2 text-white text-sm">
                بیشتر بخوانید
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Banners center */}
      <div className="w-full mt-64 mb-56">
        {/* First banner */}
        <div className="flex sm:flex-col md:flex-row mt-20 w-ful sm:items-center ">
          <div className="flex items-center  sm:w-full md:w-1/2 pl-0 sm:ml-16 md:ml-0">
            <div className="h-full flex items-center">
              <div className="md:w-36 sm:w-16 h-16 bg-gradient-to-r from-mainBlue to-mainPurple to-80%"></div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/salon.jpg" width={600} height={600} />
            </div>
          </div>
          <div className="flex flex-col sm:px-16 sm:max-w-[35rem] md:w-1/4 justify-center sm:mr-0 md:mr-16  md:mt-0 sm:mt-10">
            <div className=" font-bold text-2xl mb-7">هشت، افق بی نهایت</div>
            <div className=" text-sm font-light leading-6 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </div>
          </div>
        </div>
        {/* second banner */}
        <div className="flex sm:flex-col md:flex-row mt-20 w-ful sm:items-center justify-end">
          <div className="flex flex-col sm:px-16 sm:max-w-[35rem] md:w-1/4 justify-center sm:ml-0 md:ml-16  md:mb-0 sm:mb-10">
            <div className=" font-bold text-2xl mb-7">هشت، افق بی نهایت</div>
            <div className=" text-sm font-light leading-6 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </div>
          </div>
          <div className="flex items-center  sm:w-full md:w-1/2 pl-0 sm:mr-16 md:mr-0 justify-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/salon.jpg" width={600} height={600} />
            </div>
            <div className="h-full flex items-center">
              <div className="md:w-36 sm:w-16 h-16 bg-gradient-to-r from-mainBlue to-mainPurple to-80%"></div>
            </div>
          </div>
        </div>
        {/* Third banner */}
        <div className="flex sm:flex-col md:flex-row mt-20 w-ful sm:items-center">
          <div className="flex items-center  sm:w-full md:w-1/2 pl-0 sm:ml-16 md:ml-0">
            <div className="h-full flex items-center">
              <div className="md:w-36 sm:w-16 h-16 bg-gradient-to-r from-mainBlue to-mainPurple to-80%"></div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/salon.jpg" width={600} height={600} />
            </div>
          </div>
          <div className="flex flex-col sm:px-16 sm:max-w-[35rem] md:w-1/4 justify-center sm:mr-0 md:mr-16  md:mt-0 sm:mt-10">
            <div className=" font-bold text-2xl mb-7">هشت، افق بی نهایت</div>
            <div className=" text-sm font-light leading-6 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col md:flex-row mt-20 w-ful sm:items-center justify-end">
          <div className="flex flex-col sm:px-16 sm:max-w-[35rem] md:w-1/4 justify-center sm:ml-0 md:ml-16  md:mb-0 sm:mb-10">
            <div className=" font-bold text-2xl mb-7">هشت، افق بی نهایت</div>
            <div className=" text-sm font-light leading-6 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و
              متخصصان را می طلبد
            </div>
          </div>
          <div className="flex items-center  sm:w-full md:w-1/2 pl-0 sm:mr-16 md:mr-0 justify-end">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/salon.jpg" width={600} height={600} />
            </div>
            <div className="h-full flex items-center">
              <div className="md:w-36 sm:w-16 h-16 bg-gradient-to-r from-mainBlue to-mainPurple to-80%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
