import React, { useEffect, useState } from 'react'
// URL = import.meta.env.VITE_URL
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


function Header() {

  const [res, setRes] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`${URL}/check`)
  //     setRes(response.status)
  //   }

  // }, [])

  return (
    <div className='head py-2 bg-[#0DAFE6] flex justify-around mb-2'>
      <div className="logo">
        <img src="" alt="" />
        <div className="text-white font-semibold text-xl cursor-pointer">Learnify</div>
      </div>
      <ul className="flex gap-5 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      {
        res === 200 ? (
          <div className="registeration flex">
            <li><Link to="/login">Login /</Link></li>
            <li><Link to="/register">Register</Link></li>
          </div>
        ) : (
          <FaSearch className='text-white text-xl cursor-pointer mt-[3px]' />
        )
      }
    </div>
  )
}

export default Header