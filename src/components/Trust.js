import React from 'react'

const Trust = () => {
  return (
    <div>
        <div className={`h-1205 lg:h-screen flex flex-col justify-between bg-smTrust md:bg-trust bg-cover bg-center p-4 pl-12 pb-20 lg:p-4`}>
            <div className='lg:w-1/2 lg:ml-20'>
                <h1 className='text-7xl pb-4 font-bold w-1/2 md:text-8xl md:w-4/5 pt-20'>we take your money matters seriously.</h1>
                <h3 className='text-2xl md:text-3xl font-bold'>so that you don’t have to.</h3>
            </div>
            <div className='pr-8 pb-8 md:pb-14 lg:pb-20 lg:w-1/2 lg:ml-20 xl:pb-40'>
                <p className='md:font-bold md:text-xl'>never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.</p>
                <button className='bg-white-bg text-black text-xl font-bold py-2 px-4 rounded-full mt-8 xl:mt-16 xl:py-4 xl:px-10 xl:text-2xl'>Experience the upgrade</button>
            </div>
        </div>
    </div>
  )
}

export default Trust