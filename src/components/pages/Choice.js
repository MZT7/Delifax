import React from "react";
import { Link } from "react-router-dom";

const Choice = () => {
  return (
    <div className="container px-6 mx-auto">
      <div className="flex items-center justify-center w-full h-screen sm:gap-11">
        <div className="flex flex-col items-center justify-center h-screen space-y-3">
          <h1 className="px-4 py-2 text-2xl font-bold ">As a Company</h1>
          <Link to="/signuporg">
            <button className="p-2 px-5 text-white capitalize duration-300 bg-gray-600 rounded-md shadow-md hover:scale-105">
              signup
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center h-screen space-y-3">
          <h1 className="px-4 py-2 text-2xl font-bold ">As a User</h1>
          <Link to="/signupin">
            <button className="p-2 px-5 text-white capitalize duration-300 bg-gray-600 rounded-md shadow-md hover:scale-105">
              signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Choice;
