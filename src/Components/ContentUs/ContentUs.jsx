import React from "react";
import { Link } from "react-router-dom";

export default function ContentUs() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-5 mb-16 md:mb-28 text-zinc-700 dark:text-white">
          <img
            src="/images/contact.png"
            className="w-50 xs:w-64 md:w-[296px]"
            alt="contactUs"
          />
          <div className="">
            <div>
              <h1 className="font-MorabbaMedium text-2xl md:text-5xl">
                یکی از بهترین قهوه‌ها!
              </h1>
              <span className="mt-0.5 md:mt-1.5 font-MorabbaLight text-lg md:text-3xl/[48px]">
                کیفیت قهوه را از ما بخواهید...
              </span>
            </div>
            <div className="flex gap-2.5 my-6">
              <div className="inline-block bg-zinc-700 dark:bg-gray-400 w-1 h-1 rounded-full"></div>
              <div className="inline-block bg-zinc-700 dark:bg-gray-400 w-1 h-1 rounded-full"></div>
              <div className="inline-block bg-zinc-700 dark:bg-gray-400 w-1 h-1 rounded-full"></div>
            </div>
            <div>
              <p className="text-lg md:text-2xl text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              </p>
              <Link className="inline-flex gap-x-2 items-center w-[180px] md:w-[216px] h-[50px] md:h-[60px] px-6 mt-5 md:mt-6 text-base md:text-xl text-orange-300 tracking-tightest border md:border-2 border-orange-300 rounded-full ">
                <svg className="w-5 md:w-6 h-5 md:h-6 ">
                  <use href="#phone"></use>
                </svg>
                ثبت سفارش تلفنی
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
