import React, { useState, useEffect } from "react";
import OneStudent from "./OneStudent";

const GetAllStudentsBySem = () => {
  const [sem, setSem] = useState("");
  const [students, setStudents] = useState(null);

  const handleSemChange = (event) => {
    setSem(event.target.value);
  };

  const handleFindStudents = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/getAllStudents/${sem}`
      );
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error:", error);
      setStudents([]);
    }
  };
 
  return (
    <>
      {/* semester */}
      <div className="m-4 flex items-center">
        <label
          htmlFor="semester"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Enter Semester:
        </label>
        <input
          type="number"
          id="semester"
          name="semester"
          value={sem}
          onChange={handleSemChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your semester(number)"
          min="1"
          max="10"
          required
        />
      </div>
      
      


      <div>
      <div className="my-10">
          <button
            type="submit"
            onClick={handleFindStudents}
            className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          >
            Find Students
          </button>
        </div>
        {students === null ? (
          <div className="">Loading...</div>
        ) : students.length === 0 ? (
          <div>No data available.</div>
        ) : (
          <div>
            <table className="w-full border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="border border-slate-600 rounded-md">Name</th>
                  <th className="border border-slate-600 rounded-md">Enroll</th>
                  <th className="border border-slate-600 rounded-md">Roll</th>
                  <th className="border border-slate-600 rounded-md">Branch</th>
                  <th className="border border-slate-600 rounded-md">Sem</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, id) => (
                  <OneStudent key={id} student={student} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default GetAllStudentsBySem;
