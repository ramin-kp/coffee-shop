import React from "react";

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
      </div>
    </footer>
  );
}
