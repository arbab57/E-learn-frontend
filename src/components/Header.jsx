import React, { useEffect, useState } from 'react'
const URL = import.meta.env.VITE_URL
import { Link } from 'react-router-dom';
import { FaSearch, FaUserGraduate } from 'react-icons/fa';
import Login from './Login';
import Register from './Register';
import logo from "../assets/images/logo2.jpg"


function Header() {

  const [res, setRes] = useState(null)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/auth/check`, {
        credentials: 'include',
      })
      setRes(response.status)
    }
    fetchData()
  }, [showLogin,showRegister])


  const signOut = async () => {
    const response = await fetch(`${URL}/auth/signout`, {
      method: 'POST',
      credentials: 'include',
    })
    setRes(400)
  }



  return (
    <div className='head py-2 flex justify-between mb-2 px-24'>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showRegister && <Register setShowRegister={setShowRegister} />}
      <div className="logo flex justify-center items-center">
        <img className='w-12 h-12' src={logo} alt="" />
        <div className="text-[#0DAFE6] font-semibold text-xl cursor-pointer">Learnify</div>
      </div>
      <ul className="flex gap-5 justify-center items-center text-[#0DAFE6]">
        <li><Link className='active:bg-[#0DAFE6] active:text-white p-4' to="/">Home</Link></li>
        <li><Link className='active:bg-[#0DAFE6] active:text-white p-4' to="/">Courses</Link></li>
        <li><Link className='active:bg-[#0DAFE6] active:text-white p-4' to="/">Contact Us</Link></li>
      </ul>
      {
        res !== 200 ? (
          <div className="registeration flex justify-center items-center">
            <FaUserGraduate className='h-10 text-[#0DAFE6] cursor-pointer active:text-white'/>
            <button onClick={() => { setShowLogin(true) }} className='text-[#0DAFE6]' to="/login">Login /</button>
            {/* <button onClick={() => { setShowRegister(true) }} className='text-[#0DAFE6]' to="/register">Register</button> */}
          </div>
        ) : (
          <div className="flex gap-4">
            <FaSearch className='text-[#0DAFE6] text-xl cursor-pointer mt-[3px]' />
            <button onClick={signOut} className='text-[#0DAFE6]' to="/login">SignOut</button>
          </div>
        )
      }
    </div>
  )
}

export default Header