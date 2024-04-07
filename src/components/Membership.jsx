import React from "react";

const Membership = () => {
  return (
    <section className="w-full pt-24 bg-red-50" id="membership-pricing">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl text-stone-800 font-bold">
            Membership Plans
          </h1>
          <div className="h-1 bg-red-400 w-40 rounded my-5"></div>
          <p className="text-center text-lg opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            exercitationem rerum id aliquam <br className="hidden lg:block" /> veniam ut magni dolore
            perferendis molestiae maiores.
          </p>
        </div>

        {/* pricing-table */}

        <div className="mt-14 flex flex-col md:flex-row gap-5 items-center md:justify-between">
            <Pricing gb={100} price={12} plan={"basic"} access={"lemited"}/>
            <Pricing gb={300} price={28} plan={"standerd"} access={"lemited"}/>
            <Pricing gb={500} price={55} plan={"premium"} access={"unlemited"}/>
        </div>
      </div>
      <div className="h-96"></div>
    </section>
  );
};

export default Membership;

const Pricing = ({gb, price, plan, access}) => {
  return (
    <div className="px-5 py-10 flex flex-col items-center w-[350px] bg-white border-1 rounded-md shadow-md opacity-85 ">
      <h1 className="text-stone-700 text-2xl font-bold tracking-wide uppercase">
        {plan}
      </h1>
      <h1 className="text-5xl text-red-500 my-3">${price}</h1>
      <h1 className="text-stone-600 text-xl font-bold tracking-wide uppercase mb-3">
        {access} access
      </h1>
      <div className="w-full flex flex-col items-center my-2 justify-center">
        <div className="w-full border-t-2"></div>
        <div className=" capitalize text-lg tracking-wide font-semibold text-slate-500 pt-2">
          5 sub Domain
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-2 justify-center">
        <div className="w-full border-t-2"></div>
        <div className=" capitalize text-lg tracking-wide font-semibold text-slate-500  pt-2">
          {gb} GB disk space
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-2 justify-center">
        <div className="w-full border-t-2"></div>
        <div className=" capitalize text-lg tracking-wide font-semibold text-slate-500  pt-2">
          24/7 tech support
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-2 justify-center">
        <div className="w-full border-t-2"></div>
        <div className=" capitalize text-lg tracking-wide font-semibold text-slate-500  pt-2">
          Dialy backups
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-2 justify-center">
        <div className="w-full border-t-2"></div>
        <div className=" capitalize text-lg tracking-wide font-semibold text-slate-500  pt-2">
          Phone support
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-2 justify-center">
        <div className="w-full border-t-2 mb-4"></div>
        <div className=" capitalize text-lg tracking-wide text-extrabold text-slate-600  pt-2">
          {" "}
          <button className="text-white bg-red-500 rounded-md px-8 pt-2 pb-3 font-semibold cursor-pointer hover: opacity-90 ">
            Chose Plan
          </button>
        </div>
      </div>
    </div>
  );
};
