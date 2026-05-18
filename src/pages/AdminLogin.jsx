import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

const AdminLogin = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // Login
  const loginAdmin = () => {

    // Any Email & Password
    if (
      email &&
      password
    ) {

      localStorage.setItem(
        "adminAuth",
        "true"
      );

      navigate(
        "/dashboard"
      );

    } else {

      alert(
        "Enter Email & Password"
      );
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-[#f1f3f6]
        flex
        items-center
        justify-center
        p-6
      "
    >

      <div
        className="
          bg-white
          shadow-2xl
          rounded-[40px]
          w-full
          max-w-md
          p-10
        "
      >

        {/* Heading */}
        <div className="text-center mb-10">

          <h1
            className="
              text-5xl
              font-extrabold
              text-blue-600
            "
          >
            Admin Login
          </h1>

        </div>

        {/* Inputs */}
        <div className="space-y-5">

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
              w-full
              bg-[#f1f3f6]
              p-5
              rounded-2xl
              outline-none
              text-lg
            "
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
              w-full
              bg-[#f1f3f6]
              p-5
              rounded-2xl
              outline-none
              text-lg
            "
          />

          {/* Button */}
          <button
            onClick={loginAdmin}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-5
              rounded-2xl
              text-xl
              font-bold
              mt-5
            "
          >
            Login
          </button>

        </div>

      </div>

    </section>
  );
};

export default AdminLogin;