import React, { useEffect, useState } from 'react'
const URL = import.meta.env.VITE_URL
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Login from '../Login';


function Header() {

  const [res, setRes] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/auth/check`)
      setRes(response.status)
    }
    fetchData()
  }, [])

 

  return (
    <div className='head py-2 bg-[#0DAFE6] flex justify-between mb-2 px-24'>
      {showLogin &&  <Login setShowLogin={setShowLogin}/>}
      <div className="logo">
        <img src="" alt="" />
        <div className="text-white font-semibold text-xl cursor-pointer">Learnify</div>
      </div>
      <ul className="flex gap-5 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Courses</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      {
        res !== 200 ? (
          <div className="registeration flex">
            <button onClick={()=>{setShowLogin(true)}} className='text-white' to="/login">Login /</button>
            <Link className='text-white' to="/register">Register</Link>
          </div>
        ) : (
          <FaSearch className='text-white text-xl cursor-pointer mt-[3px]' />
        )
      }
    </div>
  )
}

export default Header