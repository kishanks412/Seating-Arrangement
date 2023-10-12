import React from 'react'

const OneClass = ({classroom}) => {
  return (
    <>
      <tr className="h-8">
        <td className="border border-slate-700 rounded-md text-center">
          {classroom.roomnum}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {classroom.capacity}
        </td>
        <td className="border border-slate-700 rounded-md text-center max-md:hidden">
          {classroom.benches}
        </td>
      </tr>
    </>
  )
}

export default OneClass