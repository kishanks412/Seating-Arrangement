import React from "react";

const OneArr = ({ arr }) => {
  return (
    <>
      <tr className="h-8">
        <td className="border border-slate-700 rounded-md text-center">
          {arr.name}
        </td>
        <td className="border border-slate-700 rounded-md text-center">
          {arr.enroll}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {arr.branch}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {arr.sem}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {arr.exam}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {arr.classroom}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {arr.bench}
        </td>
      </tr>
    </>
  );
};

export default OneArr;
