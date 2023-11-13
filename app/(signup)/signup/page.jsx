"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function page() {
  const [agreement, setAgreement] = useState(false);
  const handleChange = (e) => {
    setAgreement(e.target.checked);
  };
  return (
    <div className="relative h-screen shadow-[inset_0px_0px_1000px_rgba(204,0,204,0.2)]">
      <div
        style={{
          backgroundImage: "url(/chairs.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 w-full h-full"
      ></div>
      <div className="absolute w-full h-full z-10 shadow-[inset_900px_150px_1000px_rgba(204,0,204,0.4)]"></div>
      <div className="relative z-20 flex md:flex-row sm:flex-col items-center sm:justify-center md:justify-around h-full">
        <div className="md:hidden sm:mb-20 md:mb-0">
          <Image src="logowhite.svg" width={200} height={200} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between sm:px-3">
            <div className="flex justify-center sm:text-sm md:text-base items-center sm:px-4 md:px-6 py-2 text-mainPurple bg-lightPurple rounded-t-lg">
              ایجاد حساب کاربری
            </div>
            <Link href="/login">
              <div className="mb-2 px-3 py-2 flex justify-center items-center bg-black rounded-lg bg-opacity-70 ">
                <button className="ml-2 sm:text-sm md:text-base text-white">
                  بازگشت
                </button>
                <Image src="/left.svg" width={12} height={12} />
              </div>
            </Link>
          </div>
          <div className="md:py-12 md:px-12 sm:px-6 sm:py-10 sm:mx-3 bg-white flex justify-center items-center flex-col rounded-xl shadow-2xl">
            <div className="mb-3 sm:text-sm md:text-lg text-gray-600">
              شماره موبایل خود را وارد کنید
            </div>
            <div className="w-full mb-3">
              <input
                type="tel"
                id="full_name"
                class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                placeholder="شماره موبایل"
                required
              />
            </div>
            <div className="w-full sm:mb-5 md:mb-10">
              <Link href="/verify">
                <button
                  disabled={!agreement}
                  className={`px-32 py-4 sm:text-sm md:text-lg w-full  text-white rounded-lg ${
                    agreement ? "bg-mainPurple" : "bg-gray-300"
                  }`}
                >
                  ادامه
                </button>
              </Link>
            </div>
            <div className="w-full h-[2px] rounded-xl bg-gray-300 sm:mb-4 md:mb-8"></div>
            <div className="flex items-center justify-center">
              <input
                name="agreement"
                className="ml-2 sm:h-4 md:h-5 sm:w-4 md:w-5"
                type="checkbox"
                onChange={handleChange}
              />
              <label
                for="agreement"
                className="sm:text-sm md:text-lg text-gray-600"
              >
                قوانین و مقررات را مطالعه کرده و قبول دارم
              </label>
            </div>
          </div>
          <div className="w-full mt-2 ml-1 text-white text-sm flex sm:justify-center md:justify-end items-center">
            به کمک نیاز دارید؟
          </div>
        </div>
        <div className="sm:hidden md:flex">
          <Image src="logowhite.svg" width={250} height={250} />
        </div>
      </div>
    </div>
  );
}
