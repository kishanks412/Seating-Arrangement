import React, { useState } from "react";

const SetArrangement = () => {
  const initialFormData = {
    room1: "",
    room2: "",
    room3: "",
    sem1: "",
    sem2: "",
    examName: "",
    branch: "",
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

    if (
      formData.room1 === "" ||
      formData.room2 === "" ||
      formData.room3 === "" ||
      formData.sem1 === "" ||
      formData.sem2 === "" ||
      formData.examName === "" ||
      formData.branch === ""
    ) {
      alert("Please fill out all fields.");
    } else {
      try {
        const response = await fetch(`http://localhost:8080/setArrangement/${formData.room1}/${formData.room2}/${formData.room3}/${formData.sem1}/${formData.sem2}/${formData.examname}/${formData.branch}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(formData),
          body: JSON.stringify(formData.room1, formData.room2, formData.room3, formData.sem1, formData.sem2, formData.examName, formData.branch),
        });

        if (response.ok) {
          alert("Arrangement successful!");
          handleFormReset();
        } else {
          alert("Arrangement failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while Arrangement.");
      }
    }
  };

  return (
    <>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white my-10 p-5 shadow-md rounded-lg">
          <div className=" m-10 text-4xl font-semibold ">
            <h2>Arrangement</h2>
          </div>
          <div>
            <div>
              {/* Room 1 */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="room1"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Room 1:
                </label>
                <input
                  type="text"
                  id="room1"
                  name="room1"
                  value={formData.room1}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Room 1"
                  required
                />
              </div>
              {/* Room 2 */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="room2"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Room 2:
                </label>
                <input
                  type="text"
                  id="room2"
                  name="room2"
                  value={formData.room2}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Room 2"
                  required
                />
              </div>
              {/* Room 3 */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="room3"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Room 3:
                </label>
                <input
                  type="text"
                  id="room3"
                  name="room3"
                  value={formData.room3}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Room 3"
                  required
                />
              </div>
              {/* Semester 1 */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="sem1"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Semester 1:
                </label>
                <input
                  type="text"
                  id="sem1"
                  name="sem1"
                  value={formData.sem1}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Semester 1"
                  required
                />
              </div>
              {/* Semester 2 */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="sem2"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Semester 2:
                </label>
                <input
                  type="text"
                  id="sem2"
                  name="sem2"
                  value={formData.sem2}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Semester 2"
                  required
                />
              </div>
              {/* Exam Name */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="examName"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Exam Name:
                </label>
                <input
                  type="text"
                  id="examName"
                  name="examName"
                  value={formData.examName}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Exam Name"
                  required
                />
              </div>
              {/* Branch */}
              <div className="mb-4 flex items-center">
                <label
                  htmlFor="branch"
                  className="block px-2 text-gray-700 text-sm font-bold mb-2"
                >
                  Branch:
                </label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Branch"
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

export default SetArrangement;

