import React from 'react'
import { useState } from 'react';


const DelExam = () => {

  const [examid, setExamid] = useState();
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleExamChange = (event) => {
    setExamid(event.target.value);
  };

  const handleDelExam = async () => {
    try {
      const response = await fetch(`http://localhost:8080/delExam/${examid}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setDeleteMessage(`Resource with class ${examid} has been deleted.`);
      } else {
        setDeleteMessage(`Failed to delete resource with ID ${examid}.`);
      }
    } catch (error) {
      console.error('Error:', error);
      setDeleteMessage('Error occurred while deleting the resource.');
    }
  };

  return (
    <>
      {/* exam */}
      <div className="m-4 flex items-center">
        <label
          htmlFor="examid"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Enter Exam Id:
        </label>
        <input
          type="text"
          id="examid"
          name="examid"
          value={examid}
          onChange={handleExamChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Exam ID"
          required
        />
      </div>
      <div className="m-5">
        <button
          type="submit"
          onClick={handleDelExam}
          className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Delete Exam
        </button>
      </div>
      {deleteMessage && <div>{deleteMessage}</div>}
    </>
  )
}

export default DelExam