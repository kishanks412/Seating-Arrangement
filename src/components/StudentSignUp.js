import React from "react";
import { useState } from "react";

const StudentSignUp = () => {
  const initialFormData = {
    name: "",
    email: "",
    enrollment: "",
    roll: "",
    branch: "",
    semester: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // You can perform actions with the submitted data here
    // For example, you can send it to an API or store it in state
    console.log(formData
      
      );
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful registration, you can redirect or show a success message
        console.log("Registration successful!");
      } else {
        // Handle errors, such as invalid input or server issues
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // Clear the input fields after submission
    setFormData({
      name: "",
      email: "",
      enrollment: "",
      roll: "",
      branch: "",
      semester: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white my-10 p-5 shadow-md rounded-lg">
          <div className=" m-10 text-4xl font-semibold ">
            <h2>Registeration of Students</h2>
          </div>
          <div>
            <div>
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
              {/* student email */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="email"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2 "
                >
                  Student Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
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
                  value={formData.enrollment}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your enrollment number"
                  required
                />
              </div>
              {/* roll number */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="roll"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Roll Number:
                </label>
                <input
                  type="text"
                  id="roll"
                  name="roll"
                  value={formData.roll}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your roll number"
                  required
                />
              </div>

              <div className="mb-4 flex items-center">
                <label
                  htmlFor="roll"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Class Roll:
                </label>
                <input
                  type="text"
                  id="roll"
                  name="roll"
                  value={formData.roll}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your class number"
                  required
                />
              </div>

              {/* branch */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="branch"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Branch
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your branch"
                  required
                />
              </div>

              {/* semester */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="semester"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Semester
                </label>
                <input
                  type="number"
                  id="semester"
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your semester(number)"
                  min="1"
                  max="10"
                  required
                />
              </div>

              {/* password */}
              <div className="mb-4 flex items-center ">
                <label
                  htmlFor="password"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Enter password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter the password"
                  required
                />
              </div>

              {/* admin */}
              <div className="mb-4 flex items-center ">
                <label
                  htmlFor="password"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Enter code
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Registration code for admin"
                  required
                />
              </div>

              <div className="my-10">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>

                

                <button
                  type="reset"
                  onClick={handleFormReset}
                  className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentSignUp;



