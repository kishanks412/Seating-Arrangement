import React, { useState } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";

const Login = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">LogIn</h2>

        <Link to="/login/adminlogin">
          <button className="bg-blue-500 mt-4 mb-8 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline">
            Admin LogIn
          </button>
        </Link>

        <Link to="/login/studentlogin">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 w-full rounded-md focus:outline-none focus:shadow-outline">
            Student LogIn
          </button>
        </Link>
        

       
      </div>
    </div>
  );
};

export default Login;
