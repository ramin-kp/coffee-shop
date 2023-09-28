import React from "react";

export default function Main() {
  return (
    <main>
      <section className="home">
        <div className="container flex md:items-center md:justify-end h-screen">
          <div className="text-white">
            <h2 className="mb-2 font-MorabbaBold text-2xl md:text-6xl">قهوه عربیکا تانزانیکا</h2>
            <span className="block font-MorabbaLight text-xl md:text-5xl">یک فنجان بالانس</span>
            <div className="w-[100px] h-0.5 my-8 bg-orange-300"></div>
            <p className="text-xs max-w-[201px]  md:max-w-[460px] md:text-xl">
              قطعانام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
