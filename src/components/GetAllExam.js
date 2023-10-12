import React from "react";
import OneExam from "./OneExam";
import { useState, useEffect } from "react";

const GetAllExam = () => {
  const [allExams, setAllExams] = useState([]);

  useEffect(() => {
    getExams();
  }, []);

  async function getExams() {
    try {
      const response = await fetch("http://localhost:8080/getallexams");
      const jsonData = await response.json();
      setAllExams(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <>
      <div>
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">Exam ID</th>
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md">Sem</th>
              <th className="border border-slate-600 rounded-md">Branch</th>
            </tr>
          </thead>
          <tbody>
            {allExams.map((exam, id) => (
              <OneExam key={id} exam={exam} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GetAllExam;
