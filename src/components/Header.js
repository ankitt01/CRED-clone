import React, { useState } from 'react'

const Header = () => {
    const [clicked, setclicked] = useState(false)   
    const showSidebar = () => {console.log("clicked")}
  return (
    <div className='p-12 flex justify-between items-center lg:w-4/5 mx-auto lg:py-12'>
        <img className='w-12' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="logo"  />
        <div className='hidden lg:block text-xs'>
            <a className='border p-2 mr-2 rounded hover:bg-white hover:text-black hover:font-bold md:border-0 md:text-lg' href="#">credit score check</a>
            <a className='border p-2 rounded hover:bg-white hover:text-black hover:font-bold md:border-0 md:text-lg' href="#">credit card bill payment</a>
        </div>
        <div className='nav lg:hidden'>
            <svg onClick={showSidebar} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    </div>
  )
}

export default Header