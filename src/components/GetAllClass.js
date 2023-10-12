import React, { useState, useEffect } from "react";
import OneClass from "./OneClass";

const GetAllClass = () => {
    const [classrooms, setClassRooms]=useState([]);
  useEffect(()=>{
    getClassRoom();
  },[]);

  async function getClassRoom(){
    try {
        const response = await fetch('http://localhost:8080/getAllClassRooms');
        const jsonData = await response.json();
        setClassRooms(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
  }
  return (
    <>
      <div>
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">Room Number</th>
              <th className="border border-slate-600 rounded-md">Capacity</th>
              <th className="border border-slate-600 rounded-md">Benches</th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((classroom, id) => (
              <OneClass key={id} classroom={classroom} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default GetAllClass