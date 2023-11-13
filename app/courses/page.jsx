"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CoursesPage() {
  const [isShow, setIsShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [order, setOrder] = useState(false);
  const [width, setWidth] = useState(0);


  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowResize();
  }, []);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center w-full relative">
        <div className="absolute sm:top-[20rem] lg:top-64 lg:left-64 z-40 sm:w-80 md:w-auto">
          <Image src="/studing.svg" width={500} height={100} />
        </div>
        <div className="absolute sm:top-0 xl:-top-16 w-full bg-[#e9e9e9] md:pt-80 lg:pt-0 sm:pt-80">
          <svg
            className="absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1368.015 510.903"
          >
            <path
              id="Path_105"
              data-name="Path 105"
              d="M0,179.933H1366s2.1,390.432,0,388.949c-684.637,161.272-684.638,161.27-1366,0C-.22,568.732,0,179.933,0,179.933Z"
              transform="translate(0.583 -179.433)"
              fill="#e9e9e9"
              stroke="#e9e9e9"
              strokeWidth={Math.floor(width) > 1024 ? 0 : 10}
            />
          </svg>
        </div>
      </div>
      {/* About Page banner */}
      <div className="w-full flex sm:justify-center lg:justify-start lg:mt-28 sm:mt-20  lg:mr-32 xl:mr-56 ">
        <div className="sm:items-center lg:items-start flex-col lg:w-2/6 sm:w-full absolute sm:px-8 md:px-32 lg:px-0">
          <div className=" w-full flex lg:justify-start sm:justify-center text-gray-600 sm:text-2xl md:text-2xl lg:text-5xl mb-6 font-bold">
            دوره های آموزشی هشت
          </div>
          <div className="sm:w-full lg:w-[500px] h-1 rounded-xl bg-blue-300 mb-6"></div>
          <div className="sm:justify-center lg:justify-start w-full lg:text-justify sm:text-base flex text-gray-600 font-extralight font-Dana mb-9 leading-8 lg:w-96 lg:text-lg text-center lg:w-[500px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای
          </div>
        </div>
      </div>
      {/* filter bar */}
      <div className="mt-[40rem] mb-[10rem]">
        <div className="w-full flex sm:justify-between sm:px-12 lg:px-32">
          {/* Filter Category */}
          <div className="lg:flex sm:hidden">
            <div
              onClick={handleClick}
              className="flex px-2 rounded-xl cursor-pointer  ml-10 items-center hover:bg-gray-200"
            >
              <div className="ml-4 font-thin text-gray-500">همه پایه ها</div>
              <div>
                <Image src="/filterarrow.svg" width={16} height={16} />
              </div>
            </div>
            <div className="flex ml-10 items-center">
              <div className="ml-4 font-thin text-gray-500">همه رشته ها</div>
              <div>
                <Image src="/filterarrow.svg" width={16} height={16} />
              </div>
            </div>
            <div className="flex ml-10 items-center">
              <div className="ml-4 font-thin text-gray-500">همه درس ها</div>
              <div>
                <Image src="/filterarrow.svg" width={16} height={16} />
              </div>
            </div>
            <div className="flex  ml-10 items-center">
              <div className="ml-4 font-thin text-gray-500">همه مدرس ها</div>
              <div>
                <Image src="/filterarrow.svg" width={16} height={16} />
              </div>
            </div>
          </div>
          {/* search and show */}
          <div className="flex items-center sm:justify-between sm:w-full lg:w-auto">
            <div className="ml-4 sm:hidden lg:flex">
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Image src="/search.svg" width={16} height={16} />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className=" bg-gray-100 block w-80 p-3 pl-10 text-sm text-gray-900 border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                    placeholder="جستوجوس دوره ها"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <div
                onClick={() => setOrder(true)}
                className=" cursor-pointer sm:ml-2 lg:ml-0 flex items-center sm:py-2 sm:px-3 md:py-1.5  md:px-5 rounded-2xl border-2 border-mainPurple"
              >
                <button className=" text-mainPurple sm:text-sm md:text-base font-thin ml-2">
                  ترتیب نمایش
                </button>
                <Image src="/change.svg" width={16} height={16} />
              </div>
              <div
                onClick={() => setMenu(true)}
                className=" cursor-pointer sm:flex lg:hidden items-center sm:py-2 sm:px-3 md:py-1.5  md:px-5 rounded-2xl border-2 border-mainPurple"
              >
                <button className=" text-mainPurple sm:text-sm md:text-base font-thin ml-2">
                  فیلتر دوره ها
                </button>
                <Image src="/filter.svg" width={16} height={16} />
              </div>
            </div>
            <div className="flex items-center sm:flex lg:hidden">
              <Image src="/search.svg" width={20} height={20} />
            </div>
          </div>
        </div>
        {/* Filter toggler part */}
        <div className="px-32">
          <div
            className={`${isShow ? "flex" : "hidden"
              } items-center w-full bg-gray-200 rounded-2xl mt-3 py-3 justify-between`}
          >
            <div className="flex mr-5 ">
              <div className="flex flex-col ml-20">
                <div className="mb-6 text-gray-700 font-base">دروس عمومی</div>
                <div>
                  <ul>
                    <li className="mb-3 text-xs text-gray-500 ">دین و زندگی</li>
                    <li className="mb-3 text-xs text-gray-500 "> عربی</li>
                    <li className="mb-3 text-xs text-gray-500 ">
                      زبان و ادبیات فارسی
                    </li>
                    <li className="mb-3 text-xs text-gray-500 ">
                      زبان انگلیسی
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col ml-20">
                <div className="mb-6 text-gray-700 font-base">دروس عمومی</div>
                <div>
                  <ul>
                    <li className="mb-3 text-xs text-gray-500 ">دین و زندگی</li>
                    <li className="mb-3 text-xs text-gray-500 "> عربی</li>
                    <li className="mb-3 text-xs text-gray-500 ">
                      {" "}
                      زبان و ادبیات فارسی
                    </li>
                    <li className="mb-3 text-xs text-gray-500 ">
                      زبان انگلیسی
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5">
              <div
                onClick={() => setIsShow(false)}
                className="w-full  justify-end flex mb-20 cursor-pointer "
              >
                <Image src="/close.svg" width={16} height={16} />
              </div>
              <div>
                <button className="py-2 rounded-lg font-thin text-sm px-4 text-white bg-mainPurple">
                  اعمال فیلتر ها
                </button>
              </div>
              <div className="mt-1">
                <button className="py-2 rounded-lg font-thin text-sm px-4 text-white bg-gray-300">
                  پاک کردن همه
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Courses body line */}
        <div className="sm:px-12 lg:px-32">
          <div className="w-full h-[3px] bg-gradient-to-r from-mainBlue to-mainPurple to-80% rounded-xl mt-8"></div>
        </div>
        {/* Courses */}
        <div className="sm:px-0 lg:px-32">
          {/* Cards center */}
          <div className="flex flex-wrap w-full mt-6 justify-center py-5">
            <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8  bg-white shadow-lg">
              <div className="bg-slate-200 rounded-xl overflow-hidden relative w-80 flex">
                <Image src="/handsome.png" width={350} height={300} />
              </div>
              <div className="flex flex-col justify-center items-start py-3 px-5 w-full">
                <div className="mb-3">دوره فلان در جبر و بیسار مثلثاتی</div>
                <div className="flex justify-start  w-full">
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productclock.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">10 ساعت</span>
                  </div>
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productplay.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">16 جلسه</span>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productfolder.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">فایل تمرین دارد</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-5 mt-4">
                <Link href="/course">
                  <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
                    <Image src="/producteye.svg" width={30} height={30} />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
                    <div className="ml-2 ">
                      <Image src="/addcart.svg" width={25} height={25} />
                    </div>
                    <div className="text-white font-base">
                      افزودن به سبد خرید
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8  bg-white shadow-lg">
              <div className="bg-slate-200 rounded-xl overflow-hidden relative w-80 flex">
                <Image src="/handsome.png" width={350} height={300} />
              </div>
              <div className="flex flex-col justify-center items-start py-3 px-5 w-full">
                <div className="mb-3">دوره فلان در جبر و بیسار مثلثاتی</div>
                <div className="flex justify-start  w-full">
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productclock.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">10 ساعت</span>
                  </div>
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productplay.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">16 جلسه</span>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productfolder.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">فایل تمرین دارد</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-5 mt-4">
                <Link href="/course">
                  <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
                    <Image src="/producteye.svg" width={30} height={30} />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
                    <div className="ml-2 ">
                      <Image src="/addcart.svg" width={25} height={25} />
                    </div>
                    <div className="text-white font-base">
                      افزودن به سبد خرید
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8  bg-white shadow-lg">
              <div className="bg-slate-200 rounded-xl overflow-hidden relative w-80 flex">
                <Image src="/handsome.png" width={350} height={300} />
              </div>
              <div className="flex flex-col justify-center items-start py-3 px-5 w-full">
                <div className="mb-3">دوره فلان در جبر و بیسار مثلثاتی</div>
                <div className="flex justify-start  w-full">
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productclock.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">10 ساعت</span>
                  </div>
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productplay.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">16 جلسه</span>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productfolder.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">فایل تمرین دارد</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-5 mt-4">
                <Link href="/course">
                  <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
                    <Image src="/producteye.svg" width={30} height={30} />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
                    <div className="ml-2 ">
                      <Image src="/addcart.svg" width={25} height={25} />
                    </div>
                    <div className="text-white font-base">
                      افزودن به سبد خرید
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8  bg-white shadow-lg">
              <div className="bg-slate-200 rounded-xl overflow-hidden relative w-80 flex">
                <Image src="/handsome.png" width={350} height={300} />
              </div>
              <div className="flex flex-col justify-center items-start py-3 px-5 w-full">
                <div className="mb-3">دوره فلان در جبر و بیسار مثلثاتی</div>
                <div className="flex justify-start  w-full">
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productclock.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">10 ساعت</span>
                  </div>
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productplay.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">16 جلسه</span>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productfolder.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">فایل تمرین دارد</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-5 mt-4">
                <Link href="/course">
                  <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
                    <Image src="/producteye.svg" width={30} height={30} />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
                    <div className="ml-2 ">
                      <Image src="/addcart.svg" width={25} height={25} />
                    </div>
                    <div className="text-white font-base">
                      افزودن به سبد خرید
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8  bg-white shadow-lg">
              <div className="bg-slate-200 rounded-xl overflow-hidden relative w-80 flex">
                <Image src="/handsome.png" width={350} height={300} />
              </div>
              <div className="flex flex-col justify-center items-start py-3 px-5 w-full">
                <div className="mb-3">دوره فلان در جبر و بیسار مثلثاتی</div>
                <div className="flex justify-start  w-full">
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productclock.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">10 ساعت</span>
                  </div>
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productplay.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">16 جلسه</span>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productfolder.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">فایل تمرین دارد</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-5 mt-4">
                <Link href="/course">
                  <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
                    <Image src="/producteye.svg" width={30} height={30} />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
                    <div className="ml-2 ">
                      <Image src="/addcart.svg" width={25} height={25} />
                    </div>
                    <div className="text-white font-base">
                      افزودن به سبد خرید
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8  bg-white shadow-lg">
              <div className="bg-slate-200 rounded-xl overflow-hidden relative w-80 flex">
                <Image src="/handsome.png" width={350} height={300} />
              </div>
              <div className="flex flex-col justify-center items-start py-3 px-5 w-full">
                <div className="mb-3">دوره فلان در جبر و بیسار مثلثاتی</div>
                <div className="flex justify-start  w-full">
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productclock.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">10 ساعت</span>
                  </div>
                  <div className="flex ml-2">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productplay.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">16 جلسه</span>
                  </div>
                  <div className="flex">
                    <div className="flex justify-center items-center ml-[5px]">
                      <Image src="/productfolder.svg" width={12} height={12} />
                    </div>
                    <span className=" text-xs ">فایل تمرین دارد</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-5 mt-4">
                <Link href="/course">
                  <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
                    <Image src="/producteye.svg" width={30} height={30} />
                  </div>
                </Link>
                <Link href="/cart">
                  <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
                    <div className="ml-2 ">
                      <Image src="/addcart.svg" width={25} height={25} />
                    </div>
                    <div className="text-white font-base">
                      افزودن به سبد خرید
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-50 lg:hidden shadow-[0_25px_45px_20px_rgba(0,0,0,0.1)] w-full h-[40rem] fixed bottom-0 bg-white rounded-t-2xl px-6 py-4 ${menu ? "block" : "hidden"
          }`}
      >
        <div className="">
          <div className="flex w-full mb-6 justify-between items-center">
            <div className="cursor-pointer" onClick={() => setMenu(false)}>
              <Image src="/close.svg" width={16} height={16} />
            </div>
            <div className="text-mainPurple cursor-pointer">
              حذف همه فیلتر ها
            </div>
          </div>
          <div className="overflow-scroll scrol scrollbar-w-1 scrollbar scrollbar-thumb-mainPurple scrollbar-thumb-rounded  h-[31rem] mb-5">
            <div>
              <p className="mb-3 font-base text-gray-600">پایه تحصیلی</p>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    نهم
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    دهم{" "}
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    یازدم
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    دوازدهم
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 font-base text-gray-600">رشته تحصیلی</p>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    ریاضی
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    تجربی
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    علوم انسانی
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    هنر
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 font-base text-gray-600">انتخاب درس</p>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    ریاضیات
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    زیست شناسی
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    فیزیک
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    شیمی
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 font-base text-gray-600">انتخاب مدرس</p>
              <div className="mb-3">
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    آقای فلانی
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    آقای بهمانی
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    آقای بیساری
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-3 h-3 accent-mainPurple text-mainPurple bg-gray-100 border-mainPurple rounded "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="mr-3 text-sm font-thin text-gray-400"
                  >
                    خانم محترم
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className=" cursor-pointer rounded-lg py-2 px-5 bg-mainPurple flex justify-center">
            <button className="text-white flex font-base w-full justify-center items-center">
              اعمال فیلتر ها
            </button>
          </div>
        </div>
      </div>
      <div
        className={`z-50 lg:hidden shadow-[0_25px_45px_20px_rgba(0,0,0,0.1)] w-full h-[25rem] fixed bottom-0 bg-white rounded-t-2xl py-4 ${order ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col w-full mb-6 justify-start items-center  px-6">
          <div
            className="w-full cursor-pointer mb-3"
            onClick={() => setOrder(false)}
          >
            <Image src="/close.svg" width={16} height={16} />
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="w-full flex justify-center items-center mb-2">
              <Image src="/change.svg" width={20} height={20} />
            </div>
            <div>مرتب سازی بر اساس</div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="py-2 font-light border-b border-gray-300 flex justify-center">
            جدیدترین
          </div>
          <div className="py-2 font-light border-b border-gray-300 flex justify-center">
            پربازدید ترین
          </div>
          <div className="py-2 font-light border-b border-gray-300 flex justify-center">
            ارزان ترین
          </div>
          <div className="py-2 font-light border-b border-gray-300 flex justify-center">
            گران ترین
          </div>
          <div className="py-2 font-light flex border-gray-300 justify-center">
            پرطرفدارترین
          </div>
        </div>
      </div>
    </div>
  );
}
