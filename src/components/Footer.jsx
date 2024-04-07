import React, { useState } from "react";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";

const Footer = () => {
  const [value, setValue] = useState("");
  return (
    <section className="w-full relative" id="footer">
      <div className="w-full ">
        <div className="footer bg-slate-900 "></div>
      </div>
      <div className="w-full absolute top-24">
        <div className="w-full md:w-4/5 mx-auto z-20 px-8 md:px-0">
          <div className="flex flex-col md:items-center">
            <h1 className="text-5xl text-red-500 font-bold">
              Subscribe to our Newseletter
            </h1>
            <div className="h-1 bg-white w-3/5 lg:w-40 rounded my-5"></div>
            <p className="md:text-center text-lg opacity-70 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              exercitationem rerum id aliquam <br className="hidden lg:block" />{" "}
              veniam ut magni dolore perferendis molestiae maiores.
            </p>
          </div>

          <div className=" flex gap-14 justify-center w-full md:w-4/5 mx-auto my-12">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              name="email"
              placeholder="Enter you email...."
              className="px-5 outline-none border-2 rounded-md focus:border-sky-400 w-3/5 text-stone-800"
            />
            <button className="text-white bg-red-500 rounded-md px-5 pt-2 pb-3 text-xl font-semibold hover:opacity-70 ">
              Subscribe
            </button>
          </div>

          <div className="mt-16 flex flex-col md:flex-row flex-wrap gap-7">
            <div className="w-[270px]">
              <h1 className="text-xl text-red-500 capitalize font-bold">
                Our Office
              </h1>
              <p className="text-md opacity-70 text-white mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, accusamus.
              </p>
            </div>
            <div className="w-[270px]">
              <h1 className="text-xl text-red-500 capitalize font-bold">
                Contact info
              </h1>
              <p className="text-md opacity-70 text-white mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, accusamus.
              </p>
            </div>
            <div className="w-[270px]">
              <div className="text-xl text-white capitalize font-bold opacity-70 flex items-center gap-3 border-2 border-red-500 rounded-md px-5 py-2 cursor-pointer">
                download app from{" "}
                <span>
                  <TfiMicrosoftAlt />
                </span>
              </div>
              <p className="text-lg opacity-70 text-white mt-2 flex items-center">
                Follow us on :{" "}
                <span className="ml-3 cursor-pointer flex text-xl text-red-500 gap-4">
                  <GrInstagram /> <FaFacebookF /> <FaTwitter />{" "}
                </span>
              </p>
            </div>
            <div className="w-[270px]">
              <div className="text-xl text-white capitalize font-bold opacity-70 flex items-center gap-3 border-2 border-red-500 rounded-md px-5 py-2 cursor-pointer">
                download app from{" "}
                <span>
                  <IoLogoApple />
                </span>
              </div>
              <p className="text-lg opacity-70 text-white mt-2 flex items-center">
                Support : 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 sm:px-0 w-full bg-red-500 py-5 text-white flex items-center justify-center text-md font-semibold">
        &copy; Copyrights musicapp_Designs All rights Reserved by Pawan Kumar{" "}
        <span className="text-slate-700 mx-1">
          {" "}
          <FaMusic />
        </span>
        !!!
      </div>
    </section>
  );
};

export default Footer;
