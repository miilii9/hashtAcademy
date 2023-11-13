"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function otp() {
  const [otpTimer, setOtpTimer] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const { handleChange } = useSSNFields();

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
        <div className="md:hidden md:mb-0 sm:mb-20">
          <Image src="logowhite.svg" width={200} height={200} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex justify-center items-center px-6 py-2 sm:text-sm md:text-lg text-mainPurple bg-lightPurple rounded-t-lg">
              ورود با رمز یکبار مصرف
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
          <div className="md:py-12 md:px-12 sm:px-6 sm:py-6 bg-white flex justify-center items-center flex-col rounded-xl shadow-2xl">
            <div className="mb-3 sm:text-sm md:text-lg font-base text-gray-600">
              کد ار سال شده برای 98937******72 را وارد کنید
            </div>
            <div className="w-full">
              <form action="" method="post">
                <div class="flex flex-row items-center justify-around w-full md:px-8 md:py-4 sm:px-2 sm:py-2 my-2">
                  <div class="md:w-16 md:h-16 sm:w-10 sm:h-10 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="ssn-1"
                      maxLength={1}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="md:w-16 md:h-16 sm:w-10 sm:h-10 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="ssn-2"
                      maxLength={1}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="md:w-16 md:h-16 sm:w-10 sm:h-10 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="ssn-3"
                      maxLength={1}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="md:w-16 md:h-16 sm:w-10 sm:h-10 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="ssn-4"
                      maxLength={1}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="md:w-16 md:h-16 sm:w-10 sm:h-10 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border-2 border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      name="ssn-5"
                      maxLength={1}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>
            <Link href="/">
              <div className="w-full sm:mb-2 md:mb-10 flex justify-center">
                <button className="px-32 py-4 sm:w-32 md:w-full flex justify-center sm:text-sm md:text-base w-full bg-mainPurple text-white rounded-lg">
                  ورود
                </button>
              </div>
            </Link>
            <div className="mt-1 mb-6  text-mainPurple">ارسال مجدد</div>
            <div className="w-full h-[2px] rounded-xl bg-gray-300 mb-5"></div>
            <div className="flex flex-col">
              <div className="w-full mb-2 flex justify-center">
                <button
                  className="md:px-32 sm:px-8 py-4 w-full border-2
                 border-mainPurple text-mainPurple rounded-lg sm:text-sm md:text-lg w-full"
                >
                  ارسال رمز از طریق تماس تلفنی
                </button>
              </div>
              <div className="w-full mb-2 flex justify-center">
                <button
                  className="md:px-32 sm:px-8 py-4 w-full border-2
                 border-mainPurple text-mainPurple rounded-lg sm:text-sm md:text-lg w-full"
                >
                  میخواهم با رمز عبور وارد شوم
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

const useSSNFields = () => {
  const [ssnValues, setValue] = useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
    ssn4: "",
    ssn5: "",
  });

  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      if (value.length >= maxLength) {
        if (parseInt(fieldIndex, 10) < 6) {
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          );

          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      });
    },
  };
};
