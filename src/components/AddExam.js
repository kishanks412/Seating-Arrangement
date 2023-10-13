import React, { useState } from 'react';

const AddExam = () => {

  const [examname, setExamname] = useState('');
  const [sem, setSem] = useState('');
  const [branch, setBranch] = useState('');
  const [postMessage, setPostMessage] = useState('');

  const handleExamNameChange = (event) => {
    setExamname(event.target.value);
  };

  const handleSemChange = (event) => {
    setSem(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleAddExam = async () => {
    try {
      const response = await fetch('http://localhost:your-backend-port/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ examname, sem, branch })
      });

      if (response.ok) {
        setPostMessage('Exam has been added successfully.');
      } else {
        setPostMessage('Failed to add exam.');
      }
    } catch (error) {
      console.error('Error:', error);
      setPostMessage('Error occurred while adding the exam.');
    }
  };

  return (
    <>
      {/* Room Number */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="examname"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Exam Name:
        </label>
        <input
          type="text"
          id="examname"
          name="examname"
          value={examname}
          onChange={handleExamNameChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Exam Name"
          required
        />
      </div>
      {/* Semester */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="sem"
          className="block px-2 text-gray-700 text-sm font-bold mb-2 "
        >
          Semester:
        </label>
        <input
          type="text"
          id="sem"
          name="sem"
          value={sem}
          onChange={handleSemChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter sem"
          required
        />
      </div>
      {/* Branches */}
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
          value={branch}
          onChange={handleBranchChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter branch"
          required
        />
      </div>

      <div className="my-10">
        <button
          type="submit"
          onClick={handleAddExam}
          className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Add Exam
        </button>
      </div>
      {postMessage && <div>{postMessage}</div>}
    </>
  )
}

export default AddExam