import React from 'react'

const ExamCard = ({
    info
}) => {
  return (
    <>
        <div className="card bg-pink-200 w-1/5 p-2 m-2 shadow-md">
            <h2>{info.year}</h2>
            <h3>{info.semester}</h3>
            <h4>{info.name}</h4>
            <h4>{info.rollno}</h4>
            <h4>{info.sub}</h4>
        </div>
    </>
  )
}

export default ExamCard;