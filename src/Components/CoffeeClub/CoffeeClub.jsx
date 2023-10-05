import React from "react";
import { Link } from "react-router-dom";

export default function CoffeeClub() {
  return (
    <section className="mb-8 md:mb-20">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap xl:flex-nowrap gap-x-6 gap-y-6 lg:gap-y-0 lg:h-36 pt-8 lg:pt-0 px-3 xl:px-11 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl">
          <div className="flex md:shrink-0 items-center gap-3 md:gap-6">
            <img
              src="./images/club/diamond.png"
              className="w-[75px] md:w-[110px]"
              alt="coffee club"
            />
            <div>
              <h4 className="font-MorabbaBold text-2xl md:text-5xl ">
                کافی کلاب
              </h4>
              <span className="font-MorabbaLight text-lg md:text-2xl mt-2">
                میدونستی میتونی با امتیاز هات قهوه بگیری ؟
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mb-3 xl:mr-16">
            <div className="flex gap-2 xl:gap-5">
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] pt-1 md:pt-5 bg-white text-emerald-600 text-center rounded-2xl">
                <svg className="w-12 h-12 pb-1 mx-auto">
                  <use href="#activity"></use>
                </svg>
                <span className="text-xs md:text-base mt-1 md:mt-1.5">
                  چرخ و بخت
                </span>
              </div>
              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] pt-1 md:pt-5 bg-white text-emerald-600 text-center rounded-2xl">
                <svg className="w-12 h-12 pb-1 mx-auto">
                  <use href="#discovery"></use>
                </svg>
                <span className="text-xs md:text-base mt-1 md:mt-1.5">
                  ماموریت ها
                </span>
              </div>

              <div className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] pt-1 md:pt-5 bg-white text-emerald-600 text-center rounded-2xl">
                <svg className="w-12 h-12 pb-1 mx-auto">
                  <use href="#ticket-star"></use>
                </svg>
                <span className="text-xs md:text-base mt-1 md:mt-1.5">
                  جایزه ها
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mr-2.5">
                <span className="inline-block font-DanaBold text-2xl md:text-3xl mb-1">
                  524
                </span>
                <span className="inline-block text-xs md:text-sm mb-1 md:mb-2">
                  امتیاز شما
                </span>
              </div>
              <Link className="flex items-center justify-center w0[90px] md:w-[110px] h-[24px] md:h-8 pr-0.5  bg-gradient-to-r from-orange-200 to-orange-300 rounded-full">
                دریافت جایزه
                <svg className="w-5 h-5 md:w-6 md:h-6">
                  <use href="#chevron-left-mini"></use>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
