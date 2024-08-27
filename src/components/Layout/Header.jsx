import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.jpg";
import { FaUserGraduate, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";
import Setting from "../DropDown/UserDetails";
import ChangePassword from "../DropDown/ChangePassword";

const URL = import.meta.env.VITE_URL;

function Header() {
  const navigate = useNavigate();
  const [setting, setSetting] = useState(false);
  const [Password, setPassword] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/auth/check`, {
        credentials: "include",
      });
      if (response.status !== 200) {
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate]);


  const getClassName = ({ isActive }) => {
    return isActive
      ? "bg-[#0DAFE6] text-white px-4 py-2"
      : "text-[#0c8ab8] hover:bg-[#0DAFE6] hover:text-white px-4 py-2";
  };

  return (
    <div className="head py-2 flex justify-around items-center mb-2 sm:px-8">
      <div className="logo items-center hidden sm:flex">
        <img className="w-12 h-12" src={logo} alt="Learnify Logo" />
        <Link to="/" className="text-[#0DAFE6] font-semibold text-xl ml-2 cursor-pointer">
          Learnify
        </Link>
      </div>

      <div className="sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-[#0DAFE6] text-2xl" />
          ) : (
            <FaBars className="text-[#0DAFE6] text-3xl" />
          )}
        </button>
      </div>

      <ul
        className={`flex gap-6 items-center text-[#0DAFE6] sm:flex ${isMenuOpen
          ? "flex flex-col absolute top-16 justify-end left-0 w-full bg-white p-4"
          : "hidden"
          }`}
      >
        <li>
          <NavLink exact to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={getClassName}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us" className={getClassName}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className="relative flex items-center">
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className="flex gap-2 items-center cursor-pointer"
        >
          <FaUserGraduate className="text-[#0DAFE6] text-2xl" />
          <FaChevronDown className="text-[1rem]" />
        </div>
        {showDropDown && (
          <DropDown
            setPassword={setPassword}
            setSetting={setSetting}
            setShowDropDown={setShowDropDown}
          />
        )}
      </div>

      {setting && <Setting setSetting={setSetting} />}
      {Password && <ChangePassword setPassword={setPassword} />}
    </div>
  );
}

export default Header;
