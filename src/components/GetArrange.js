import React, { useState, useEffect } from "react";
import OneStudent from "./OneStudent";
import OneArr from "./OneArr";

const GetArrange = () => {
  const [arrangement, setArrangement] = useState([]);

  useEffect(()=>{
    getArrangement();
  },[]);

  async function getArrangement(){
    try {
        const response = await fetch('http://localhost:8080/getArrangement');
        const jsonData = await response.json();
        setArrangement(jsonData);
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
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md">Enroll</th>
              <th className="border border-slate-600 rounded-md">Branch</th>
              <th className="border border-slate-600 rounded-md">Sem</th>
              <th className="border border-slate-600 rounded-md">Exam</th>
              <th className="border border-slate-600 rounded-md">classRoom</th>
              <th className="border border-slate-600 rounded-md">Bench</th>
            </tr>
          </thead>
          <tbody>
            {arrangement.map((arr, id) => (
              <OneArr key={id} arr={arr} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetArrange;
