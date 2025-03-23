import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Smart Education</h1>
      <Link to="/login" className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">Get Started</Link>
    </div>
  );
};

export default Home;
