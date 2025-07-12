import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Repeat,
  Star,
  Search,
  CalendarClock,
  User,
  MailCheck,
} from "lucide-react";
import Header from "../../Components/MainHeader";

const features = [
  {
    icon: <Repeat className="w-8 h-8" style={{ color: "#84CC16" }} />,
    title: "Skill-for-Skill Exchange",
    desc: "Swap your talents with others — no money involved, just mutual learning. Everyone has something to teach and something to learn. Connect with people who complement your abilities and grow together."
  },
  {
    icon: <Search className="w-8 h-8" style={{ color: "#0EA5E9" }} />,
    title: "Discover Skills Easily",
    desc: 'Use our smart skill search to find users by skill keywords like "Photoshop", "Cooking", or "Excel". Each profile highlights what a user offers and what they’re looking to learn — making it easy to match up.'
  },
  {
    icon: <CalendarClock className="w-8 h-8" style={{ color: "#4F46E5" }} />,
    title: "Flexible Scheduling",
    desc: "Life is busy — that's why you can set your preferred availability like weekends, weekdays, or evenings. Swap on your terms, when you’re free, without stress or pressure."
  },
  {
    icon: <User className="w-8 h-8" style={{ color: "#0EA5E9" }} />,
    title: "Personalized Profiles",
    desc: "Create a simple, clean profile with your name, location (optional), skills offered and wanted, and even a profile picture. Choose to make it public or private — your privacy, your choice."
  },
  {
    icon: <MailCheck className="w-8 h-8" style={{ color: "#4F46E5" }} />,
    title: "Simple Swap Requests",
    desc: "Send a request, accept one, or delete it if things change — everything is transparent. All your current and pending swaps are tracked neatly, making the whole experience smooth and manageable."
  },
  {
    icon: <Star className="w-8 h-8" style={{ color: "#84CC16" }} />,
    title: "Ratings & Feedback",
    desc: "After each swap, leave a quick rating or review to help others build credibility. Feedback encourages quality, builds trust, and makes the entire community more valuable for everyone."
  },
];

const GuestDashboard = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB", color: "#1F2937" }}>
        <Header />
      {/* Hero Section */}
      <div className="w-full py-16 px-6 sm:px-12 text-center border-b border-slate-200" style={{ backgroundColor: "#FFFFFF" }}>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: "#4F46E5" }}>
          Welcome to SkillSwap
        </h1>
        <p className="text-lg max-w-3xl mx-auto" style={{ color: "#4B5563" }}>
          Discover a trusted community where skills are exchanged, not sold. Build real connections and learn faster.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="px-6 py-3 rounded-full text-lg text-white transition shadow"
            style={{ backgroundColor: "#4F46E5" }}
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-full text-lg border transition"
            style={{ borderColor: "#4F46E5", color: "#4F46E5", backgroundColor: "#FFFFFF" }}
          >
            Login
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="w-full px-6 sm:px-12 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1F2937" }}>
          What You’ll Love About SkillSwap
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="shadow-sm hover:shadow-md rounded-2xl p-6 transition"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm" style={{ color: "#6B7280" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full text-center pb-20 px-6 sm:px-12">
        <h3 className="text-2xl font-bold mb-4">Ready to swap skills and grow faster?</h3>
        <Link
          to="/register"
          className="px-8 py-3 rounded-full text-lg text-white transition shadow"
          style={{ backgroundColor: "#84CC16" }}
        >
          Join SkillSwap Now
        </Link>
      </div>
    </div>
  );
};

export default GuestDashboard;
