import React from 'react'

function ChooseFolder() {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-[290px] pr-14 h-full flex items-center justify-center border-r border-gray-300 relative bottom-20 overflow-hidden'>
                <p className='text-3xl text-black text-center'>Please choose a folder </p>
            </div>
            <div className=' w-[700px] h-full flex items-center justify-center relative bottom-20 overflow-hidden'>
                <p className='text-3xl text-black'>Please choose a folder first</p>
            </div>
        </div>
    )
}

export default ChooseFolder
