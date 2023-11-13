import React from "react";
import Image from "next/image";

export default function SeminarCard() {
  return (
    <div className="h-[18rem] w-[21rem] rounded-xl flex flex-col items-center mx-8 bg-gradient-to-r from-cyan-500 to-purple-500">
      <div className="rounded-xl overflow-hidden relative flex">
        <div className="h-64 w-[21rem] bg-gray-700">
          <Image src="/clap.png" fill />
        </div>
        <div className="absolute m-3 z-50">
          <div className="text-white">همایش فلان بیسار یازدهم</div>
          <div className="text-white">11 خرداد</div>
        </div>
        <div className="z-30 absolute w-full h-full shadow-[inset_400px_0px_50px_rgba(0,0,0,0.5)]"></div>
      </div>
      <div className="flex items-center">
        <div className="my-3 text-white font-bold">مشاهده و رزرو</div>
        <div className="mr-2">
          <Image src="/eye.svg" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
