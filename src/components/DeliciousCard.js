import React from "react";
import circle from "../images/circle.png";
import buy from "../images/Buy.png";

export default function DeliciousCard({ dish }) {
  return (
    <div className="relative w-[450px] h-[450px]">
      <div className="flex content-center">
        <img
          src={dish.image}
          alt={dish.Hading}
          className="absolute -top-32 left-6 w-[250px] h-[250px] z-10 flex"
        />
      </div>

      <svg
        width="290"
        height="309"
        viewBox="0 0 298 309"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <path
          d="M0 20C0 8.95431 8.9543 0 20 0H278C289.046 0 298 8.95431 298 20V154.5V195.75V216.375V217C298 228.046 289.046 237 278 237H260.75H243.5C232.454 237 223.5 245.954 223.5 257V273V290.375C223.5 300.661 215.161 309 204.875 309H186.25H149H20C8.9543 309 0 300.046 0 289V20Z"
          fill="white"
        />
      </svg>
      <div className="flex flex-col absolute gap-2 top-32 px-3">
        <h2 className="font-fira_sans_medium text-2xl">{dish.Hading}</h2>
        <p className="w-72 pr-1 font-fira_sans ">{dish.text}</p>
        <h2 className="font-fira_sans_regular text-xl">{dish.price}</h2>
      </div>

      <img
        src={circle}
        alt="circle"
        className="w-16 h-16 absolute bottom-[145px] right-[155px] cursor-pointer"
      />
      <img
        src={buy}
        alt="buy"
        className="w-10 h-10 absolute bottom-[155px] right-[167px] cursor-pointer"
      />
    </div>
  );
}
