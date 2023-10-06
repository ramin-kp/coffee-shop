import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CategoryBanner from "../CategoryBanner/CategoryBanner";
import ProductCategory from "../ProductCategory/ProductCategory";
import BestSellingProducts from "../BestSellingProducts/BestSellingProducts";
import CoffeeClub from "../CoffeeClub/CoffeeClub";
import LastBlogs from "../LastBlogs/LastBlogs";
import ContentUs from "../ContentUs/ContentUs";
import Services from "../Services/Services";

export default function Main() {
  return (
    <main>
      <section className="home relative bg-home-mobile h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
        <div className="container relative flex h-full overflow-y-hidden sm:h-auto items-center justify-end md:min-h-screen ">
          <div className=" text-white">
            <h2 className="mb-0.5 font-MorabbaBold text-2xl md:mb-2 md:text-6xl/[62px]">
              قهوه عربیکا تانزانیکا
            </h2>
            <span className="block font-MorabbaLight text-xl md:text-5xl/[64px]">
              یک فنجان بالانس
            </span>
            <div className="w-[100px] h-0.5 my-3 md:my-8 bg-orange-300"></div>
            <p className="text-xs max-w-[201px]  md:max-w-[460px] md:text-xl">
              قطعانام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
              که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
          {/* circle */}
          <div className="circle circle-main circle-lg">
            <div className="circle circle-md ">
              <div className="circle circle-sm "></div>
            </div>
          </div>
        </div>

        {/* curve */}
        <svg className="hidden md:block absolute bottom-0 left-0 right-0 w-[100px] h-[22px] mx-auto text-gray-100 dark:text-zinc-800">
          <use href="#curve"></use>
        </svg>
        {/* arrow circle */}
        <div className="absolute left-0 right-0 mx-auto hidden md:flex items-center justify-center w-[30px] h-[30px] bottom-0 translate-y-2/4  border-2 rounded-full border-orange-300">
          <svg className="w-5 h-5 text-zinc-700 dark:text-white">
            <use href="#chevron-down-mini"></use>
          </svg>
        </div>
      </section>
      <section className="products pt-8 md:pt-24 lg:pt-48">
        <div className="container">
          <SectionHeader
            titleHeader="جدیدترین محصولات"
            subTitleHeader="فرآوری شده از دانه قهوه"
            desTitle="مشاهده همه محصولات"
            mobTitle="مشاهده همه "
            id="#chevron-left-mini"
          />
          {/* products grid */}
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
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
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p2.png"
                  className="w-32 md:w-auto"
                  alt="p 1"
                />
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                قهوه اسپرسو روسو
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    720,000
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
            <div className="p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-normal">
              <div className="relative mb-2 md:mb-5">
                <img
                  src="./images/products/p8.png"
                  className="w-32 md:w-auto"
                  alt="p 8"
                />
              </div>
              <h5 className="font-DanaMedium h-10 md:h-14 text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 ">
                پودر قهوه مانوکا250 گرمی
              </h5>

              <div className="flex gap-2 md:gap-2.5 items-center mt-1.5 md:mt-2.5">
                <div className=" text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-sm md:text-xl">
                    220,000
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoryBanner />
      <ProductCategory />
      <BestSellingProducts />
      <CoffeeClub />
      <LastBlogs />
      <ContentUs />
      <Services />
    </main>
  );
}
