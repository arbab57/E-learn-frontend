import React, { useEffect, useState } from 'react'
// URL = import.meta.env.VITE_URL
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {

  const [res, setRes] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`${URL}/check`)
  //     setRes(response.status)
  //   }

  // }, [])

  return (
    <div className='head flex justify-around mt-2'>
      <div className="logo">
        <img src="" alt="" />
        <div className="name font-bold">Learnify</div>
      </div>
      <ul className="flex gap-5">
        <li><link to="">Home</link></li>
        <li><link to="">Courses</link></li>
        <li><link to="">Contact Us</link></li>
      </ul>
      {
        res === 200 ? <div className="registeration flex">
          <li><link to="Login">Login /</link></li>
          <li><link to="Register">Register</link></li>
        </div> : <FaSearch className='text-[#0DAFE6] text-xl' />

      }
    </div>
  )
}

export default Header