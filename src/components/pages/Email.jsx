import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Email() {

  const folders  = [
    {
      path:'/main/email/inbox',
      folderName: "Inbox"
    },
    {
      path: '/main/email/sent',
      folderName: "Sent"
    },
    {
      path: '/main/email/reminder',
      folderName: "Reminder"
    },
    {
      path: '/main/email/spam',
      folderName: "Spam"
    },
    {
      path: '/main/email/favorite',
      folderName: "Favorite"
    },
    {
      path: '/main/email/junks',
      folderName: "Junks"
    },
    {
      path: '/main/email/drafts',
      folderName: "Drafts"
    },
  ]

  const className = "text-white flex w-full h-14 items-center justify-start pl-12 font-light text-lg"
  const activeClassName = "text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md font-bold bg-blue-700"

  return (
    <>
      <div className='w-[16.7%] bg-[#152943] flex flex-col min-h-[91.3vh] items-start justify-start'>
        {folders.map((folder, index) => (
          <NavLink to={folder.path} key={index} className={({ isActive }) => isActive ? activeClassName : className}>
            <div>{folder.folderName}</div>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </>
  )
}

export default Email
