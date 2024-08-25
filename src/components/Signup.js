import React from "react";
import SignUp from "../images/sign-up-image-background.png";
import Close from "../images/Close.png";

export default function Signup({ onClose, userLogin }) {
  const SignUpHandler = () => {
    onClose();
    userLogin(true);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="w-full max-w-sm lg:max-w-md bg-[#e9f1f7] p-6 lg:p-8 rounded-3xl shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${SignUp})` }}
      >
        <div className="text-center mb-6 lg:mb-8 relative">
          <div className="relative cursor-pointer" onClick={onClose}>
            <img
              className="absolute top-0 right-0 h-6 w-6 lg:h-8 lg:w-8"
              alt="Close"
              src={Close}
            />
          </div>
          <h1 className="text-2xl lg:text-3xl font-playwrite text-black mb-2">
            Sign Up
          </h1>
          <p className="text-base lg:text-lg font-nunito text-black tracking-wide lg:tracking-wider">
            Welcome to our site....
          </p>
          <div className="w-16 lg:w-20 h-1 bg-[#5a0b4d] rounded-md mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col gap-y-3 lg:gap-y-4">
          <div className="flex flex-col">
            <label className="block text-black font-semibold font-nunito text-sm lg:text-base mb-1">
              Name
            </label>
            <input
              className="w-full h-10 lg:h-12 bg-[#e9f1f7] rounded-md border-2 border-[#5a0b4d] px-3 lg:px-4 text-sm lg:text-base text-[#5a0b4d]/50"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black font-semibold font-nunito text-sm lg:text-base mb-1">
              Email
            </label>
            <input
              className="w-full h-10 lg:h-12 bg-[#e9f1f7] rounded-md border-2 border-[#5a0b4d] px-3 lg:px-4 text-sm lg:text-base text-[#5a0b4d]/50"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black font-semibold font-nunito text-sm lg:text-base mb-1">
              New Password
            </label>
            <input
              className="w-full h-10 lg:h-12 bg-[#e9f1f7] rounded-md border-2 border-[#5a0b4d] px-3 lg:px-4 text-sm lg:text-base text-[#5a0b4d]/50"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-black font-semibold font-nunito text-sm lg:text-base mb-1">
              Confirm Password
            </label>
            <input
              className="w-full h-10 lg:h-12 bg-[#e9f1f7] rounded-md border-2 border-[#5a0b4d] px-3 lg:px-4 text-sm lg:text-base text-[#5a0b4d]/50"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="text-center mt-4">
            <button
              onClick={SignUpHandler}
              className="w-28 lg:w-32 h-10 lg:h-12 bg-[#5a0b4d] rounded-full text-white text-base lg:text-lg font-semibold font-nunito"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-black text-sm lg:text-base font-light font-nunito tracking-wide lg:tracking-wider">
              If you have an account?{" "}
            </span>
            <span className="text-[#2373ff] text-sm lg:text-base font-light font-nunito tracking-wide lg:tracking-wider cursor-pointer">
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
