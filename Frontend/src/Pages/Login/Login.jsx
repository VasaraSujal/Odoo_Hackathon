import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
      {/* Left side - Image */}
      <div className="w-1/2 hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-300 to-indigo-500">
        <img
          src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1748238957/Attendance%20And%20Payroll%20Managment/y45ltl4yfgxsksuetayk.png"
          alt="Login Visual"
          className="rounded-xl shadow-xl object-cover h-[80%] w-[80%] transition duration-300 hover:scale-105"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-6 animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-indigo-600 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-700 text-center">
            Log in to your <span className="font-semibold">SkillSwap</span> account
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 font-medium shadow-md"
            >
              Login
            </button>

            {/* Link to Register */}
            <p className="text-sm text-gray-700 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
