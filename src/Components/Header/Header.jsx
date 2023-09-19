import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-9 left-0 right-0 flex items-center w-[90%] h-24 px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
      <div className="flex items-center justify-between w-full">
        <nav className="flex gap-x-6">
          <div>
            <Link to="/">
              <img
                className="w-14 h-14"
                src="/images/svgs/app-logo.svg"
                alt="goldenLog"
              />
            </Link>
          </div>
          <ul className="flex items-center gap-x-9 text-gray-300 text-xl tracking-tightest">
            <li className="font-DanaMedium text-orange-200">
              <Link to="#">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="#">فروشگاه</Link>
              <ul className="hidden">
                <li>
                  <Link to="#">قهوه ترک</Link>
                </li>
                <li>
                  <Link to="#">قهوه اسپرسو</Link>
                </li>
                <li>
                  <Link to="#">قهوه فوری</Link>
                </li>
                <li>
                  <Link to="#">قهوه فرانسه</Link>
                </li>
                <li>
                  <Link to="#">کپسول اسپرسو</Link>
                </li>
                <li>
                  <Link to="#">لوازم جانبی و تجهیزات</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">مقالات</Link>
            </li>
            <li>
              <Link to="#">درباره ما</Link>
            </li>
            <li>
              <Link to="#">تماس باما</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-10 text-orange-200 text-xl tracking-tightest">
          <div className="flex gap-x-5">
            <svg className="w-8 h-8">
              <use xlinkHref="#shoping-card"></use>
            </svg>
            <svg className="w-8 h-8">
              <use xlinkHref="#moon"></use>
            </svg>
          </div>
          <span className="block w-px h-14 bg-white/20"></span>
          <Link className="flex gap-x-2.5" to="#">
            <svg className="w-8 h-8 rotate-180">
              <use xlinkHref="#arrow-right-on-rectangle"></use>
            </svg>
            <span>ورود | ثبت‌نام</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
