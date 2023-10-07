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
      <div className="sm:w-[95%] lg:w-[90%] mx-auto px-4 md:px-0 py-8 md:py-11 text-gray-300">
        <div className="flex justify-between flex-wrap ">
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
            <p className="xl:max-w-[606px] text-lg md:text-xl/[48px]">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
            </p>
          </div>
          {/* quick access */}
          <div className="mt-10 md:mt-[26px]">
            <h1 className="mb-6 md:mt-7 font-DanaBold text-xl md:text-2xl text-white">
              دسترسی سریع
            </h1>
            <div className="grid grid-cols-2 gap-x-10 md:gap-x-[64px] gap-y-4 md:gap-y-5 h-[172px]">
              <Link className="flex gap-2 md:gap-3 items-center text-base md:text-xl hover:text-orange-300 transition-colors ">
                <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
                حریم خصوصی
              </Link>
              <Link className="flex gap-2 md:gap-3 items-center text-base md:text-xl hover:text-orange-300 transition-colors ">
                <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
                شرایط استفاده
              </Link>
              <Link className="flex gap-2 md:gap-3 items-center text-base md:text-xl hover:text-orange-300 transition-colors ">
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
              <Link className="flex gap-2 md:gap-3 items-center text-base md:text-xl hover:text-orange-300 transition-colors ">
                <span className="w-2 h-1 md:w-2.5 rounded-full bg-current"></span>
                ارتباط با ما
              </Link>
            </div>
          </div>
          {/* Contact */}
          <div className="mt-10 md:mt-[26px]">
            <h1 className="mb-6 md:mt-7 font-DanaBold text-xl md:text-2xl text-white">
              در تماس باشیم
            </h1>
            <div className="flex gap-4 md:gap-5 flex-col text-base md:text-xl">
              <div className="flex gap-x-2 md:gap-x-3 items-center">
                <svg className="w-5 h-5 md:w-6 md:h-6">
                  <use href="#map-pin"></use>
                </svg>
                بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
              </div>
              <div className="flex gap-x-2 md:gap-x-3  mb-6 md:mb-10 font-DanaMedium">
                <Link
                  className="flex gap-x-2 md:gap-x-3 text-orange-300"
                  to="mailto:info@Coffee.com"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6">
                    <use href="#email"></use>
                  </svg>
                  info@Coffee.com
                </Link>
                <div
                  className="flex gap-x-2 md:gap-x-3"
                  to="mailto:info@Coffee.com"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6">
                    <use href="#phone"></use>
                  </svg>
                  <span>0902-123-6628</span>
                  <span>021-6789012</span>
                </div>
              </div>

              <div className="ltr-text flex-center gap-x-1.5 md:gap-x-6 font-DanaMedium text-base md:text-xl">
                <Link className="flex-center gap-x-2 flex-grow h-12 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl ">
                  @golden_coffee
                  <svg className="w-6 md:w-[38px] h-6 md:h-[38px]">
                    <use href="#telegram"></use>
                  </svg>
                </Link>
                <Link className="flex-center gap-x-2 flex-grow h-12 border text-orange-300 border-orange-200 rounded-xl">
                  @golden_coffee
                  <svg className="w-6 md:w-[38px] h-6 md:h-[38px]">
                    <use href="#instagram"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-between mt-10 md:mt-11 pt-10 md:pt-11 font-DanaMedium text-xs/5 md:text-base border-t border-t-white/10">
          <div className="flex gap-2.5 items-center ">
            <div className="flex-center w-[30px] h-[30px] border border-white/10 rounded-full">
              <div className="flex-center w-5 h-5 border border-white/20 rounded-full">
                <div className="w-2.5 h-2.5 bg-gradient-to-t from-orange-200 to-orange-300 rounded-full"></div>
              </div>
            </div>
            تمام حقوق این رابط کاربری متعلق به سبزلرن میباشد و دانشجوی این دوره
            اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
          </div>
          <span className="ltr-text mr-auto">Copyright © 2023 Golden Coffee. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
