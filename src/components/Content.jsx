import React from "react";
import mobile from "../assets/mobile.png";
import { MdDone } from "react-icons/md";

const Content = () => {
  return (
    <section className="myContent w-full mt-[1000px] bg-red-50 relative overflow-hidden " id="how-it's-works">
      <div className=" absolute  w-[700px] h-[700px] rounded-full bg-red-500 lg:opacity-80 -left-64 -bottom-72 opacity-60"></div>
      <div className=" absolute w-[300px] h-[300px] rounded-full bg-red-500 opacity-80 -right-44 -top-24"></div>
      <div className="w-full md:w-4/5 md:mx-auto flex flex-col lg:flex-row py-10 gap-8 items-center lg:justify-between ">
        <div className=" md:w-2/5 z-20 flex justify-center">
          <img src={mobile} alt="mobile" className="w-[340px] h-[600px] mobile-img" />
        </div>
        <div className=" w-full py-12 lg:mt-10 z-10 flex flex-col items-center">
          <div className="flex flex-col w-4/5 mx-auto sm:w-full">
            <h1 className="text-4xl text-stone-800 font-bold">
              How it's Works
            </h1>
            <div className="h-1 bg-red-400 w-28 rounded my-2"></div>
            <p className=" text-md opacity-85 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              exercitationem rerum <br className="hidden lg:block" />
              id aliquam Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
          <div className="flex mt-10 gap-6 flex-col sm:flex-row">
            <div className="flex gap-4 w-4/5 mx-auto sm:w-1/2 ">
              <div className="flex justify-center items-center w-10 h-10 p-2 bg-red-500 text-white text-3xl font-bold rounded-full opacity-85 mt-1">
                <MdDone />
              </div>
              <div>
                <h1 className="text-xl text-stone-600 font-bold capitalize">
                  Download For Free
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatum consectetur
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-4/5 mx-auto sm:w-1/2  ">
              <div className="flex justify-center items-center w-10 h-10 p-2 bg-red-500 text-white text-3xl font-bold rounded-full opacity-85 mt-1">
                <MdDone />
              </div>
              <div>
                <h1 className="text-xl text-stone-600 font-bold capitalize">
                  Select Memberships
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatum consectetur
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-10 gap-6 flex-col sm:flex-row">
            <div className="flex gap-4 w-4/5 mx-auto sm:w-1/2  ">
              <div className="flex justify-center items-center w-10 h-10 p-2 bg-red-500 text-white text-3xl font-bold rounded-full opacity-85 mt-1">
                <MdDone />
              </div>
              <div>
                <h1 className="text-xl text-stone-600 font-bold capitalize">
                  Login your Account
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatum consectetur
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-4/5 mx-auto sm:w-1/2  ">
              <div className="flex justify-center items-center w-10 h-10 p-2 bg-red-500 text-white text-3xl font-bold rounded-full opacity-85 mt-1">
                <MdDone />
              </div>
              <div>
                <h1 className="text-xl text-stone-600 font-bold capitalize">
                  enjoy this app
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  voluptatum consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
