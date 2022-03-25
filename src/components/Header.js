import React from 'react'

const Header = () => {
  return (
    <div className='p-12 flex justify-between items-center lg:w-4/5 mx-auto lg:py-12'>
        <img className='w-12' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="logo"  />
        <div className='text-xs'>
            <a className='border p-2 mr-2 rounded hover:bg-white hover:text-black hover:font-bold md:border-0 md:text-lg' href="#">credit score check</a>
            <a className='border p-2 rounded hover:bg-white hover:text-black hover:font-bold md:border-0 md:text-lg' href="#">credit card bill payment</a>
        </div>
    </div>
  )
}

export default Header