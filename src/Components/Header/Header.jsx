import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mod, setMod] = useState(localStorage.getItem("theme") === "light");
  useEffect(() => {
    toggleDarkMod();
  }, [mod]);
  const toggleDarkMod = () => {
    if (!mod) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <header className="fixed top-9 left-0 right-0 flex items-center w-[90%] h-24 px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
      <div className="flex items-center justify-between w-full">
        <nav className="flex h-14 gap-x-6">
          <div>
            <Link to="/">
              <img
                className="w-14 h-14"
                src="/images/svgs/app-logo.svg"
                alt="goldenLog"
              />
            </Link>
          </div>
          <ul className="flex items- h-full leading-[56px]  gap-x-9 text-gray-300 text-xl tracking-tightest child:h-full">
            <li className="font-DanaMedium text-orange-200">
              <Link to="#">صفحه اصلی</Link>
            </li>
            <li className="relative group">
              <Link
                to="#"
                className="group-hover:text-orange-300 transition-colors"
              >
                فروشگاه
              </Link>
              <div className="absolute top-full right-0 w-52 p-6 space-y-4  opacity-0 invisible bg-white text-zinc-700 text-base tracking-normal border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700  transition-all group-hover:opacity-100 group-hover:visible dark:text-white child:transition-colors child-hover:text-orange-300 child:w-[100px] child:inline-block ">
                <Link to="#">قهوه ترک</Link>

                <Link to="#">قهوه اسپرسو</Link>

                <Link to="#">قهوه فوری</Link>

                <Link to="#">قهوه فرانسه</Link>

                <Link to="#">کپسول اسپرسو</Link>

                <Link to="#">لوازم جانبی و تجهیزات</Link>
              </div>
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
          <div className="flex items-center gap-x-5">
            <div className="py-3">
              <div className="relative group">
                <svg className=" w-8 h-8 cursor-pointer">
                  <use href="#shoping-card"></use>
                </svg>
                <div className="absolute top-full left-0 border-t-[3px] invisible opacity-0 border-t-orange-300 rounded-2xl p-5 w-[400px] bg-white dark:bg-zinc-700 font-DanaMedium tracking-tighter text-xs transition-all group-hover:visible group-hover:opacity-100 ">
                  <div className="flex items-center justify-between">
                    <span className=" text-gray-300">1مورد</span>
                    <div className="flex items-center justify-between text-orange-300">
                      <Link to="/">مشاهده موارد بیشتر</Link>
                      <svg className="w-4 h-4">
                        <use href="#arrow-left"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer" id="toggle-theme">
              <div onClick={() => setMod(!mod)}>
                <svg className="inline-block dark:hidden w-8 h-8">
                  <use href="#moon"></use>
                </svg>
              </div>
              <div onClick={() => setMod(!mod)}>
                <svg className="hidden dark:inline-block w-8 h-8">
                  <use href="#sun"></use>
                </svg>
              </div>
            </div>
          </div>
          <span className="block w-px h-14 bg-white/20"></span>
          <Link className="flex gap-x-2.5" to="#">
            <svg className="w-8 h-8 rotate-180">
              <use href="#arrow-right-on-rectangle"></use>
            </svg>
            <span>ورود | ثبت‌نام</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
