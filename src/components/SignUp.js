import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

          <Link to="adminsignup">
            <button className="bg-blue-500 mt-4 mb-8 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline">
              Admin Sign Up
            </button>
          </Link>

          <Link to="studentsignup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline">
              Student Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
