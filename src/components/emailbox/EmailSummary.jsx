import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function EmailSummary({ messages, type }) {

    const folder = [...messages].filter(el => {
        return el.folder === type;
    })
    return (
        <div className='w-full flex'>
            <div className='w-[300px] h-full border-r border-gray-300 overflow-hidden'>
                <div className='overflow-scroll relative' style={{ height: "91vh" }} >
                    {folder.map((item) => (
                        <NavLink
                            to={item.id}
                            key={item.id}
                            className={({ isActive }) => isActive ? "flex justify-start items-start w-full px-4 py-4 gap-4 border-b border-gray-500 cursor-pointer bg-blue-500 text-white" : "flex justify-start items-start w-full px-4 py-4 gap-x-2 border-b border-gray-200 cursor-pointer"}
                        >
                            <div className='w-1/6'>
                                <img className='relative w-full pt-full rounded-full' src={item.to.avatarUrl} />
                            </div>
                            <div className='w-5/6 flex flex-col items-start justify-between'>
                                <div className='flex items-center justify-between w-full text-sm text-gray-500 font-medium'>
                                    <p>{item.to.name}</p>
                                    <p>{new Date(item.timestamp).toLocaleDateString('EN-Gb')}</p>
                                </div>
                                <div>
                                    <h6 className='text-md font-bold w-full line-clamp-1'>{item.main.title}</h6>
                                </div>
                                <div className='w-full'>
                                    <p className='w-full truncate ... text-sm line-clamp-3'>{item.main.content}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default EmailSummary