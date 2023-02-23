import React from 'react';
import { FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Sidebar() {

  const sidebarData = [
    {
      path: "/main/home",
      icon: <FaHome />
    },
    {
      path: "/main/email",
      icon: <GrMail />
    },
    {
      path: "/main/contact",
      icon: <BsFillPersonFill />
    }
  ]
   
  const iconLink = "text-white flex h-14 items-center justify-center font-light text-xl";
  const activeLink = "text-white flex items-center justify-center font-light text-xl h-14 bg-blue-700";

  return (
    <div className='min-h-[91.3vh] flex w-full'>
      <div className='flex flex-col w-[45px] bg-[#0e1f33]'>
          {sidebarData.map((item, index) => (
            <NavLink key={index} to={item.path} className={({ isActive }) => isActive ? activeLink : iconLink}>
              <span>{item.icon}</span>
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Sidebar
