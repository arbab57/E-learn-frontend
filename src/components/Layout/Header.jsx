import React, { useEffect, useState } from "react";
const URL = import.meta.env.VITE_URL;
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo2.jpg";
import { FaUserGraduate, FaChevronDown, FaBars } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";
import Setting from "../DropDown/UserDetails";
import ChangePassword from "../DropDown/ChangePassword";

function Header() {
  const navigate = useNavigate();
  const [setting, setSetting] = useState(false);
  const [Password, setPassword] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

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
    <div className="head py-2 flex justify-around items-center mb-2">
      <div className="logo flex justify-center items-center">
        <img className="w-12 h-12" src={logo} alt="" />
        <div>
          <Link className="text-[#0DAFE6] font-semibold text-xl cursor-pointer">
            Learnify
          </Link>
        </div>
      </div>
      <ul className="flex gap-5 justify-center items-center text-[#0DAFE6]">
        <li>
          <NavLink className={className} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={className} to="/Courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink className={className} to="/notfound1">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div onClick={() => setShowDropDown(true)} className="relative">
        <div className="flex gap-2 items-center cursor-pointer">
          <FaUserGraduate className="text-[#0DAFE6] text-xl" />
          <FaChevronDown className="text-xs" />
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
