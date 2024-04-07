import React, { useState } from "react";
import music from '../assets/music.png'
const HeroSection = () => {
  const [value, setValue] = useState("");
  return (
    <section className=" hero-section w-full" id="hero-section">
      <div className="hero-content w-full  sm:w-4/5 sm:mx-auto px-5">
        <img src={music} alt="music" className="w-[370px] h-[650px] absolute right-28 top-96 hidden lg:block"/>
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <p className="text-xl tracking-wide ">Make you day colorful with</p>
          <h1 className="text-red-500 text-5xl sm:text-6xl font-bold ">This Apllication</h1>
          <p className="text-md text-stone-400 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            repellat quam rerum doloribus sapiente magnam inventore facere
            nesciunt aliquam est?
          </p>
          <div className=" flex gap-6 flex-col sm:flex-row">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              name="email"
              placeholder="Enter you email...."
              className="w-4/5 pt-2 pb-3 sm:py-0 px-5 outline-none border-2 rounded-md focus:border-sky-400 sm:w-3/5 text-stone-800"
            />
            <button className="w-2/5 sm:w-[150px] text-white bg-red-500 rounded-md px-5 pt-2 pb-3 text-xl font-semibold ">
              Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
