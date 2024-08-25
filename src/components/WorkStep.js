import React from "react";
import Lemon from "../images/Lemon.png";

export default function WorkStep() {
  return (
    <div className="w-screen min-h-screen bg-[#E9F1F7] relative flex flex-col items-center">
      <img
        src={Lemon}
        alt="Lemon"
        className="absolute hidden md:block top-10 left-20 w-40 h-40"
      />
      <h1 className="text-center text-5xl md:text-6xl font-bold mt-10 mb-16">
        How It's Work
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-24">
        <div className="h-[320px] w-full max-w-[350px] bg-[#DAEBF8] p-8 flex flex-col gap-4 rounded-lg shadow-lg z-10">
          <h2 className="text-center font-fira_sans_medium text-2xl font-bold">
            Select Your Meal
          </h2>
          <p className="font-fira_sans text-center text-base lg:text-lg tracking-wide ">
            Search your address to see which restaurants near you have joined
            our mission to reduce packaging waste.
          </p>
        </div>
        <div className="h-[320px] w-full max-w-[350px] bg-[#DAEBF8] p-8 flex flex-col gap-4 rounded-lg shadow-lg">
          <h2 className="text-center font-fira_sans_medium text-xl md:text-2xl font-bold">
            Receive Your Order in Climate-Friendly Packaging
          </h2>
          <p className="font-fira_sans text-center text-base lg:text-lg tracking-wide">
            Reusable containers are more environmentally-friendly than
            single-use options. We're out to make reusable options more
            convenient, too.
          </p>
        </div>
        <div className="h-[320px] w-full max-w-[350px] bg-[#DAEBF8] p-8 flex flex-col gap-4 rounded-lg shadow-lg">
          <h2 className="text-center font-fira_sans_medium text-2xl font-bold">
            Return the Containers in 3 Days
          </h2>
          <p className="font-fira_sans text-center text-base lg:text-lg tracking-wide">
            Schedule a free pickup, hand them back to the courier, or drop them
            off in person at any return point.
          </p>
        </div>
      </div>
    </div>
  );
}
