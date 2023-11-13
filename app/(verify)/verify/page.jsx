import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function verify() {
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
          <div className="flex justify-between">
            <div className="flex justify-center items-center sm:py-2 sm:px-4 md:px-6 md:py-2 sm:text-sm md:text-lg text-mainPurple bg-lightPurple rounded-t-lg">
              رمز عبور
            </div>
            <Link href="/login">
              <div className="mb-2 px-3 py-2 flex justify-center items-center bg-black rounded-lg bg-opacity-70 ">
                <Link href="/signup">
                  <button className=" text-white">بازگشت</button>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#ffff"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="md:py-12 md:px-12 sm:px-6 sm:py-6 bg-white flex justify-center items-center flex-col rounded-xl shadow-2xl">
            <div className="mb-3 sm:text-sm md:text-lg font-base text-gray-600">
              رمز عبور خود را وارد کنید
            </div>
            <div className="w-full mb-3">
              <input
                type="tel"
                id="full_name"
                class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                placeholder="شماره موبایل"
                required
              />
            </div>
            <div className="w-full mb-2">
              <button className="px-32 sm:text-sm md:text-lg py-4 w-full bg-mainPurple text-white rounded-lg">
                ورود
              </button>
            </div>
            <div className="mt-1 sm:text-sm md:text-lg mb-6 text-mainPurple">
              فراموشی رمز عبور
            </div>
            <div className="w-full h-[2px] rounded-xl bg-gray-300 mb-5"></div>
            <div className="flex flex-col w-full">
              <Link className="w-full" href="/otp">
                <div className="w-full mb-2 flex justify-center">
                  <button
                    className="md:px-32 sm:px-8 py-4 w-full border-2
                 border-mainPurple text-mainPurple rounded-lg sm:text-sm md:text-lg w-full"
                  >
                    ورود با رمز یکبار مصرف / پیامک
                  </button>
                </div>
              </Link>
              <div className="w-full mb-2 flex justify-center">
                <button
                  className="md:px-32 py-4 w-full border-2
                 border-mainPurple text-mainPurple rounded-lg sm:text-sm md:text-lg w-full"
                >
                  ورود با رمز یکبار مصرف / تماس
                </button>
              </div>
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
