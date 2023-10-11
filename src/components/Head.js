import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <img
        className='h-12 my-2 px-2 rounded-full'
        alt="logo"
        src="https://th.bing.com/th/id/OIP.8IX22SkTJtpOA7fVMoNlDQHaE8?pid=ImgDet&rs=1"
    />)
}

const Head = () => {
  return (
    <div className='flex py-2 pl-1 bg-blue-400 shadow-lg justify-between'>
      {<Title />}
      <div className='p-4'>
        <ul className='nav-items flex flex-row'>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-2'>
            <Link to='/contactus'>Contact Us</Link>
          </li>
        </ul>

      </div>
      <div className='register-buttons px-2 py-2 flex'>
        <Link to='/login'>
          <button className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Log In</button>
        </Link>
        <Link to='/signup'>
          <button className= 'mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</button>
        </Link>

      </div>
      
    </div>
  )
}   

export default Head