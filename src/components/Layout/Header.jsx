import React, { useEffect, useState } from 'react'
const URL = import.meta.env.VITE_URL
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo2.jpg"
import { FaUserGraduate, FaChevronDown } from 'react-icons/fa';
import DropDown from '../DropDown/DropDown';
import Setting from '../DropDown/Setting';
import ChangePassword from '../DropDown/ChangePassword';
import SavedCourses from '../../pages/SavedCourses';


function Header() {

  const navigate = useNavigate();
  const [setting, setSetting] = useState(false)
  const [Password, setPassword] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [savedCourses, setSavedCourses] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/auth/check`, {
        credentials: 'include',
      })
      if (response.status !== 200) {
        navigate("/login");
      }
    }
    fetchData();
  }, [])



  return (
    <div className='head py-2 flex justify-around items-center mb-2'>
      {/* {showLogin && <Login setShowLogin={setShowLogin} />} */}
      {/* {showRegister && <Register setShowRegister={setShowRegister} />} */}
      <div className="logo flex justify-center items-center">
        <img className='w-12 h-12' src={logo} alt="" />
        <div ><Link className="text-[#0DAFE6] font-semibold text-xl cursor-pointer">Learnify</Link></div>
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
        {showDropDown && <DropDown setSavedCourses={setSavedCourses} setPassword={setPassword} setSetting={setSetting} setShowDropDown={setShowDropDown} />}
      </div>
      {setting && <Setting setSetting={setSetting} />}
      {Password && <ChangePassword setPassword={setPassword} />}
      {/* {savedCourses && <SavedCourses setSavedCourses={setSavedCourses} />} */}
    </div>
  )
}

export default Header