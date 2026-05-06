import React from "react";

import {
  Smartphone,
  Lock,
  ArrowRight,
  UserPlus,
} from "lucide-react";

import { Link } from "react-router-dom";

const Account = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#020617] via-[#07152a] to-[#111827] flex items-center justify-center px-6 py-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Card */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-white/10
          backdrop-blur-2xl
          border
          border-white/10
          rounded-[40px]
          p-10
          shadow-[0_20px_80px_rgba(0,0,0,0.5)]
        "
      >

        {/* Logo */}
        <div className="text-center">

          <div
            className="
              w-24
              h-24
              mx-auto
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              flex
              items-center
              justify-center
              shadow-[0_10px_40px_rgba(34,211,238,0.5)]
            "
          >
            <Smartphone size={45} className="text-white" />
          </div>

          <h1 className="text-5xl font-extrabold text-white mt-8">
            Login
          </h1>

          <p className="text-gray-300 mt-4 leading-7">
            Login using your mobile number and password
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-6">

          {/* Mobile Number */}
          <div className="relative">

            <Smartphone
              className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
              size={22}
            />

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-2xl
                pl-14
                pr-5
                py-4
                outline-none
                text-white
                placeholder-gray-400
                focus:border-cyan-400
                transition
              "
            />
          </div>

          {/* Password */}
          <div className="relative">

            <Lock
              className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400"
              size={22}
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-2xl
                pl-14
                pr-5
                py-4
                outline-none
                text-white
                placeholder-gray-400
                focus:border-pink-400
                transition
              "
            />
          </div>

          {/* Forgot */}
          <div className="text-right">
            <button
              type="button"
              className="text-cyan-400 hover:text-pink-400 transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* OTP Button */}
          <button
            type="submit"
            className="
              w-full
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-600
              hover:from-orange-400
              hover:via-pink-500
              hover:to-red-500
              py-4
              rounded-2xl
              text-lg
              font-bold
              text-white
              shadow-[0_10px_40px_rgba(34,211,238,0.4)]
              hover:scale-105
              transition-all
              duration-500
              flex
              items-center
              justify-center
              gap-3
            "
          >
            Get OTP
            <ArrowRight size={22} />
          </button>
        </form>

        {/* Register */}
        <div className="mt-10 text-center">

          <p className="text-gray-400">
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="
              mt-4
              inline-flex
              items-center
              gap-3
              text-pink-400
              hover:text-cyan-400
              text-lg
              font-semibold
              transition
            "
          >
            Register Now
            <UserPlus size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Account;