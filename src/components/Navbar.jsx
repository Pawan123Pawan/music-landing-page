import React, { useEffect, useState } from "react";
import MyDrawer from "./Drawer";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [endpoint, setEndPoint] = useState("home-section");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handlePathChange = () => {
      setEndPoint(window.location.href.split("#")[1]);
    };

    window.addEventListener("hashchange", handlePathChange);
    return () => {
      window.removeEventListener("hashchange", handlePathChange);
    };
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-center absolute navbar"></div>

      <div
        className={`w-full nav-text z-50  ${
          isSticky && "bg-slate-900 text-stone-300 transition-all delay-100"
        }`}
      >
        <div className="hidden lg:block">
          <div
            className=" w-full lg:w-[90%] xl:w-4/5 mx-auto flex h-20 items-center mb-1
      "
          >
            <a href="/">
              <div className="flex items-center w-[40%]">
                <img
                  src="https://www.svgrepo.com/show/499962/music.svg"
                  className="h-6 mr-3 sm:h-9"
                  alt="Landwind Logo"
                />
                <h1 className="text-3xl font-serif font-bold text-red-500 ml-[-10px]">
                  Music<span className="text-4xl text-indigo-500">.</span>
                  <span className="  text-stone-700">Hub</span>
                </h1>
              </div>
            </a>
            <div className="w-full flex justify-end md:me-12">
              <ul className="flex items-center text-xl font-semibold opacity-80 gap-4">
                <li
                  className={`${endpoint === "hero-section" && "text-red-500"}`}
                >
                  <a href="/#hero-section">Home</a>
                </li>
                <li className={`${endpoint === "footer" && "text-red-500"}`}>
                  <a href="/#footer">Page</a>
                </li>
                <li className={`${endpoint === "features" && "text-red-500"}`}>
                  <a href="/#features">Features</a>
                </li>
                <li
                  className={`${
                    endpoint === "how-it's-works" && "text-red-500"
                  }`}
                >
                  <a href="/#how-it's-works">How it Works</a>
                </li>
                <li
                  className={`${
                    endpoint === "app-screenshot" && "text-red-500"
                  }`}
                >
                  <a href="/#app-screenshot">Screenshot</a>
                </li>
                <li
                  className={`${
                    endpoint === "membership-pricing" && "text-red-500"
                  }`}
                >
                  <a href="/#membership-pricing">Pricing</a>
                </li>
                <li className="flex items-center justify-center">
                  <button className="text-white bg-red-500 rounded-md px-5 pt-2 pb-3 ">
                    Dounload
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* block navber menu */}
        <div className="lg:hidden block">
          <div className="flex justify-between px-6 pt-4 pb-5">
            <a href="/">
              <div className="flex items-center w-[40%]">
                <img
                  src="https://www.svgrepo.com/show/499962/music.svg"
                  className="h-6 mr-3 sm:h-9"
                  alt="Landwind Logo"
                />
                <h1 className="text-3xl font-serif font-bold text-red-500 ml-[-10px]">
                  Music<span className="text-4xl text-indigo-500">.</span>
                  <span className="  text-stone-700">Hub</span>
                </h1>
              </div>
            </a>

            <div>
              <MyDrawer endpoint={endpoint} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
