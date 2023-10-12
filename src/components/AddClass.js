import React, { useState } from "react";

const AddClass = () => {
  const [roomnum, setRoomnum] = useState('');
  const [capacity, setCapacity] = useState('');
  const [benches, setBenches] = useState('');
  const [postMessage, setPostMessage] = useState('');

  const handleRoomNumChange = (event) => {
    setRoomnum(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleBenchesChange = (event) => {
    setBenches(event.target.value);
  };

  const handleAddClass = async () => {
    try {
      const response = await fetch('http://localhost:8080/addClassRoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomnum, capacity, benches })
      });

      if (response.ok) {
        setPostMessage('Class has been added successfully.');
      } else {
        setPostMessage('Failed to add class.');
      }
    } catch (error) {
      console.error('Error:', error);
      setPostMessage('Error occurred while adding the class.');
    }
  };


  return (
    <>
      {/* Room Number */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="roomnum"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Room Number:
        </label>
        <input
          type="text"
          id="roomnum"
          name="roomnum"
          value={roomnum}
          onChange={handleRoomNumChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your room number"
          required
        />
      </div>
      {/* Capacity */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="capacity"
          className="block px-2 text-gray-700 text-sm font-bold mb-2 "
        >
          Capacity:
        </label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          value={capacity}
          onChange={handleCapacityChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Capacity"
          required
        />
      </div>
      {/* Benches */}
      <div className="mb-4 flex items-center">
        <label
          htmlFor="benches"
          className="block px-2 text-gray-700 text-sm font-bold mb-2"
        >
          Benches:
        </label>
        <input
          type="number"
          id="benches"
          name="benches"
          value={benches}
          onChange={handleBenchesChange}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter benches"
          required
        />
      </div>

      <div className="my-10">
        <button
          type="submit"
          onClick={handleAddClass}
          className="mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Add Class
        </button>
      </div>
      {postMessage && <div>{postMessage}</div>}
    </>
  );
};

export default AddClass;
