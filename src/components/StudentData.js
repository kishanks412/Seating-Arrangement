import React from "react";
import { useState } from "react";

const StudentData = () => {
    
    const [enroll, setEnroll] = useState("");
    const [details, setDetails] = useState(null);

    const handleInputChange = (event) => {
      setEnroll(event.target.value)
    };

    async function getDetails(){
      try {
          const response = await fetch(`http://localhost:8080/getSeating/${enroll}`);
          const jsonData = await response.json();
          setDetails(jsonData);
        } catch (error) {
          console.error('Error:', error);
        }
    }


  return (
    <div className="flex-grow m-5">
      <div>
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
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your enrollment number"
            required
          />
        </div>

        <div className="my-10">
          <button
            type="submit"
            onClick={getDetails}

            className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          >
            Find Details
          </button>
        </div>

        
      </div>

      {details === null ? (
          <div className="">Loading...</div>
        ) : details.length === 0 ? (
          <div>No data available.</div>
        ) : (
          <div>
            <h2>Name     :- {details.name} </h2>
            <p>Enroll    :- {details.enroll} </p>
            <p>Semester  :- {details.sem} </p>
            <p>Branch    :- {details.branch} </p>
            <p>Exam      :- {details.exam} </p>
            <p>Classroom :- {details.classroom} </p>
            <p>Bench     :- {details.bench}</p>

            </div>
        )}
    </div>
  );
};

export default StudentData;
