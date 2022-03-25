import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className='text-sm sm:text-2xl font-bold bg-light-black flex flex-col md:flex-row justify-center items-center p-2'>
        <p className=''>pay credit card bill. earn guaranteed ₹200 back.</p>
        <a href="">
          <div className='flex text-blue-500 md:ml-4 outline-0 flex items-center'>
            claim now 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 origin-bottom -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </a>
      </div>

      <div className='w-4/5 m-auto font-bold my-40 md:text-center 2xl:w-3/4'>
        <h1 className='text-7xl md:text-8xl lg:text-9xl leading mb-4 xl:mb-16 md:mb-8'>rewards for paying credit card bills.</h1>
        <h3 className='text-2xl xl:text-3xl'>join 7.5M+ members who win rewards and cashbacks everyday</h3>
        <button className='bg-white-bg text-black text-xl font-bold py-2 px-4 rounded-full mt-4 xl:mt-16 xl:py-4 xl:px-10 xl:text-2xl'>Download CRED</button>
      </div>
    </div>
  )
}

export default HeroSection