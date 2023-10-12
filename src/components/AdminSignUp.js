import React from "react";
import { useState } from "react";

const AdminSignUp = () => {
  const [code, setCode] = useState("");

  const initialFormData = {
    name: "",
    email: "",
    branch: "",
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
    setCode("");
    setFormData(initialFormData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (code !== "1234") {
      alert("enter correct code");
    } else if (
      formData.name === "" ||
      formData.email === "" ||
      formData.branch === "" ||
      formData.password === ""
    ) {
      alert("Please fill out all fields.");
    } else {
      try {
        const response = await fetch("YOUR_API_ENDPOINT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Registration successful!");
          handleFormReset();
        } else {
          alert("Registration failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while registering.");
      }
    }
  };

  return (
    <>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white my-10 p-5 shadow-md rounded-lg">
          <div className=" m-10 text-4xl font-semibold ">
            <h2>Registeration of Admins</h2>
          </div>
          <div>
            <div>
              {/* Admin name */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="name"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Admin Name:
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
              {/* admin email */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="email"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2 "
                >
                  Admin Email:
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

              {/* admin code */}
              <div className="mb-4 flex items-center ">
                <label
                  htmlFor="code"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Enter code
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
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

export default AdminSignUp;
