import React from 'react'
import { useParams } from 'react-router-dom';
import messages from '../data/messages.json'

function EmailDetail() {

  const { id } = useParams();
  const message = messages
    .filter(item => item.id === id)
    .reduce(pre => pre)

  // console.log(message);
  return (
    <div className='w-[830px] relative'>
      <div className='grid grid-cols-12 p-6'>
        <div className='col-span-12'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center sm:w-1/3 xl:w-1/5 gap-3'>
              <div className='sm:w-1/3 xl:w-1/4'>
                <img className='relative w-full pt-full rounded-full' src={message.to.avatarUrl} />
              </div>
              <div>
                <h6 className='text-md font-semibold'>{message.to.name}</h6>
                <p className='text-sm text-gray-500 font-light'>{message.to.email}</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-sm text-gray-500 font-light'>{new Date(message.timestamp).toLocaleTimeString('EN-Us', { hour12: false })}, {new Date(message.timestamp).toLocaleDateString('EN-Gb')}</p>
              <div className='flex items-center justify-end gap-2'>
                <button className='flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-gray-500 text-white hover:bg-gray-400'>Reply</button>
                <button className='flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-green-500 text-green-500 hover:bg-green-200'>Forward</button>
                <button className='flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-red-500 text-red-500 hover:bg-red-200'>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-12'>
          <div className='py-12'>
            <h2 className='text-4xl font-semibold mb-8'>{message.main.title}</h2>
            <div className='border-b pb-8'>
              <p>{message.main.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailDetail
