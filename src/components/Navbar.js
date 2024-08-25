import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserIcon from "../images/Account.png";
import Notification from "../images/Notification.png";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default function Navbar() {
  const location = useLocation();
  const [UserIsLogin, setUserIsLogin] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const OpenLogin = () => {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const OpenSignup = () => {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
  };

  const closeSignup = () => {
    setIsSignUpOpen(false);
  };

  return (
    <nav className="bg-[#E9F1F7] h-16 md:h-20 lg:h-24 w-full flex items-center justify-between px-4 md:px-8 lg:px-16">
      <div className="relative h-[60px] sm:h-[80px] md:h-[100px] -top-px">
        <div className="absolute top-1 sm:top-2 left-2 font-playwrite font-normal text-black text-[20px] sm:text-[25px] md:text-[30px] tracking-[0] leading-[normal]">
          Zero
        </div>
        <div className="absolute top-[22px] sm:top-[28px] md:top-[34px] left-[25px] sm:left-[30px] md:left-[35px] font-playwrite font-normal text-black text-[20px] sm:text-[25px] md:text-[30px] tracking-[0] leading-[normal]">
          Cuisine
        </div>
      </div>

      <div className="flex gap-3 sm:gap-5 md:gap-7 lg:gap-10 items-center justify-center">
        <div className="border-none">
          <Link
            className={`font-nunito border-none text-xs sm:text-sm md:text-base lg:text-lg ${
              location.pathname === "/" ? "text-[#1a535c]" : "text-black"
            }`}
            to="/"
          >
            Home
          </Link>
          <div className="flex justify-center">
            <div
              className={`w-3 sm:w-4 md:w-5 h-0.5 bg-[#edae49] ${
                location.pathname === "/" ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
        <div className="border-none">
          <Link
            className={`font-nunito border-none text-xs sm:text-sm md:text-base lg:text-lg ${
              location.pathname === "/Restaurant"
                ? "text-[#1a535c]"
                : "text-black"
            }`}
            to="/Restaurant"
          >
            Restaurant
          </Link>
          <div className="flex justify-center">
            <div
              className={`w-3 sm:w-4 md:w-5 h-0.5 bg-[#edae49] ${
                location.pathname === "/Restaurant" ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
        <div className="border-none">
          <Link
            className={`font-nunito border-none text-xs sm:text-sm md:text-base lg:text-lg ${
              location.pathname === "/Rewords-Points"
                ? "text-[#1a535c]"
                : "text-black"
            }`}
            to="/Rewards-Points"
          >
            Rewards Points
          </Link>
          <div className="flex justify-center">
            <div
              className={`w-3 sm:w-4 md:w-5 h-0.5 bg-[#edae49] ${
                location.pathname === "/Rewords-Points" ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex gap-1 sm:gap-2 md:gap-4 lg:gap-6 items-center justify-center">
        {UserIsLogin && (
          <>
            <div className="cursor-pointer">
              <img
                src={Notification}
                alt="Notification"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={UserIcon}
                alt="UserIcon"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              />
            </div>
          </>
        )}

        {!UserIsLogin && (
          <>
            <div
              className="h-6 sm:h-8 md:h-10 lg:h-12 bg-[#edae49] flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-6 rounded-md cursor-pointer"
              onClick={OpenLogin}
            >
              <button className="text-custom-white font-nunito text-xs sm:text-sm md:text-base lg:text-lg">
                Log In
              </button>
            </div>
            <div
              className="h-6 sm:h-8 md:h-10 lg:h-12 bg-[#006494] flex items-center justify-center px-3 sm:px-4 md:px-5 lg:px-6 rounded-md cursor-pointer"
              onClick={OpenSignup}
            >
              <button className="text-custom-white font-nunito text-xs sm:text-sm md:text-base lg:text-lg">
                Sign Up
              </button>
            </div>
          </>
        )}
      </div>

      {isLoginOpen && <Login onClose={closeLogin} userLogin={setUserIsLogin} />}
      {isSignUpOpen && (
        <Signup onClose={closeSignup} userLogin={setUserIsLogin} />
      )}
    </nav>
  );
}
