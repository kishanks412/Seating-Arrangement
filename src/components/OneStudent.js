import React from "react";

const OneStudent = ({ student }) => {
  return (
    <>
      <tr className="h-8">
        <td className="border border-slate-700 rounded-md text-center">
          {student.name}
        </td>
        <td className="border border-slate-700 rounded-md text-center">
          {student.enroll}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {student.roll}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {student.branch}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {student.sem}
        </td>
      </tr>
    </>
  );
};

export default OneStudent;
