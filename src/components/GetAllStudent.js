import React, { useState, useEffect } from "react";
import OneStudent from "./OneStudent";

const GetAllStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    getStudents();
  },[]);

  async function getStudents(){
    try {
        const response = await fetch('http://localhost:8080/getAllStudents');
        const jsonData = await response.json();
        setStudents(jsonData);
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
              <th className="border border-slate-600 rounded-md">Roll</th>
              <th className="border border-slate-600 rounded-md">Branch</th>
              <th className="border border-slate-600 rounded-md">Sem</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, id) => (
              <OneStudent key={id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllStudent;
