import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-700">
      <svg className="hidden md:block absolute top-0 left-0 right-0 w-[100px] h-[22px] mx-auto text-gray-100 dark:text-zinc-800">
        <use href="#curve-footer"></use>
      </svg>
      <div className="absolute hidden md:flex items-center justify-center top-0 left-0 right-0 mx-auto  w-[30px] h-[30px] -translate-y-2/4  border-2 rounded-full border-orange-300 rotate-180">
        <svg className="w-5 h-5 text-zinc-700 dark:text-white ">
          <use href="#chevron-down"></use>
        </svg>
      </div>

      <div className="flex justify-between w-[95%] h-[500px] mx-auto px-4 md:px-0 py-8 md:py-11 text-gray-300">
        {/* logo footer */}
        <div>
          <div className="flex gap-5 mb-4.5 md:mb-6 mt-[62px] ">
            <svg className="w-[57px] h-[54px]">
              <use href="#logo"></use>
            </svg>
            <svg className="w-[138px] h-[54px]">
              <use href="#log-type"></use>
            </svg>
          </div>
          <p className="w-[606px] text-lg md:text-xl/[48px]">
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
          </p>
        </div>
        {/* quick access */}
        <div className="mt-10 md:mt-[26px]">
          <h1 className="mb-6 md:mt-7 font-DanaBold text-2xl text-white">
            دسترسی سریع
          </h1>
          <div className="flex flex-col flex-wrap gap-x-10 md:gap-x-[64px] gap-y-4 md:gap-y-5 h-[172px]">
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              حریم خصوصی
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              شرایط استفاده
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              پرسش های متداول
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              ضمانت نامه ها
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              عودت کالا
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              ثبت سفارش
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              فرصت های شغلی
            </Link>
            <Link className="flex gap-2 md:gap-3 items-center text-xl hover:text-orange-300 transition-colors ">
              <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
              ارتباط با ما
            </Link>
          </div>
        </div>
        {/* Contact */}
        <div className="footer__contact">
            <Link className="footer__contact-link"></Link>
            <ul className="footer__contact-list">
                <li className="footer__contact-item"></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
