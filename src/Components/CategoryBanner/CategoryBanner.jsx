import React from "react";
import { Link } from "react-router-dom";

export default function CategoryBanner() {
  return (
    <section>
      <div className="container grid gap-5 grid-cols-1 md:grid-cols-2 mt-8 mb-10 md:my-20 text-white">
        <Link
          to="#"
          className="category-banner--item1 flex flex-col justify-center h-[142px] md:h-[248px] pr-7 md:pr-12 rounded-2xl bg-zinc-700"
        >
          <span className="mb-7 font-DanaBold text-2xl/6 md:text-4xl/6">
            انواع قهوه
          </span>
          <span className="md:text-xl/6">ترکیبی و پررو</span>
        </Link>

        <Link
          to="#"
          className="category-banner--item2 flex flex-col justify-center h-[142px] md:h-[248px]  pr-7 md:pr-12 rounded-2xl bg-zinc-700"
        >
          <span className="mb-7 font-DanaBold text-2xl/6 md:text-4xl/6">
            پودر های فوری
          </span>
          <span className="md:text-xl/6">نسکافه ، هات چاکلت ،ماسالا</span>
        </Link>
      </div>
    </section>
  );
}
