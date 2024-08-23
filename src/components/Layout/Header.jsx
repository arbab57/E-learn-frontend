import React, { useEffect, useState } from 'react'
const URL = import.meta.env.VITE_URL
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo2.jpg"
import { FaUserGraduate, FaChevronDown } from 'react-icons/fa';
import DropDown from '../MainPage/DropDown';
import UserDetails from '../userDetails';




function Header() {

  const [showDetails, setShowDetails] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [res, setRes] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/auth/check`, {
        credentials: 'include',
      })
      setRes(response.status)
    }
    fetchData()
  }, [])


  const signOut = async () => {
    const response = await fetch(`${URL}/auth/signout`, {
      method: 'POST',
      credentials: 'include',
    })
    setRes(400)
  }



  return (
    <div className='head py-2 flex justify-around items-center mb-2'>
      {/* {showLogin && <Login setShowLogin={setShowLogin} />} */}
      {/* {showRegister && <Register setShowRegister={setShowRegister} />} */}
      <div className="logo flex justify-center items-center">
        <img className='w-12 h-12' src={logo} alt="" />
        <div className="text-[#0DAFE6] font-semibold text-xl cursor-pointer">Learnify</div>
      </div>
      <ul className="flex gap-5 justify-center items-center text-[#0DAFE6]">
        <li><Link className='active:bg-[#0DAFE6] active:text-white p-4' to="/">Home</Link></li>
        <li><Link className='active:bg-[#0DAFE6] active:text-white p-4' to="/">Courses</Link></li>
        <li><Link className='active:bg-[#0DAFE6] active:text-white p-4' to="/">Contact Us</Link></li>
      </ul>
      <div onClick={() => setShowDropDown(true)} className="relative">
        <div className="flex gap-2 items-center cursor-pointer">
          <FaUserGraduate className='text-[#0DAFE6] text-xl' />
          <FaChevronDown className='text-xs' />
        </div>
        {showDropDown && <DropDown setShowDetails={setShowDetails} setShowDropDown={setShowDropDown} />}
      </div>
      {showDetails && <UserDetails setShowDetails={setShowDetails}/>}
    </div>
  )
}

export default Header