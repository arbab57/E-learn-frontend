import React, { useEffect, useState } from "react";
const URL = import.meta.env.VITE_URL;
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.jpg";
import { FaUserGraduate, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import { FaUserGraduate, FaChevronDown, FaBars } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";
import Setting from "../DropDown/UserDetails";
import ChangePassword from "../DropDown/ChangePassword";

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
  }, []);

  const className = ({ isActive }) => {
    return isActive
      ? "bg-[#0DAFE6] text-white px-4 py-2"
      : "active:text-white active:bg-[#0DAFE6] px-4 py-2";
  };

  return (
    <div className="head py-2 flex justify-between items-center mb-2 px-4 sm:px-8 ">
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
            <FaBars className="text-[#0DAFE6] text-2xl" />
          )}
        </button>
      </div>

      <ul
        className={`flex gap-5 items-center text-[#0DAFE6] sm:flex ${
          isMenuOpen
            ? "flex flex-col absolute top-16 justify-end left-0 w-full bg-white p-4"
            : "hidden"
        }`}
      >
        <li>
          <NavLink
            exact
            className="hover:text-[#0c8ab8]"
            to="/"
            activeClassName="text-[#0c8ab8]"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:text-[#0c8ab8]"
            to="/courses"
            activeClassName="text-[#0c8ab8]"
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:text-[#0c8ab8]"
            to="/contact-us"
            activeClassName="text-[#0c8ab8]"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className="relative flex items-center ">
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className=" flex gap-2 items-center cursor-pointer"
        >
          <FaUserGraduate className="text-[#0DAFE6] text-xl" />
          <FaChevronDown className="text-sm" />
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
