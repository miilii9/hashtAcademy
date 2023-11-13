"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function MainNavigation() {

  return (
    <nav className=" bg-white sticky top-0 flex flex-col justify-center items-start z-50 shadow-lg">
      <div className=" sm:px-10 md:px-20 flex justify-between items-center w-full my-6">
        <div className="flex justify-center items-center">
          <Link href="/">
            <div className="flex justify-center items-center sm:w-28 md:w-auto">
              <div className=" ml-4">
                <Image src="/icon.svg" width={40} height={40} />
              </div>
              <div className=" flex justify-center items-center">
                <Image src="/navlogo.svg" width={100} height={100} />
              </div>
            </div>
          </Link>
          <div className="lg:flex mr-6 md:hidden sm:hidden">
            <Link href="/">
              <div className="mr-10 hover:text-mainPurple cursor-pointer">صفحه اصلی</div>
            </Link>
            <Link href="/online">
              <div className="mr-10 hover:text-mainPurple cursor-pointer">کلاس آنلاین</div>
            </Link>
            <Link href="/courses">
              <div className="mr-10 hover:text-mainPurple">دوره ها</div>
            </Link>
            <Link href="/seminars">
              <div className="mr-10 hover:text-mainPurple cursor-pointer">همایش ها</div>
            </Link>
            <Link href="/tutors">
              <div className="mr-10 hover:text-mainPurple">معرفی اساتید</div>
            </Link>
            <Link href="/about">
              <div className="mr-10 hover:text-mainPurple cursor-pointer">درباره ما</div>
            </Link>
            <Link href="/contact">
              <div className="mr-10 hover:text-mainPurple cursor-pointer">تماس با ما</div>
            </Link>
            <Link href="/blogs">
              <div className="mr-10 hover:text-mainPurple">مجله</div>
            </Link>
          </div>
        </div>
        <div className="lg:flex sm:hidden">
          <Link href="/login">
            <button className="py-2 px-8 bg-mainPurple rounded-xl text-white">
              ورود/ثبت نام
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center lg:hidden">

          <Link href="/login">
            <button className="mr-4 py-2 px-6 bg-mainPurple rounded-xl text-white text-xs">
              ورود/ثبت نام
            </button>
          </Link>

        </div>
      </div>

    </nav>
  );
}
