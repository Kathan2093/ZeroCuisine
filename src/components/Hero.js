import React from "react";
import Search from "../images/Search.png";
import Location from "../images/Location.png";
import Yellow from "../images/Ellipse 9.png";
import blue from "../images/Ellipse 10.png";
import home_image from "../images/home_page_dish.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-screen bg-[#E9F1F7] h-svh">
      <div className="w-[100%] mt-28 md:mt-0 md:w-[50%] flex flex-col gap-y-7 items-center justify-center">
        <h1 className="font-space_Grotesk text-xl  sm:text-2xl md:text-3xl lg:text-5xl">
          Zero waste, full flavor.
        </h1>
        <p className="font-fira_sans text-base   sm:text-lg md:text:xl lg:text-3xl font-normal tracking-wide leading-normal">
          Find Your Restaurants....
        </p>
        <div className="flex w-[70%] gap-1 items-center justify-center ">
          <div className="w-[30%] relative flex items-center justify-center">
            <img
              src={Location}
              alt="location"
              className="absolute left-1 cursor-pointer text-[#edae49]"
            />
            <input
              type="text"
              className="w-full h-12 pl-10 rounded-lg placeholder:text-center placeholder:text-[#edae49] bg-custom-white border border-solid border-[#edae49]"
              placeholder="Location"
            ></input>
          </div>
          <div className="w-[70%] relative flex items-center justify-center">
            <img
              src={Search}
              alt="search"
              className="absolute right-1 cursor-pointer text-[#edae49]"
            />
            <input
              type="text"
              className="w-full h-12 rounded-lg placeholder:pl-2 placeholder:text-[#edae49] bg-custom-white border border-solid border-[#edae49]"
              placeholder="Discover the restaurants....."
            ></input>
          </div>
        </div>
        <div className="w-[65%] text-center ">
          <p className="sm:text-base md:text-lg lg:text-xl tracking-wide leading-wide ">
            Savor delicious, zero-waste meals with our eco-friendly delivery
            service.
          </p>
        </div>
      </div>
      <div className="relative mt-14 z-10  md:flex  md:w-[50%]  items-center justify-center">
        <div className="absolute inset-0 blur-[150px] z-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgb(237,174,73)_0deg,rgb(0,100,148)_360deg)]"></div>

        <img
          src={Yellow}
          alt="yellow"
          className="absolute z-20 -bottom-12 right-0 md:-bottom-12 md:right-[10%] h-[100px] md:h-[150px] lg:h-[200px]"
        />
        <img
          src={blue}
          alt="blue"
          className="absolute z-10 top-0 -left-4 md:top-2 md:left-[10%] h-[100px] md:h-[150px] lg:h-[200px]"
        />
        <img
          src={home_image}
          alt="home_image"
          className="relative z-10 h-[200px] w-[200px] md:h-[300px] lg:h-[450px] md:w-[300px] lg:w-[450px]"
        />
      </div>
    </div>
  );
}
