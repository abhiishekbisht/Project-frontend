import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Smart Education</h1>
      <div>
        <Link to="/dashboard" className="px-3">Dashboard</Link>
        <Link to="/homework" className="px-3">Homework</Link>
        <Link to="/quiz" className="px-3">Quiz</Link>
      </div>
    </nav>
  );
};

export default Navbar;
