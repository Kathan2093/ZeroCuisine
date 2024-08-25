import React from "react";
import { Link } from "react-router-dom";
import instagram from "../images/Instagram.png";
import X from "../images/TwitterX.png";
import Telegram from "../images/Telegram.png";

export default function Footer() {
  return (
    <div className="w-full bg-[#E9F1F7] relative overflow-hidden">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 538"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-0"
        preserveAspectRatio="none"
      >
        <path
          d="M0 152.561C0 101.759 46.7376 63.8228 96.4541 74.2717L119.011 79.0124C137.413 82.8801 156.59 80.1414 173.175 71.2773L287.308 10.2748C308.902 -1.26651 334.591 -2.28407 357.03 7.51307L500.844 70.3053C522.21 79.6338 546.581 79.1784 567.583 69.0583L687.585 11.2339C712.418 -0.732354 741.662 0.92929 764.98 15.6314L838 61.6714C861.056 76.2083 889.927 78.0065 914.609 66.4428L1037.15 9.03183C1060.02 -1.68585 1086.62 -0.968879 1108.88 10.9658L1223.19 72.2376C1238.64 80.5163 1256.37 83.4949 1273.67 80.7158L1347.31 68.8876C1395.93 61.0779 1440 98.6306 1440 147.875V538H0V152.561Z"
          fill="#006494"
          fillOpacity="0.77"
        />
      </svg>
      <div className="flex flex-col md:flex-row items-center justify-between absolute inset-0 z-10 px-5 sm:px-7 md:px-10">
        <div className="relative h-[60px] sm:h-[80px] md:h-[100px]">
          <div className="absolute top-1 sm:-top-2 left-2 sm:-left-3 font-playwrite font-normal text-black text-[20px] sm:text-[25px] md:text-[50px]">
            Zero
          </div>
          <div className="absolute top-[22px] sm:top-[28px] md:top-[34px] left-[25px] sm:left-[30px] md:left-[35px] font-playwrite font-normal text-black text-[20px] sm:text-[25px] md:text-[50px]">
            Cuisine
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 mt-6 md:mt-0">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <Link to="/" className="font-space_Grotesk_regular">
              Home
            </Link>
            <Link to="/About-us" className="font-space_Grotesk_regular">
              About Us
            </Link>
            <Link to="/How-Work" className="font-space_Grotesk_regular">
              How It Works
            </Link>
            <Link to="/Reuse" className="font-space_Grotesk_regular">
              Why Reuse?
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <Link
              to="/Zero-Cuisine-Work"
              className="font-space_Grotesk_regular"
            >
              Zero Cuisine At Work
            </Link>
            <Link to="/Rewards-Points" className="font-space_Grotesk_regular">
              Rewards Points
            </Link>
            <Link
              to="/Restaurant-Partners"
              className="font-space_Grotesk_regular"
            >
              For Restaurant Partners
            </Link>
            <Link to="/Shop-Reusable" className="font-space_Grotesk_regular">
              Shop Reusable
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-0">
          <div className="flex flex-row md:flex-col gap-3 justify-center">
            <img
              src={instagram}
              alt="Instagram"
              className="h-8 w-8 cursor-pointer"
            />
            <img src={X} alt="X" className="h-8 w-8 cursor-pointer" />
            <img
              src={Telegram}
              alt="Telegram"
              className="h-8 w-8 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="text-lg font-space_Grotesk_regular">F</p>
            <p className="text-lg font-space_Grotesk_regular">O</p>
            <p className="text-lg font-space_Grotesk_regular">L</p>
            <p className="text-lg font-space_Grotesk_regular">L</p>
            <p className="text-lg font-space_Grotesk_regular">O</p>
            <p className="text-lg font-space_Grotesk_regular">W</p>
            <p className="text-lg font-space_Grotesk_regular"> </p>
            <p className="text-lg font-space_Grotesk_regular">U</p>
            <p className="text-lg font-space_Grotesk_regular">S</p>
          </div>
        </div>
      </div>
    </div>
  );
}
