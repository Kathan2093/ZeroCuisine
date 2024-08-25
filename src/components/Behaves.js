import React from "react";
import plus from "../images/Plus.png";
import upper from "../images/uppar.png";
import lower from "../images/lower.png";
import veg from "../images/sign-up-image.png";

export default function Behaves() {
  return (
    <div className="w-screen min-h-screen  bg-[#E9F1F7] flex flex-col items-center justify-center relative">
      <div className="text-center mb-8 pt-24 md:pt-0">
        <h1 className="font-space_Grotesk text-4xl ">How It Behaves</h1>
        <div className="w-20 h-0.5 bg-[#edae49] mx-auto mt-2"></div>
      </div>
      <img
        src={upper}
        alt="upper"
        className="hidden md:block absolute -top-[15%] right-0 h-72 w-h-72"
      />
      <img
        src={lower}
        alt="lower"
        className="hidden md:block absolute -top-[5%] right-0 h-72 w-h-72"
      />
      <div className="w-[70%] flex flex-col gap-3 items-center justify-center">
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p className="font-space_Grotesk text-sm md:text-xl">
            How our point system works ?
          </p>
          <img
            src={plus}
            alt="plus"
            className="cursor-pointer h-8 w-8 md:h-10 md:w-10"
          />
        </div>
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p className="font-space_Grotesk text-sm md:text-xl">
            How our point system works ?
          </p>
          <img
            src={plus}
            alt="plus"
            className="cursor-pointer h-8 w-8 md:h-10 md:w-10"
          />
        </div>
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p className="font-space_Grotesk text-sm md:text-xl">
            How our point system works ?
          </p>
          <img
            src={plus}
            alt="plus"
            className="cursor-pointer h-8 w-8 md:h-10 md:w-10"
          />
        </div>
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p className="font-space_Grotesk text-sm md:text-xl">
            How our point system works ?
          </p>
          <img
            src={plus}
            alt="plus"
            className="cursor-pointer h-8 w-8 md:h-10 md:w-10"
          />
        </div>
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p className="font-space_Grotesk text-sm md:text-xl">
            How our point system works ?
          </p>
          <img
            src={plus}
            alt="plus"
            className="cursor-pointer h-8 w-8 md:h-10 md:w-10"
          />
        </div>
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p className="font-space_Grotesk text-sm md:text-xl">
            How our point system works ?
          </p>
          <img
            src={plus}
            alt="plus"
            className=" cursor-pointer h-8 w-8 md:h-10 md:w-10"
          />
        </div>
        {/* <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p>How our point system works ?</p>
          <img src={plus} alt="plus" className="cursor-pointer h-10 w-10" />
        </div>
        <div className="w-[70%] h-12 flex items-center justify-between px-3 border border-[#edae49]">
          <p>How our point system works ?</p>
          <img src={plus} alt="plus" className="cursor-pointer h-10 w-10" />
        </div> */}
      </div>
      <img
        src={veg}
        alt="veg"
        className="hidden md:block z-30 absolute left-0 -bottom-[20%] h-80 w-80"
      />
    </div>
  );
}
