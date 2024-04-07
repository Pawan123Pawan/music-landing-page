import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { TfiComments } from "react-icons/tfi";
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { IoSettingsSharp } from "react-icons/io5";
import { PiLeafFill } from "react-icons/pi";

const ReviewSection = () => {
  return (
    <section className="relative" id="features">
      <div className=" review-section w-full  md:h-[200px] lg:h-[400px] absolute"></div>
      <div className="review-content w-full ">
        <div className="w-full md:w-4/5 md:mx-auto flex flex-wrap   justify-center lg:justify-between gap-5">
          <div className="border-2 flex flex-col w-[300px] sm:w-[250px] shadow-sm items-center p-6 gap-2 rounded-lg">
            <div className="text-6xl text-stone-900">
              <FaUserGroup />
            </div>
            <h1 className="text-red-500 text-3xl font-bold tracking-wide">
              8,756+
            </h1>
            <p className="text-xl font-semibold text-stone-400">Users</p>
          </div>
          <div className="border-2 flex flex-col w-[300px] sm:w-[250px] shadow-sm items-center p-6 gap-2 rounded-lg">
            <div className="text-6xl text-stone-900">
              <FaDownload />
            </div>
            <h1 className="text-red-500 text-3xl font-bold tracking-wide">
              5,500+
            </h1>
            <p className="text-xl font-semibold text-stone-400">Downloads</p>
          </div>
          <div className="border-2 flex flex-col w-[300px] sm:w-[250px] shadow-sm items-center p-6 gap-2 rounded-lg">
            <div className="text-6xl text-stone-900">
              <TfiComments />
            </div>
            <h1 className="text-red-500 text-3xl font-bold tracking-wide">
              3,756+
            </h1>
            <p className="text-xl font-semibold text-stone-400">Reviews</p>
          </div>
          <div className="border-2 flex flex-col w-[300px] sm:w-[250px] shadow-sm items-center p-6 gap-2 rounded-lg">
            <div className="text-6xl text-stone-900">
              <AiFillLike />
            </div>
            <h1 className="text-red-500 text-3xl font-bold tracking-wide">
              6,756+
            </h1>
            <p className="text-xl font-semibold text-stone-400">Likes</p>
          </div>

          {/* App features.......... */}

          <div className="mt-28 sm:w-full w-4/5  mx-auto">
            <div className="flex flex-col items-center ">
              <h1 className="text-5xl text-stone-800 font-bold">
                Awesome Apps Features
              </h1>
              <div className="h-1 bg-red-400 w-40 rounded my-5"></div>
              <p className="text-center text-lg opacity-85">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                exercitationem rerum id aliquam <br className="hidden lg:block" /> veniam ut magni dolore
                perferendis molestiae maiores.
              </p>
            </div>
            <div className="mt-16 flex sm:flex-col md:flex-row gap-5 items-center sm:justify-around z-30 flex-wrap w-4/5 mx-auto sm:w-full">
              <div className="border-2 flex flex-col w-[350px] shadow-md items-center px-3 py-10 gap-3 rounded-lg">
                <div className="text-6xl text-stone-900">
                  <PiLeafFill />
                </div>
                <h1 className="text-red-500 text-2xl font-bold tracking-wide">
                  CREATIVE DESIGN
                </h1>
                <p className="text-lg opacity-80 text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, doloremque?
                </p>
              </div>
              <div className="border-2 flex flex-col w-[350px] shadow-md items-center px-3 py-10 gap-3 rounded-lg">
                <div className="text-6xl text-stone-900">
                  <FcLike />
                </div>
                <h1 className="text-stone-900 text-2xl font-bold tracking-wide">
                  LOVELY APP
                </h1>
                <p className="text-lg opacity-80 text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, doloremque?
                </p>
              </div>
              <div className="border-2 flex flex-col w-[350px] shadow-md items-center px-3 py-10 gap-3 rounded-lg">
                <div className="text-6xl text-stone-900">
                  <IoSettingsSharp />
                </div>
                <h1 className="text-red-500 text-2xl font-bold tracking-wide">
                  EASY CUSTOMIZE
                </h1>
                <p className="text-lg opacity-80 text-center ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, doloremque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
