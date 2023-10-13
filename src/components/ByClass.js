import React from "react";
import { useState } from "react";

const ByClass = () => {
  const [classroom, setClassroom] = useState("");

  return (
    <>
      {/* student name */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="name"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Student Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          required
        />
      </div>
    </>
  );
};

export default ByClass;
