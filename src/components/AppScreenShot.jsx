import React from "react";
import screenshot from "../assets/screenshot.png";
import { FaPlay } from "react-icons/fa";

const AppScreenShot = () => {
  return (
    <section className="w-full mt-24" id="app-screenshot">
      <div className="w-4/5 mx-auto h-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-stone-800 font-bold">
            Apps Screenshots
          </h1>
          <div className="h-1 bg-red-400 w-40 rounded my-5"></div>
          <p className="text-center text-lg opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            exercitationem rerum id aliquam <br className="hidden lg:block" />{" "}
            veniam ut magni dolore perferendis molestiae maiores.
          </p>
        </div>
        <div className="flex justify-center w-full mt-14">
          <img
            src={screenshot}
            alt="screenshot"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="h-[300px] mt-[600px] md:mt-[900px] building flex justify-center items-center opacity-70 ">
        <div className=" opacity-100 text-white flex justify-center items-center flex-col gap-7">
          <h1 className="text-3xl text-bold">Take quik overview</h1>
          <div className="w-16 h-16 rounded-full bg-red-500 opacity-80 flex justify-center items-center cursor-pointer">
            <FaPlay />
          </div>
          <h1 className="text-3xl text-bold">off this App</h1>
        </div>
      </div>
    </section>
  );
};

export default AppScreenShot;
