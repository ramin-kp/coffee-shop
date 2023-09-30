import React from "react";
import { Link } from "react-router-dom";

export default function ProductCategory() {
  return (
    <section className="mb-10 md:mb-40">
      <div className="container">
        <div className="flex gap-x-[29px] gap-y-6 md:gap-[62px] items-center justify-center flex-wrap">
          <div className="w-25 md:w-50 text-center">
            <Link>
              <img src="/images/categories/category1.png" alt="c 1" />
            </Link>
            <span className="inline-block font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:m-2.5">
              قهوه دمی و اسپرسو
            </span>
          </div>
          <div className="inline-block w-25 md:w-50 text-center">
            <Link>
              <img src="/images/categories/category2.png" alt="c 1" />
            </Link>
            <span className="font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:m-2.5">
              لوازم جانبی و تجهیزات
            </span>
          </div>
          <div className="inline-block w-25 md:w-50 text-center">
            <Link>
              <img src="/images/categories/category3.png" alt="c 1" />
            </Link>
            <span className="font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:m-2.5">
              اسپرسو ساز
            </span>
          </div>
          <div className="inline-block w-25 md:w-50 text-center">
            <Link>
              <img src="/images/categories/category4.png" alt="c 1" />
            </Link>
            <span className="font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:m-2.5">
              پک تستر قهوه
            </span>
          </div>
          <div className="inline-block w-25 md:w-50 text-center">
            <Link>
              <img src="/images/categories/category5.png" alt="c 1" />
            </Link>
            <span className="font-DanaBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:m-2.5">
              قهوه ترک
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
