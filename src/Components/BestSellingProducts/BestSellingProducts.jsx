import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function BestSellingProducts() {
  return (
    <section className="pb-9 md:pb-20">
      <div className="container">
        <SectionHeader
          titleHeader="پرفروش ترین محصولات"
          subTitleHeader="پیشنهاد قهوه خور ها ..."
          slider={true}
        />
        <Swiper
          slidesPerView={2}
          spaceBetween={14}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p3.png"
                  className="w-32 md:w-auto"
                  alt="p 1"
                />
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                پودر قهوه ترک 300 گرمی
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <span className="font-DanaBold text-red-400 text-sm md:text-xl">
                  موجود نیست
                </span>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <div className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                      <use href="#shoping-card"></use>
                    </svg>
                  </div>
                  <div className="flex-center text-gray-400  hover:text-teal-600  dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-6 md:h-6">
                      <use href="#arrows-right-left"></use>
                    </svg>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p4.png"
                  className="w-32 md:w-auto"
                  alt="p 1"
                />
                <span className="absolute right-1 top-1 h-[30px] font-DanaBold text-xs/[34px] md:text-base/[34px] text-white dark:text-zinc-700 bg-orange-300 rounded-full px-2.5 md:px-3.5">
                  5%
                </span>
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                قهوه فرانسه
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    325,000
                  </span>
                  <span className="text-sm tracking-tighter"> تومان</span>
                </div>
                <div className="offer">
                  <span className="text-xs md:text-xl">5,000</span>
                  <span className="hidden xl:inline sm:text-sm">تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <div className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                      <use href="#shoping-card"></use>
                    </svg>
                  </div>
                  <div className="flex-center text-gray-400  hover:text-teal-600  dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-6 md:h-6">
                      <use href="#arrows-right-left"></use>
                    </svg>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p5.png"
                  className="w-32 md:w-auto"
                  alt="p 5"
                />
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                پودر قهوه اسپرسو
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    100,000
                  </span>
                  <span className="text-sm tracking-tighter"> تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <div className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                      <use href="#shoping-card"></use>
                    </svg>
                  </div>
                  <div className="flex-center text-gray-400  hover:text-teal-600  dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-6 md:h-6">
                      <use href="#arrows-right-left"></use>
                    </svg>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p6.png"
                  className="w-32 md:w-auto"
                  alt="p 1"
                />
                <span className="absolute right-1 top-1 h-[30px] font-DanaBold text-xs/[34px] md:text-base/[34px] text-white dark:text-zinc-700 bg-orange-300 rounded-full px-2.5 md:px-3.5">
                  10%
                </span>
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                پودر قهوه اسپرسو مانوکا250 گرمی
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    120,000
                  </span>
                  <span className="text-sm tracking-tighter"> تومان</span>
                </div>
                <div className="offer">
                  <span className="text-xs md:text-xl">175,000</span>
                  <span className="hidden xl:inline sm:text-sm">تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <div className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                      <use href="#shoping-card"></use>
                    </svg>
                  </div>
                  <div className="flex-center text-gray-400  hover:text-teal-600  dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-6 md:h-6">
                      <use href="#arrows-right-left"></use>
                    </svg>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p7.png"
                  className="w-32 md:w-auto"
                  alt="p 1"
                />
                <span className="absolute right-1 top-1 h-[30px] font-DanaBold text-xs/[34px] md:text-base/[34px] text-white dark:text-zinc-700 bg-orange-300 rounded-full px-2.5 md:px-3.5">
                  25%
                </span>
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                قهوه ترک 250 گرمی
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    390,000
                  </span>
                  <span className="text-sm tracking-tighter"> تومان</span>
                </div>
                <div className="offer">
                  <span className="text-xs md:text-xl">115,000</span>
                  <span className="hidden xl:inline sm:text-sm">تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <div className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                      <use href="#shoping-card"></use>
                    </svg>
                  </div>
                  <div className="flex-center text-gray-400  hover:text-teal-600  dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-6 md:h-6">
                      <use href="#arrows-right-left"></use>
                    </svg>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p1.png"
                  className="w-32 md:w-auto"
                  alt="p 1"
                />
                <span className="absolute right-1 top-1 h-[30px] font-DanaBold text-xs/[34px] md:text-base/[34px] text-white dark:text-zinc-700 bg-orange-300 rounded-full px-2.5 md:px-3.5">
                  12%
                </span>
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                پودر قهوه اسپرسو مانوکا250 گرمی
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    220,000
                  </span>
                  <span className="text-sm tracking-tighter"> تومان</span>
                </div>
                <div className="offer">
                  <span className="text-xs md:text-xl">175,000</span>
                  <span className="hidden xl:inline sm:text-sm">تومان</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <div className="flex gap-2.5 md:gap-3 items-center">
                  <div className="flex-center w-[26px] h-[26px] md:w-9 md:h-9 text-gray-400 hover:text-white bg-gray-100 hover:bg-teal-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-[22px] md:h-[22px]">
                      <use href="#shoping-card"></use>
                    </svg>
                  </div>
                  <div className="flex-center text-gray-400  hover:text-teal-600  dark:hover:text-emerald-500 rounded-full cursor-pointer transition-all ">
                    <svg className="w-4 h-4 md:w-6 md:h-6">
                      <use href="#arrows-right-left"></use>
                    </svg>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400  ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                  <svg className="w-4 h-4 md:w-6 md:h-6 ">
                    <use href="#star"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
