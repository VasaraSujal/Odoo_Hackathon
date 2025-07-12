import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-10vw -mt-12 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-600 tracking-wide"
        >
          SkillSwap
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all duration-200 font-medium"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
