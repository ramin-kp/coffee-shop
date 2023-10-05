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
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-8 md:mb[112px]  rounded-2xl">
          <div className="p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal group">
            <div className="relative overflow-hidden rounded-2xl rounded-bl-4xl">
              <img src="./images/blogs/blog-1.png" className="" alt="blogs" />
              <div className="absolute hidden invisible opacity-0 md:flex-center group-hover:opacity-100 group-hover:visible inset-0  bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75 cursor-pointer">
                <svg className="w-[138px] h-[54px] text-amber-900">
                  <use href="#log-type"></use>
                </svg>
              </div>
            </div>
            <div className="flex justify-between items-start mt-4">
              <div className="w-[193px] h-[51px] text-zinc-700 dark:text-white font-DanaMedium text-sm md:text-lg line-clamp-2">
                <Link>راهنمای آموزش فوم‌گیری شیر بدون دستگاه اسپرسو</Link>
              </div>
              <div className="flex gap-5">
                <div className="w-px h-[61px] bg-gray-200 dark:bg-white/10"></div>
                <div className="flex flex-col pl-4 -mt-1 text-sm text-teal-600 dark:text-emerald-500">
                  <span className="font-DanaBold text-2xl">21</span>
                  <span>مرداد</span>
                  <span>1042</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
