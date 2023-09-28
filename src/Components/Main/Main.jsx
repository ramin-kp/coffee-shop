import React from "react";

export default function Main() {
  return (
    <main>
      <section className="home relative bg-home-mobile h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
        <div className="container relative flex h-full overflow-y-hidden sm:h-auto items-center justify-end md:min-h-screen ">
          <div className="text-white">
            <h2 className="mb-0.5 font-MorabbaBold text-2xl md:mb-2 md:text-6xl/[62px]">
              قهوه عربیکا تانزانیکا
            </h2>
            <span className="block font-MorabbaLight text-xl md:text-5xl/[64px]">
              یک فنجان بالانس
            </span>
            <div className="w-[100px] h-0.5 my-3 md:my-8 bg-orange-300"></div>
            <p className="text-xs max-w-[201px]  md:max-w-[460px] md:text-xl">
              قطعانام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است
              که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
          {/* circle */}
          <div className="circle circle-main circle-lg">
            <div className="circle circle-md ">
              <div className="circle circle-sm "></div>
            </div>
          </div>
        </div>

        {/* curve */}
        <svg className="hidden md:block absolute bottom-0 left-0 right-0 w-[100px] h-[22px] mx-auto text-gray-100 dark:text-zinc-800">
          <use href="#curve"></use>
        </svg>
        {/* arrow circle */}
        <div className="absolute left-0 right-0 mx-auto hidden md:flex items-center justify-center w-[30px] h-[30px] bottom-0 translate-y-2/4  border-2 rounded-full border-orange-300">
          <svg className="w-5 h-5 text-zinc-700 dark:text-white">
            <use href="#chevron-down-mini"></use>
          </svg>
        </div>
      </section>
      <section className="products">
        
      </section>
    </main>
  );
}
