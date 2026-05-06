import React from "react";

import {
  User,
  Smartphone,
  Lock,
} from "lucide-react";

const Register = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-950 flex items-center justify-center px-6 py-20">

      <div
        className="
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

        <h1 className="text-5xl font-extrabold text-white text-center">
          Register
        </h1>

        <p className="text-center text-gray-400 mt-4">
          Create your new account
        </p>

        <form className="mt-10 space-y-6">

          {/* Name */}
          <div className="relative">

            <User
              className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
              size={22}
            />

            <input
              type="text"
              placeholder="Full Name"
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
              "
            />
          </div>

          {/* Mobile */}
          <div className="relative">

            <Smartphone
              className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400"
              size={22}
            />

            <input
              type="tel"
              placeholder="Mobile Number"
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
              "
            />
          </div>

          {/* Password */}
          <div className="relative">

            <Lock
              className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400"
              size={22}
            />

            <input
              type="password"
              placeholder="Password"
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
              "
            />
          </div>

          {/* Button */}
          <button
            className="
              w-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              hover:from-pink-500
              hover:to-orange-400
              py-4
              rounded-2xl
              text-lg
              font-bold
              text-white
              transition-all
              duration-500
              hover:scale-105
            "
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;