import React from "react";
import { Link } from "react-router-dom";

export default function CoffeeClub() {
  return (
    <section className="mb-8 md:mb-20">
      <div className="container">
        <div className="flex gap-x-6 items-center h-36 px-3 md:px-11 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl">
          <div className="flex items-center gap-3 md:gap-6">
            <img
              src="./images/club/diamond.png"
              className="w-[87px] md:w-[110px]"
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
          <div className="flex justify-between items-center">
            <div className="flex gap-2 md:gap-5">
              <div className="w-[98px] h-[98px] pt-5 bg-white text-emerald-600 text-center rounded-2xl">
                <svg className="w-12 h-12 pb-1 mx-auto">
                  <use href="#activity"></use>
                </svg>
                <span className="text-xs md:text-base mt-1 md:mt-1.5">
                  چرخ و بخت
                </span>
              </div>
              <div className="w-[98px] h-[98px] pt-5 bg-white text-emerald-600 text-center rounded-2xl">
                <svg className="w-12 h-12 pb-1 mx-auto">
                  <use href="#discovery"></use>
                </svg>
                <span className="text-xs md:text-base mt-1 md:mt-1.5">
                  ماموریت ها
                </span>
              </div>

              <div className="w-[98px] h-[98px] pt-5 bg-white text-emerald-600 text-center rounded-2xl">
                <svg className="w-12 h-12 pb-1 mx-auto">
                  <use href="#ticket-star"></use>
                </svg>
                <span className="text-xs md:text-base mt-1 md:mt-1.5">
                  جایزه ها
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span>524</span>
              <span>امتیاز شما</span>
              <Link className="flex items-center">
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
