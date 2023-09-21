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
    <>
      <header className="hidden fixed top-9 left-0 right-0 md:flex items-center md:w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
        <div className="flex items-center justify-between w-full">
          <nav className="flex h-14 gap-x-6">
            <div>
              <Link to="/">
                <img
                  className="w-14 h-14 shrink-0"
                  src="/images/svgs/logo.svg"
                  alt="goldenLog"
                />
              </Link>
            </div>
            <ul className="flex items- h-full leading-[56px] md:gap-x-6 lg:gap-x-9 text-gray-300 text-xl tracking-tightest child:h-full">
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
                <div className="absolute top-full right-0 w-52 p-6 space-y-4  opacity-0 invisible bg-white text-zinc-700 text-base tracking-normal border-t-[3px] border-orange-300 rounded-2xl shadow-normal dark:bg-zinc-700  transition-all delay-75 group-hover:opacity-100 group-hover:visible dark:text-white child:transition-colors child-hover:text-orange-300 child:w-[100px] child:inline-block ">
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
          <div className="flex items-center gap-x-4 lg:gap-x-10 text-orange-200 text-xl tracking-tightest">
            <div className="flex items-center gap-x-4 lg:gap-x-5 ">
              <div className="py-3">
                <div className="relative group">
                  <svg className=" w-8 h-8 cursor-pointer">
                    <use href="#shoping-card"></use>
                  </svg>
                  <div className="absolute top-full max-h-[410px] overflow-y-auto left-0 border-t-[3px] invisible opacity-0 border-t-orange-300 rounded-2xl p-5 w-[400px] bg-white dark:bg-zinc-700 shadow-normal font-DanaMedium tracking-tighter text-xs transition-all delay-75 group-hover:visible group-hover:opacity-100 ">
                    <div className="flex items-center justify-between">
                      <span className=" text-gray-300">1مورد</span>
                      <div className="flex items-center justify-between  text-orange-300">
                        <Link to="/">مشاهده موارد بیشتر</Link>
                        <svg className="w-4 h-4">
                          <use href="#arrow-left"></use>
                        </svg>
                      </div>
                    </div>
                    <div className=" pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 child:py-5">
                      <div className="flex gap-x-2">
                        <div>
                          <img
                            className="w-32 h-30"
                            src="/images/products/p1.png"
                            alt="products-img"
                          />
                        </div>

                        <div className="flex flex-col justify-between w-full">
                          <div className="font-DanaMedium text-lg text-zinc-700 dark:text-white line-clamp-2">
                            قهوه اسپرسو مانوکا 250گرمی
                          </div>
                          <div className="mt-6">
                            <div className="text-xs text-emerald-600 dark:text-emerald-500 tracking-tighter mt-5">
                              <p>14,500تومان تخفیف</p>
                            </div>
                            <div className="flex items-center text-lg text-zinc-700 dark:text-white pb-6">
                              <p className="font-DanaBold"> 175,000 </p>
                              <span className="font-Dana text-sm m-1">
                                {" "}
                                تومان{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-x-2">
                        <div>
                          <img
                            className="w-32 h-30"
                            src="/images/products/p1.png"
                            alt="products-img"
                          />
                        </div>

                        <div className="flex flex-col justify-between w-full">
                          <div className="font-DanaMedium text-lg text-zinc-700 dark:text-white line-clamp-2">
                            قهوه اسپرسو مانوکا 250گرمی
                          </div>
                          <div className="mt-6">
                            <div className="text-xs text-emerald-600 dark:text-emerald-500 tracking-tighter mt-5">
                              <p>14,500تومان تخفیف</p>
                            </div>
                            <div className="flex items-center text-lg text-zinc-700 dark:text-white pb-6">
                              <p className="font-DanaBold"> 175,000 </p>
                              <span className="font-Dana text-sm m-1">
                                {" "}
                                تومان{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-5">
                      <div>
                        <div className="font-DanaMedium text-xs tracking-tighter text-gray-300">
                          مبلغ قابل پرداخت
                        </div>
                        <div className="flex items-center text-zinc-700">
                          <span className="font-DanaBold text-base ">
                            350,000
                          </span>
                          <span className="text-sm text-z mr-1">تومان</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[144px] h-14 text-white font-Dana text-xl bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 hover:dark:bg-emerald-600 tracking-tightest rounded-xl cursor-pointer">
                        <Link>ثبت سفارش</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer"
                id="toggle-theme"
                onClick={() => setMod(!mod)}
              >
                <div>
                  <svg className="inline-block dark:hidden w-8 h-8">
                    <use href="#moon"></use>
                  </svg>
                </div>
                <div>
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
              <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
            </Link>
          </div>
        </div>
      </header>

      {/* mobile header */}
      <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700">
        {/* nav icon */}
        <div>
          <svg className="w-6 h-6 text-zinc-700 dark:text-white">
            <use href="#bars-3"></use>
          </svg>
        </div>

        {/* nav logo */}
        <div>
          <svg className="w-[100PX] h-10 text-orange-300">
            <use href="#log-type"></use>
          </svg>
        </div>

        {/* nav icon */}
        <div>
          <svg className="w-6 h-6 text-zinc-700 dark:text-white">
            <use href="#shoping-card"></use>
          </svg>
        </div>

        {/* nav header */}
        <div className="fixed top-0 bottom-0 right-0 w-64 px-4 h-screen bg-white dark:bg-zinc-700 z-20">
          {/* logo header */}
          <div className="flex justify-between pb-5 mt-3 mb-6 border-b border-gray-100 dark:border-white/10 ">
            {/* log icon */}
            <div className="flex gap-3.5">
              <svg className="w-[41px] h-10 text-orange-300">
                <use href="#logo"></use>
              </svg>
              <svg className="w-[100PX] h-10 text-orange-300">
                <use href="#log-type"></use>
              </svg>
            </div>
            <div>
              <svg className="w-6 h-6 text-zinc-600 dark:text-white">
                <use href="#x-mark"></use>
              </svg>
            </div>
          </div>
          {/* nav menu */}
          <div>
            <div className="flex items-center h-10 pr-2.5 mb-4 bg-orange-200/20 text-orange-300 rounded-md">
              <Link to="/" className="flex items-center gap-2 ">
                <svg className="w-5 h-5">
                  <use href="#home"></use>
                </svg>
                <span>صفحه اصلی</span>
              </Link>
            </div>
            <ul className="text-zinc-600 dark:text-white space-y-6 child:pr-2.5">
              <li className="flex items-center justify-between">
                <Link className="inline-flex gap-2 items-center" to="/">
                  <svg className="w-5 h-5 ">
                    <use href="#shoping-card"></use>
                  </svg>
                  <span>فروشگاه</span>
                </Link>
                <div>
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </div>
              </li>
              <li>
                <Link className="inline-flex gap-2 items-center" to="/">
                  <svg className="w-5 h-5 ">
                    <use href="#book"></use>
                  </svg>
                  <span>مقالات</span>
                </Link>
              </li>
              <li>
                <Link className="inline-flex gap-2 items-center" to="/">
                  <svg className="w-5 h-5 ">
                    <use href="#group"></use>
                  </svg>
                  <span>درباره‌ما</span>
                </Link>
              </li>
              <li>
                <Link className="inline-flex gap-2 items-center" to="/">
                  <svg className="w-5 h-5 ">
                    <use href="#about-me"></use>
                  </svg>
                  <span>تماس‌ با‌ ما</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* nav footer */}
          <div className="border-t border-gray-100 dark:border-white/10 mt-8 pt-8 pr-2.5 space-y-6 text-orange-300">
            <div>
              <Link className="inline-flex items-center gap-2">
                <svg className="w-5 h-5 rotate-180">
                  <use href="#arrow-right-on-rectangle"></use>
                </svg>
                <span>ورود | ثبت‌نام</span>
              </Link>
            </div>
            <div>
              <div onClick={() => setMod(!mod)}>
                <div className="inline-flex items-center gap-2 dark:hidden cursor-pointer">
                  <svg className="w-5 h-5">
                    <use href="#moon"></use>
                  </svg>
                  <span>تم تاریک</span>
                </div>
                <div className="hidden dark:inline-flex items-center gap-2 cursor-pointer">
                  <svg className="w-5 h-5">
                    <use href="#sun"></use>
                  </svg>
                  <span>تم روشن</span>
                </div>
              </div>
            </div>
            <div>
              <Link className="inline-flex items-center gap-2">
                <svg className="w-5 h-5">
                  <use href="#shoping-card"></use>
                </svg>
                <span>سبد خرید</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="overlay bg-black/40 fixed inset-0 w-full h-full z-10"></div> */}
    </>
  );
}
