import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { user, setShowLogin, setUser, setToken, logout, credit } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setToken('')
    logout()
    navigate('/')
  }

  return (
    <div className='flex items-center justify-between py-4 px-4 sm:px-10'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-10 sm:w-32 lg:w-40' />
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3'>
            {/* Credit Button */}
            <button
              onClick={() => navigate('/buy')}
              className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'
            >
              <img className='w-5' src={assets.credit_icon} alt="credit" />
              <p className='text-xs sm:text-sm font-medium text-gray-600 cursor-pointer'>Credits: {credit}</p>
            </button>

            {/* Greeting */}
            <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>

            {/* Profile + Dropdown */}
            <div className='relative group'>
              <img src={assets.profile_icon} className='w-10 drop-shadow' alt='' />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10
                    text-black rounded pt-12'>
                <ul className='list-none m-0 p-1 bg-white rounded-xl border text-sm'>
                  <li onClick={handleLogout} className='py-1 px-2 cursor-pointer pr-10'>
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-2 sm:gap-5'>
            <button
              onClick={() => setShowLogin(true)}
              className='inline-flex gap-1.5 px-10 py-2.5 rounded-full bg-black text-white
                    cursor-pointer m-auto hover:scale-105 transition-all duration-700'
            >
              Get Started <img className='w-3' src={assets.arrow_icon} alt=''/>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
