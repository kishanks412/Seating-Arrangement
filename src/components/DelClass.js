import React, { useState, useEffect } from "react";

const DelClass = () => {
  const [classroom, setClassroom] = useState();
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleClassChange = (event) => {
    setClassroom(event.target.value);
  };

  const handleDelClass = async () => {
    try {
      const response = await fetch(`http://localhost:8080/delClassRoom/${classroom}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setDeleteMessage(`Resource with class ${classroom} has been deleted.`);
      } else {
        setDeleteMessage(`Failed to delete resource with ID ${classroom}.`);
      }
    } catch (error) {
      console.error('Error:', error);
      setDeleteMessage('Error occurred while deleting the resource.');
    }
  };

  return (
    <>
      {/* classroom */}
      <div className="m-4 flex items-center">
        <label
          htmlFor="classroom"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Enter Classroom Number to Delete:
        </label>
        <input
          type="text"
          id="classroom"
          name="classroom"
          value={classroom}
          onChange={handleClassChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter room number"
          min="1"
          max="10"
          required
        />
      </div>
      <div className="m-5">
        <button
          type="submit"
          onClick={handleDelClass}
          className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Delete Classroom
        </button>
      </div>
      {deleteMessage && <div>{deleteMessage}</div>}
    </>
  );
};

export default DelClass;
