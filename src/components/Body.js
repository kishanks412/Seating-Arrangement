import React from 'react'
import { useEffect, useState } from "react";
import ExamCard from './ExamCard';

const dummyData = [
    {
        year: "year1",
        semester: "sem1",
        name: "stuName1",
        rollno: "stuRoll1",
        sub:"sub1",
    },
    {
        year: "year2",
        semester: "sem2",
        name: "stuName2",
        rollno: "stuRoll2",
        sub:"sub1",
    },
    {
        year: "year3",
        semester: "sem3",
        name: "stuName3",
        rollno: "stuRoll3",
        sub:"sub3",
    },
    {
        year: "year4",
        semester: "sem4",
        name: "stuName4",
        rollno: "stuRoll4",
        sub:"sub4",
    },
    {
        year: "year5",
        semester: "sem5",
        name: "stuName5",
        rollno: "stuRoll5",
        sub:"sub5",
    },
    {
        year: "year6",
        semester: "sem6",
        name: "stuName6",
        rollno: "stuRoll6",
        sub:"sub6",
    },
    {
        year: "year7",
        semester: "sem7",
        name: "stuName7",
        rollno: "stuRoll7",
        sub:"sub7",
    },
    {
        year: "year8",
        semester: "sem8",
        name: "stuName8",
        rollno: "stuRoll8",
        sub:"sub8",
    },
    {
        year: "year9",
        semester: "sem9",
        name: "stuName9",
        rollno: "stuRoll9",
        sub:"sub9",
    },
    {
        year: "year1",
        semester: "sem1",
        name: "stuName1",
        rollno: "stuRoll1",
        sub:"sub1",
    },
    {
        year: "year2",
        semester: "sem2",
        name: "stuName2",
        rollno: "stuRoll2",
        sub:"sub1",
    },
    {
        year: "year3",
        semester: "sem3",
        name: "stuName3",
        rollno: "stuRoll3",
        sub:"sub3",
    },
    {
        year: "year4",
        semester: "sem4",
        name: "stuName4",
        rollno: "stuRoll4",
        sub:"sub4",
    },
    {
        year: "year5",
        semester: "sem5",
        name: "stuName5",
        rollno: "stuRoll5",
        sub:"sub5",
    },
    {
        year: "year6",
        semester: "sem6",
        name: "stuName6",
        rollno: "stuRoll6",
        sub:"sub6",
    },
    {
        year: "year7",
        semester: "sem7",
        name: "stuName7",
        rollno: "stuRoll7",
        sub:"sub7",
    },
    {
        year: "year8",
        semester: "sem8",
        name: "stuName8",
        rollno: "stuRoll8",
        sub:"sub8",
    },
    {
        year: "year9",
        semester: "sem9",
        name: "stuName9",
        rollno: "stuRoll9",
        sub:"sub9",
    },
    {
        year: "year1",
        semester: "sem1",
        name: "stuName1",
        rollno: "stuRoll1",
        sub:"sub1",
    },
    {
        year: "year2",
        semester: "sem2",
        name: "stuName2",
        rollno: "stuRoll2",
        sub:"sub1",
    },
    {
        year: "year3",
        semester: "sem3",
        name: "stuName3",
        rollno: "stuRoll3",
        sub:"sub3",
    },
    {
        year: "year4",
        semester: "sem4",
        name: "stuName4",
        rollno: "stuRoll4",
        sub:"sub4",
    },
    {
        year: "year5",
        semester: "sem5",
        name: "stuName5",
        rollno: "stuRoll5",
        sub:"sub5",
    },
    {
        year: "year6",
        semester: "sem6",
        name: "stuName6",
        rollno: "stuRoll6",
        sub:"sub6",
    },
    {
        year: "year7",
        semester: "sem7",
        name: "stuName7",
        rollno: "stuRoll7",
        sub:"sub7",
    },
    {
        year: "year8",
        semester: "sem8",
        name: "stuName8",
        rollno: "stuRoll8",
        sub:"sub8",
    },
    {
        year: "year9",
        semester: "sem9",
        name: "stuName9",
        rollno: "stuRoll9",
        sub:"sub9",
    },
]

const Body = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getAllData();
    },[]);

    async function getAllData(){
        setData(dummyData)
    };
    
  return (
    <>
        <div className='flex-grow bg-red-400 '>
            <div className='flex flex-wrap'>
                {data.map((oneData, index)=>{
                    return (
                        <ExamCard key={index} info={oneData} />
                    )
                })}
            </div>
        </div>
    </>
    
  )
}

export default Body