"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { cx } from "@vechaiui/react";
import Image from "next/image";
export default function faq() {
  return (
    <div className="relative overflow-hidden">
      <div>
        <svg
          className="absolute -bottom-48 -left-72"
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
      <div className="mt-28 mb-52 flex flex-col justify-center items-start sm:mx-10 md:mx-32">
        <div className="mb-8 text-4xl font-bold">سوالات متداول</div>
        <div className="w-72 h-1 bg-blue-300 mb-20 rounded-xl"></div>
        <div className="w-full z-50">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={cx(
                    "flex transition-all ease-in-out delay-100 items-center justify-between w-full px-4 py-2 rounded-lg mb-4 cursor-base focus:outline-none bg-gradient-to-r from-mainBlue to-mainPurple to-80% text-white"
                  )}
                >
                  <span className="sm:text-xs md:text-base">
                    چرا در شمال کشور سقف خانه ها را شیب دار میسازند؟
                  </span>
                  <div
                    className={cx(
                      "w-4 h-4 transition-all ease-in-out delay-100",
                      open
                        ? "transition-all ease-in-out delay-100 rotate-180 text-white"
                        : "transition-all ease-in-out delay-100"
                    )}
                  >
                    <Image src="/arrowdown.svg" alt="arrowdown" width={60} height={60} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="transition-all ease-in-out delay-100 px-6 py-4 mb-2 sm:text-xs md:text-sm text-muted  leading-6 text-gray-500">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={cx(
                    "flex transition-all ease-in-out delay-100 items-center justify-between w-full px-4 py-2 rounded-lg mb-4 cursor-base focus:outline-none bg-gray-400 text-white"
                  )}
                >
                  <span className="sm:text-xs md:text-base">
                    چرا در شمال کشور سقف خانه ها را شیب دار میسازند؟
                  </span>
                  <div
                    className={cx(
                      "w-4 h-4 transition-all ease-in-out delay-100",
                      open
                        ? " transition-all ease-in-out delay-100 rotate-180 text-white"
                        : ""
                    )}
                  >
                    <Image src="/arrowdown.svg" alt="arrowdown" width={60} height={60} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 py-4 mb-2 sm:text-xs md:text-sm text-muted  leading-6 text-gray-500">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={cx(
                    "flex items-center transition-all ease-in-out delay-100 justify-between w-full px-4 py-2 rounded-lg mb-4 cursor-base focus:outline-none bg-gray-400 text-white"
                  )}
                >
                  <span className="sm:text-xs md:text-base">
                    چرا در شمال کشور سقف خانه ها را شیب دار میسازند؟
                  </span>
                  <div
                    className={cx(
                      "w-4 h-4 transition-all ease-in-out delay-100",
                      open
                        ? "transition-all ease-in-out delay-100 rotate-180 text-white"
                        : ""
                    )}
                  >
                    <Image src="/arrowdown.svg" alt="arrowdown" width={60} height={60} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 py-4 mb-2 sm:text-xs md:text-sm text-muted  leading-6 text-gray-500">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={cx(
                    "transition-all ease-in-out delay-100 flex items-center justify-between w-full px-4 py-2 rounded-lg mb-4 cursor-base focus:outline-none bg-gray-400 text-white"
                  )}
                >
                  <span className="sm:text-xs md:text-base">
                    چرا در شمال کشور سقف خانه ها را شیب دار میسازند؟
                  </span>
                  <div
                    className={cx(
                      "w-4 h-4 transition-all ease-in-out delay-100",
                      open
                        ? "transition-all ease-in-out delay-100 rotate-180 text-white"
                        : ""
                    )}
                  >
                    <Image src="/arrowdown.svg" alt="arrowdown" width={60} height={60} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 py- mb-2 sm:text-xs md:text-sm text-muted  leading-6 text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
