import Image from 'next/image'
import React from 'react'

export default function SeminarsPage() {
    return (
        <div>
            <div className='w-full mb-96'>
                <div className="relative mb-40">
                    <div className="absolute w-full h-full z-10 shadow-[inset_900px_2000px_2000px_rgba(225,225,225,0.8)]"></div>
                    <Image src="/chairs.jpg" width={2000} height={2000} />
                    <div className='absolute w-full h-[700px] justify-center z-20 top-32 flex flex-col'>
                        <div className="px-32  flex flex-col">
                            <p className="text-2xl mb-5">
                                <span className="bg-blue-300 p-1">
                                    همایش  دانش آموزی رایگان
                                </span>
                            </p>
                            <h1 className='text-mainPurple text-6xl mb-5'>ترکیب برنده</h1>
                            <p className="text-2xl mb-5">چهره هایی که فقط عکسشون تو تبریز پیدا میشه!</p>
                            <div className="mt-14 flex">
                                <div className="mx-2 px-5 py-3 w-56 flex justify-center border border-mainPurple rounded-2xl">8 اردیبهشت 1402</div>
                                <div className='mx-2 px-5 py-3 w-56 flex justify-center border border-mainPurple rounded-2xl'>تالار وحدت دانشگاه تبریز</div>
                            </div>
                        </div>
                        <div className="w-full px-32 flex absolute -bottom-20 justify-center">
                            <div className='flex flex-col p-3 mx-6 items-center justify-between bg-white shadow-lg w-48 h-36 my-2 rounded-2xl relative'>
                                <div className='flex flex-col items-center'>
                                    <div className='my-1 text-mainPurple'>
                                        سانس اول
                                    </div>
                                    <div className='my-1'>
                                        ویژه پایه دهم
                                    </div>
                                    <div className='my-1'>
                                        12:00
                                    </div>
                                </div>
                                <div className='text-white -bottom-5   bg-mainPurple absolute px-5 py-3 flex justify-center border border-mainPurple rounded-2xl'>تهیه بلیت</div>
                            </div>
                            <div className='flex flex-col p-3 mx-6 items-center justify-between bg-white shadow-lg w-48 h-36 my-2 rounded-2xl relative'>
                                <div className='flex flex-col items-center'>
                                    <div className='my-1 text-mainPurple'>
                                        سانس اول
                                    </div>
                                    <div className='my-1'>
                                        ویژه پایه دهم
                                    </div>
                                    <div className='my-1'>
                                        12:00
                                    </div>
                                </div>
                                <div className='text-white -bottom-5   bg-mainPurple absolute px-5 py-3 flex justify-center border border-mainPurple rounded-2xl'>تهیه بلیت</div>
                            </div>
                            <div className='flex flex-col p-3 mx-6 items-center justify-between bg-white shadow-lg w-48 h-36 my-2 rounded-2xl relative'>
                                <div className='flex flex-col items-center'>
                                    <div className='my-1 text-mainPurple'>
                                        سانس اول
                                    </div>
                                    <div className='my-1'>
                                        ویژه پایه دهم
                                    </div>
                                    <div className='my-1'>
                                        12:00
                                    </div>
                                </div>
                                <div className='text-white -bottom-5   bg-mainPurple absolute px-5 py-3 flex justify-center border border-mainPurple rounded-2xl'>تهیه بلیت</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex relative justify-center w-full h-[400px] mb-40'>
                    <div className='ml-40 shadow-xl z-30 items-center flex rounded-3xl bg-white px-12 py-14 h-[500px] w-[1000px]'>
                        <div className='flex flex-col w-2/3'>
                            <div className='text-4xl mb-8 text-mainPurple'>درباره همایش</div>
                            <div className="text-justify leading-7"> و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعهد،   </div>
                        </div>
                        <div className='bg-gray-600 rounded-3xl w-[400px] h-[300px] absolute left-40 flex justify-center items-center'><Image src="/play.svg" height={70} width={70} /></div>
                    </div>

                </div>
                <div className='flex items-center justify-around px-32  w-full h-[400px] '>
                    <div className="flex flex-col w-96">
                        <div className="text-mainPurple text-2xl mb-4">تهیه بلیت همایش</div>
                        <div className="leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</div>
                    </div>
                    <div className="w-1/2">
                        <div className=' w-full justify-end flex'>
                            <div className="mx-2">
                                <input type="text" id="first_name" class="bg-gray-50 my-2 border border-mainPurple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="نام" required />
                                <input type="text" id="first_name" class="bg-gray-50 my-2 border border-mainPurple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="نام خانوادگی" required />
                            </div>
                            <div>
                                <input type="text" id="first_name" class="bg-gray-50 my-2 border border-mainPurple text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="شماره تلفن" required />
                                <div className=' bg-mainPurple border border-mainPurple my-2  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white'>تایید شماره موبایل</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
