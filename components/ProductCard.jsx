import React from "react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col items-center mx-8 sm:mt-8 lg:mt-8 bg-white shadow-lg">
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
        <div className="ml-2 py-2 px-4 flex justify-center items-center  rounded-lg bg-mainBlue ">
          <Image src="/producteye.svg" width={30} height={30} />
        </div>
        <div className=" rounded-lg py-2 px-5 bg-mainPurple flex">
          <div className="ml-2 ">
            <Image src="/addcart.svg" width={25} height={25} />
          </div>
          <div className="text-white font-base">افزودن به سبد خرید</div>
        </div>
      </div>
    </div>
  );
}
