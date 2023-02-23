import React from 'react';
import picture from "../../assets/images/under-construction.png";

function Contact() {
    return (
        <>
            <div className='w-[183px] flex flex-col bg-slate-800'>
                <p className=' text-white text-center py-16 text-lg'>Construction</p>
            </div>
            <div className='w-1/6'></div>
            <div className='w-4/6'>
                <img className='flex justify-center items-center py-14' src={picture} />
            </div>
        </>
    )
}

export default Contact
