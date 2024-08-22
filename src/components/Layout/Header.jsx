import React, { useEffect, useState } from 'react'
const URL = import.meta.env.VITE_URL
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Login from '../Login';
import Register from '../Register';


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
    <div className='head py-2 bg-[#0DAFE6] flex justify-between mb-2 px-24'>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showRegister && <Register setShowRegister={setShowRegister} />}
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
            <button onClick={() => { setShowLogin(true) }} className='text-white' to="/login">Login /</button>
            <button onClick={() => { setShowRegister(true) }} className='text-white' to="/register">Register</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <FaSearch className='text-white text-xl cursor-pointer mt-[3px]' />
            <button onClick={signOut} className='text-white' to="/login">SignOut</button>
          </div>
        )
      }
    </div>
  )
}

export default Header