import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MainHeader from '../../Components/MainHeader'

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white  py-12">
      <MainHeader/>
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mt-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Swap Skills, <br /> Grow Together.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Skill Swap is a platform where you can offer your skills and request others in return. Build connections. Learn faster. Share your knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/register")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-lg shadow-md flex items-center gap-2 transition"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/browse")}
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-2xl text-lg transition"
            >
              Browse Skills
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/assets/skillswap-hero.svg" // Replace with your own image or asset
            alt="Skill Swap Illustration"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;