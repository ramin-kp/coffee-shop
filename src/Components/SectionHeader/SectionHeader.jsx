import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({
  titleHeader,
  subTitleHeader,
  desTitle,
  mobTitle,
  id,
  slider,
}) {
  return (
    <div className="flex items-end justify-between mb-5 md:mb-12">
      <div className="text-zinc-700 dark:text-white">
        <h3 className="section-title">{titleHeader}</h3>
        {subTitleHeader && (
          <span className="section-usb-title">{subTitleHeader}</span>
        )}
      </div>
      {id && (
        <div>
          <Link className="section-link" to="#">
            <span className="hidden md:inline-block">{desTitle}</span>
            <span className="inline-block md:hidden">{mobTitle}</span>
            <svg className="w-5 h-5">
              <use href={id}></use>
            </svg>
          </Link>
        </div>
      )}
      {slider && (
        <div className="flex gap-3 md:gap-[18px] items-center">
          <div className="flex-center w-9 md:w-10 h-9 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white hover:bg-gray-300 hover:dark:bg-white hover:dark:text-zinc-700 shadow-normal rotate-180 rounded-full transition-all cursor-pointer">
            <svg className="w-6 h-6">
              <use href="#chevron-left-mini"></use>
            </svg>
          </div>
          <div className="flex-center w-9 md:w-10 h-9 md:h-10 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white hover:bg-gray-300 hover:dark:bg-white hover:dark:text-zinc-700 shadow-normal rounded-full transition-all cursor-pointer">
            <svg className="w-6 h-6">
              <use href="#chevron-left-mini"></use>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
