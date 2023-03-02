import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/connect-logo-black.svg';
import Data from '../../components/data/users.json';

function Login({ email, setEmail, password, setPassword, user, setUser }) {

  const navigator = useNavigate();
  const handleSubmit = (e) => { 
    e.preventDefault();
    if(Data[0].email === email && Data[0].password === password) {
      setUser(true)
      navigator('/main/email')
    } else {
      setUser(false)
      alert('Invalid email or password');
    }
  }

  return (
    <div className='w-full bg-slate-800 min-h-screen'>
      <div className='container mx-auto relative min-h-screen'>
        <div className='rounded-lg mx-auto overflow-hidden absolute bg-white py-16 text-black px-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' style={{ width: 30 + "rem", height: "auto" }}>
          <div className='grid lg:grid-cols-12'>
            <div className='lg:col-span-12'>
              <div className='w-full text-center flex flex-col items-center gap-3'>
                <div className='w-full px-24'>
                  <img src={logo} alt='connect-logo' />
                </div>
                <div>
                  <p className='text-xl text-gray-700 font-light'>Login to check your email</p>
                </div>
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-12'>
            <div className='lg:col-span-12'>
              <form onSubmit={handleSubmit}>
                <div className='grid lg:grid-cols-12 gap-4'>
                  <div className='lg:col-span-12'>
                    <div>
                      <label className='block text-xl mb-2'>Email</label>
                      <select
                        className='w-full bg-white rounded-md border border-gray-900 py-2 px-3 shadow-md'
                        id='email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}>
                        <option value="">---Choose an email</option>
                        <option value={email}>test1@test.com</option>
                      </select>
                    </div>
                  </div>
                  <div className='lg:col-span-12'>
                    <div>
                      <label className='block text-xl mb-2'>Password
                      </label>
                      <input
                        className='w-full bg-white rounded-md border border-gray-900 py-2 px-3 shadow-md'
                        id='password'
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className='lg:col-span-12 mt-3'>
                    <button
                      type='submit'
                      className='flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md text-white hover:bg-gray-400 w-full bg-slate-800'>
                      Login
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
