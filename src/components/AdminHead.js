import React from 'react'
import { Link } from 'react-router-dom'

const AdminHead = () => {
  return (
    <div className='flex-grow'>
    <div className='p-4 bg-red-400'>
     <ul className='nav-items flex flex-wrap'>
       <li className='px-2 pb-3   hover:text-2xl'>
         <Link to='/login/adminlogin/adminfunctionality/byclass'>By Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/login/adminlogin/adminfunctionality/bybranchsem'>By Branch & Sem</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/contactus'>Set Arrangement</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/'>Add Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/about'>Del Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/contactus'>Get All Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/'>Add Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/about'>Del Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/contactus'>Get All Classroom</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/'>Add Exam</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/about'>Del Exam</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/contactus'>Get All Exam</Link>
       </li>
       <li className='px-2 pb-3  hover:text-2xl'>
         <Link to='/'>All Students</Link>
       </li>
       <li className='px-2 pb-3 hover:text-2xl'>
         <Link to='/about'>Get All students by sem</Link>
       </li>
       
     </ul>

   </div>
 </div>
  )
}

export default AdminHead