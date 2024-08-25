import React from "react";
import LogIn from "../images/Login-image-background.png";
import Close from "../images/Close.png";

export default function Login({ onClose, userLogin }) {
  const LoginHandler = () => {
    onClose();
    userLogin(true);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="w-full max-w-sm lg:max-w-md bg-[#e9f1f7] p-6 lg:p-8 rounded-3xl shadow-lg  bg-cover bg-center"
        style={{ backgroundImage: `url(${LogIn})` }}
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
            Log In
          </h1>
          <p className="text-base lg:text-lg font-nunito text-black tracking-widest">
            Welcome Back..
          </p>
          <div className="w-16 lg:w-20 h-1 bg-fuchsia-950 rounded-md mx-auto mt-2"></div>
        </div>

        <div className="mb-4 lg:mb-6">
          <label
            htmlFor="email"
            className="block text-black text-sm lg:text-base font-semibold font-nunito mb-1"
          >
            Email
          </label>
          <input
            id="email"
            className="w-full h-10 lg:h-12 bg-slate-100 rounded border-2 border-[#5A0B4D] px-3 lg:px-4 text-sm lg:text-base text-fuchsia-950/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-950"
            type="email"
            placeholder="Enter email"
            aria-label="Email"
          />
        </div>

        <div className="mb-4 lg:mb-6">
          <label
            htmlFor="password"
            className="block text-black text-sm lg:text-base font-semibold font-nunito mb-1"
          >
            Password
          </label>
          <input
            id="password"
            className="w-full h-10 lg:h-12 bg-slate-100 rounded border-2 border-[#5A0B4D] px-3 lg:px-4 text-sm lg:text-base text-fuchsia-950/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-950"
            type="password"
            placeholder="Enter password"
            aria-label="Password"
          />
        </div>

        <div className="text-center mb-4 lg:mb-6">
          <button
            onClick={LoginHandler}
            className="w-28 lg:w-32 h-10 lg:h-12 bg-fuchsia-950 rounded-3xl text-white text-base lg:text-lg font-semibold font-nunito hover:bg-fuchsia-800 transition"
          >
            Log In
          </button>
        </div>

        <div className="text-center">
          <p className="text-black text-sm lg:text-base font-light font-nunito tracking-widest">
            Don’t have an account?
          </p>
          <p className="text-blue-600 text-sm lg:text-base font-light font-nunito tracking-widest cursor-pointer hover:text-blue-500 transition">
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
}
