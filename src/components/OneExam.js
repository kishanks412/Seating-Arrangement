import React from 'react'

const OneExam = ({exam}) => {
  return (
    <>
      <tr className="h-8">
      <td className="border border-slate-700 rounded-md text-center">
          {exam.id}
        </td>
        <td className="border border-slate-700 rounded-md text-center">
          {exam.name}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {exam.sem}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {exam.branch}
        </td>
      </tr>
    </>
  )
}

export default OneExam