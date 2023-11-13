import React from "react";

export default function TutorCard() {
  return (
    <div className=" w-96 mt-4 flex h-48 pr-3 relative  items-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-gray-100 shadow-xl -right-20 absolute rounded-xl flex items-center justify-center w-40 h-40">
        <Image src="/happy.png" width={150} height={150} />
      </div>
      <div className="mx-4 w-72 p-3 mr-20 flex flex-col justify-center ">
        <div className="mb-12 w-full flex flex-col justify-start">
          <div className=" text-lg font-bold text-white">
            استاد عباس کیارستمی
          </div>
          <div className=" font-light text-sm text-white">
            مدرس درس کارگردانی
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button className="px-3 py-2 rounded-lg border border-white text-white font-light text-sm">
            مشاهده دوره های استاد
          </button>
        </div>
      </div>
    </div>
  );
}
