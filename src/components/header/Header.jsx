import React from 'react';
import logoWhite from '../../assets/images/connect-logo-white.svg';
import { FaPowerOff } from "react-icons/fa";
import Sidebar from '../sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();  // URL tracking
    // console.log(location);
    
    return (
        <>
        <div className='flex w-full items-center h-14'>
            <div className='w-1/6 h-full bg-[#0e1f33] flex-shrink-0 flex items-center justify-start'>
                <img className='max-w-full w-3/4 h-4/6' src={logoWhite} />
            </div>
            <div className='w-full h-full flex items-center justify-between pl-4 pr-6 gap-3 border-b'>
                <div>
                    Pathname:
                    <span className='font-semibold'>{location.pathname}</span>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='flex flex-col justify-end items-end'>
                        <h6 className='font-bold text-sm'>Jonathan Kyle</h6>
                        <p className='text-sm text-gray-500 mb-0'>test1@test.com</p>
                    </div>
                    <div>
                        <img
                            src='https://i.pravatar.cc/320?img=65'
                            className='bg-center bg-cover bg-no-repeat relative h-10 w-10 rounded-full' />
                    </div>
                    <button
                        className='flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-red-500 text-white hover:bg-red-400'>
                        <FaPowerOff />
                    </button>
                </div>
            </div>
        </div>
        <Sidebar />
        </>
    )
}

export default Header
