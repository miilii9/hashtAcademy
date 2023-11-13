import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function loginpage() {
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
          <div className="md:py-12 md:px-12 sm:px-6 sm:py-6 sm:mx-3 bg-white flex justify-center items-center flex-col rounded-xl shadow-2xl">
            <div className="mb-3 sm:text-sm md:text-lg text-gray-600">
              اگر حساب کاربری دارید از اینجا وارد شوید
            </div>
            <div className=" sm:w-64 md:w-full mb-3">
              <input
                type="text"
                id="full_name"
                class="bg-gray-200 border border-gray-300 text-gray-900 sm:text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 "
                placeholder="نام کاربری، ایمیل یا شماره تلفن"
                required
              />
            </div>
            <div className="w-full sm:mb-5 md:mb-10 flex justify-center">
              <button className="px-32 py-4 sm:w-32 md:w-full flex justify-center sm:text-sm md:text-base w-full bg-mainPurple text-white rounded-lg">
                ورود
              </button>
            </div>
            <div className="w-full h-[2px] rounded-xl bg-gray-300 sm:mb-4 md:mb-8"></div>
            <div className="mb-4 sm:text-sm md:text-lg text-gray-600">
              اگر حساب کاربری ندارید ثبت نام کنید
            </div>
            <Link className="w-full" href="/signup">
              <div className="w-full flex justify-center">
                <button className=" md:px-32 w-full py-4 md:text-base sm:text-sm bg-mainPurple text-white rounded-lg">
                  ایجاد حساب کاربری
                </button>
              </div>
            </Link>
          </div>
          <div className="w-full mt-3 ml-1 text-white text-sm flex sm:justify-center md:justify-end items-center">
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
