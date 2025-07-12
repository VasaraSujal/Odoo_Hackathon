import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-wide">
          SkillSwap
        </Link>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
