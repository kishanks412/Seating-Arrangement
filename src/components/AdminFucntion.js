import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminHead from './AdminHead'

const AdminFucntion = () => {
  return (
    <div className='flex-grow'>
       <AdminHead />
       <Outlet/>
    </div>
  )
}

export default AdminFucntion