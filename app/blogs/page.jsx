import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
export default function payment() {
  const blogs = [1, 2, 3, 4, 5, 6]
  return (
    <section>
      <div className="relative w-full h-full bg-gray-200">
        <div className="z-0">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={0}
            height={0}
            src="/javier.svg"
            sizes="100%"
            alt="class"
          />
        </div>
        <div className="absolute sm:bottom-10 md:bottom-20 md:right-52 flex flex-col justify-center items-center px-3 py-1">
          <div className="text-white text-xl mb-3">
            مطالب مهم درباره فیزیک هسته آلبالو
          </div>
          <div className="flex mt-2">
            <span className=" px-2 py-1 mx-1 bg-gray-600 text-white text-sm  rounded-lg flex justify-center items-center">
              12 فروردین
            </span>
            <span className=" px-2 py-1 mx-1 bg-gray-600 text-white text-sm  rounded-lg flex justify-center items-center">
              3 دقیقه
            </span>
            <span className=" px-2 py-1 mx-1 bg-purple-400 text-white text-sm  rounded-lg flex justify-center items-center">
              مشاهده مطالب
            </span>
          </div>
        </div>
        <div className="w-full h-full z-50 shadow-[inset_900px_150px_1000px_rgba(0,0,0,1)]"></div>
      </div>
      <div className="md:px-32">
        <div className="mt-10 flex sm:overflow-scroll items-center sm:justify-start md:justify-center ">
          <span className="py-[3px] flex items-center justify-center sm:text-xs md:text-sm font-thin mx-4 rounded-2xl px-8 bg-purple-400 text-white">
            همه
          </span>
          <span className="py-[3px] flex items-center justify-center sm:text-xs md:text-sm font-thin mx-4 rounded-2xl px-8 border border-purple-400 text-purple-400">
            برنامه
          </span>
          <span className="py-[3px] flex items-center justify-center sm:text-xs md:text-sm font-thin mx-4 rounded-2xl px-8 border border-purple-400 text-purple-400">
            تیزهوشان
          </span>
          <span className="py-[3px] flex items-center justify-center sm:text-xs md:text-sm font-thin mx-4 rounded-2xl px-8 border border-purple-400 text-purple-400">
            کنکور
          </span>
          <span className="py-[3px] flex items-center justify-center sm:text-xs md:text-sm font-thin mx-4 rounded-2xl px-8 border border-purple-400 text-purple-400">
            مصاحبه
          </span>
        </div>
      </div>
      <div className="md:px-32">
        <div className=" flex flex-wrap justify-center mt-10 mb-52">
          {blogs.map((blog) => <BlogCard />)}

        </div>
      </div>
    </section>
  );
}
