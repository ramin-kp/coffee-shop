import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastBlogs() {
  return (
    <section>
      <div className="container">
        <SectionHeader
          titleHeader="مطالب خواندنی"
          desTitle="مشاهده همه مطالب"
          mobTitle="مشاهده همه "
          id="#chevron-left-mini"
        />
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mb-8 md:mb[112px]  rounded-2xl">
          <div className="flex gap-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal group rounded-2xl">
            <div className="relative shrink-0 w-[130px] sm:w-auto h-[130px] sm:h-auto overflow-hidden rounded-2xl rounded-bl-4xl">
              <img
                src="/images/blogs/blog-3.png"
                className="h-full sm:h-auto object-cover"
                alt="blogs"
              />
              <div className="absolute hidden invisible opacity-0 md:flex-center group-hover:opacity-100 group-hover:visible inset-0  bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75 cursor-pointer">
                <svg className="w-[138px] h-[54px] text-amber-900">
                  <use href="#log-type"></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <Link className="max-w-[193px] h-7 md:h-auto m-2.5 text-zinc-700 dark:text-white text-xs md:text-sm line-clamp-2">
                راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو
              </Link>

              <div className="hidden sm:flex gap-5 pt-3">
                <div className="hidden xl:block w-px h-[61px] bg-gray-200 dark:bg-white/10"></div>
                <div className="flex flex-col ml-3 xl:ml-4 -mt-1 text-sm text-teal-600 dark:text-emerald-500 text-left">
                  <span className="font-DanaBold text-base xl:text-2xl">
                    21
                  </span>
                  <span>مرداد</span>
                  <span>1042</span>
                </div>
              </div>
              <div className="flex sm:hidden items-end justify-between w-full pb-1.5 pt-4 border-t border-gray-100 dark:border-white/10">
                <span className="text-zinc-700 dark:text-white">
                  21مرداد1402
                </span>
                <Link className="flex items-center h-5 m-1.5 pr-2.5 bg-orange-200/20 text-orange-300 rounded-md font-DanaMedium text-xs">
                  مطالعه
                  <svg className="w-3 h-3 mr-1 ml-2">
                    <use href="#arrow-left-mini"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal group rounded-2xl">
            <div className="relative shrink-0 w-[130px] sm:w-auto h-[130px] sm:h-auto overflow-hidden rounded-2xl rounded-bl-4xl">
              <img
                src="/images/blogs/blog-4.png"
                className="h-full sm:h-auto object-cover"
                alt="blogs"
              />
              <div className="absolute hidden invisible opacity-0 md:flex-center group-hover:opacity-100 group-hover:visible inset-0  bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75 cursor-pointer">
                <svg className="w-[138px] h-[54px] text-amber-900">
                  <use href="#log-type"></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <Link className="max-w-[193px] h-7 md:h-auto m-2.5 text-zinc-700 dark:text-white text-xs md:text-sm line-clamp-2">
                راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو
              </Link>

              <div className="hidden sm:flex gap-5 pt-3">
                <div className="hidden xl:block w-px h-[61px] bg-gray-200 dark:bg-white/10"></div>
                <div className="flex flex-col ml-3 xl:ml-4 -mt-1 text-sm text-teal-600 dark:text-emerald-500 text-left">
                  <span className="font-DanaBold text-base xl:text-2xl">
                    21
                  </span>
                  <span>مرداد</span>
                  <span>1042</span>
                </div>
              </div>
              <div className="flex sm:hidden items-end justify-between w-full pb-1.5 pt-4 border-t border-gray-100 dark:border-white/10">
                <span className="text-zinc-700 dark:text-white">
                  21مرداد1402
                </span>
                <Link className="flex items-center h-5 m-1.5 pr-2.5 bg-orange-200/20 text-orange-300 rounded-md font-DanaMedium text-xs">
                  مطالعه
                  <svg className="w-3 h-3 mr-1 ml-2">
                    <use href="#arrow-left-mini"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal group rounded-2xl">
            <div className="relative shrink-0 w-[130px] sm:w-auto h-[130px] sm:h-auto overflow-hidden rounded-2xl rounded-bl-4xl">
              <img
                src="/images/blogs/blog-1.png"
                className="h-full sm:h-auto object-cover"
                alt="blogs"
              />
              <div className="absolute hidden invisible opacity-0 md:flex-center group-hover:opacity-100 group-hover:visible inset-0  bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75 cursor-pointer">
                <svg className="w-[138px] h-[54px] text-amber-900">
                  <use href="#log-type"></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <Link className="max-w-[193px] h-7 md:h-auto m-2.5 text-zinc-700 dark:text-white text-xs md:text-sm line-clamp-2">
                راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو
              </Link>

              <div className="hidden sm:flex gap-5 pt-3">
                <div className="hidden xl:block w-px h-[61px] bg-gray-200 dark:bg-white/10"></div>
                <div className="flex flex-col ml-3 xl:ml-4 -mt-1 text-sm text-teal-600 dark:text-emerald-500 text-left">
                  <span className="font-DanaBold text-base xl:text-2xl">
                    21
                  </span>
                  <span>مرداد</span>
                  <span>1042</span>
                </div>
              </div>
              <div className="flex sm:hidden items-end justify-between w-full pb-1.5 pt-4 border-t border-gray-100 dark:border-white/10">
                <span className="text-zinc-700 dark:text-white">
                  21مرداد1402
                </span>
                <Link className="flex items-center h-5 m-1.5 pr-2.5 bg-orange-200/20 text-orange-300 rounded-md font-DanaMedium text-xs">
                  مطالعه
                  <svg className="w-3 h-3 mr-1 ml-2">
                    <use href="#arrow-left-mini"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal group rounded-2xl">
            <div className="relative shrink-0 w-[130px] sm:w-auto h-[130px] sm:h-auto overflow-hidden rounded-2xl rounded-bl-4xl">
              <img
                src="/images/blogs/blog-2.png"
                className="h-full sm:h-auto object-cover"
                alt="blogs"
              />
              <div className="absolute hidden invisible opacity-0 md:flex-center group-hover:opacity-100 group-hover:visible inset-0  bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75 cursor-pointer">
                <svg className="w-[138px] h-[54px] text-amber-900">
                  <use href="#log-type"></use>
                </svg>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <Link className="max-w-[193px] h-7 md:h-auto m-2.5 text-zinc-700 dark:text-white text-xs md:text-sm line-clamp-2">
                راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو
              </Link>

              <div className="hidden sm:flex gap-5 pt-3">
                <div className="hidden xl:block w-px h-[61px] bg-gray-200 dark:bg-white/10"></div>
                <div className="flex flex-col ml-3 xl:ml-4 -mt-1 text-sm text-teal-600 dark:text-emerald-500 text-left">
                  <span className="font-DanaBold text-base xl:text-2xl">
                    21
                  </span>
                  <span>مرداد</span>
                  <span>1042</span>
                </div>
              </div>
              <div className="flex sm:hidden items-end justify-between w-full pb-1.5 pt-4 border-t border-gray-100 dark:border-white/10">
                <span className="text-zinc-700 dark:text-white">
                  21مرداد1402
                </span>
                <Link className="flex items-center h-5 m-1.5 pr-2.5 bg-orange-200/20 text-orange-300 rounded-md font-DanaMedium text-xs">
                  مطالعه
                  <svg className="w-3 h-3 mr-1 ml-2">
                    <use href="#arrow-left-mini"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
