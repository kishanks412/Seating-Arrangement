import React from "react";
import { useState } from "react";

const StudentData = () => {
    
    const [enroll, setEnroll] = useState("");
  return (
    <div className="flex-grow m-5">
      <div>
        {/* student name */}
        <div className="mb-4 flex items-center">
          <label
            htmlFor="name"
            className="block px-2 text-gray-700 text-sm font-bold mb-2"
          >
            Student Name:
          </label>
          <h2 className=""> Harsh Raj Jha</h2>
        </div>
        {/* student email */}
        <div className="mb-4 flex items-center">
          <label
            htmlFor="email"
            className="block px-2 text-gray-700 text-sm font-bold mb-2 "
          >
            Student Email:
          </label>
          <h2 className=""> Harsh Raj Jha</h2>
        </div>

        {/* student enrollment */}
        <div className="mb-4 flex items-center">
          <label
            htmlFor="enrollment"
            className="block px-2 text-gray-700 text-sm font-bold mb-2"
          >
            Enrollment Number:
          </label>
          <input
            type="text"
            id="enrollment"
            name="enrollment"
            value={enroll}
            // onChange={handleInputChange}
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your enrollment number"
            required
          />
        </div>

        <div className="my-10">
          <button
            type="submit"
            className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          >
            Find Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentData;
