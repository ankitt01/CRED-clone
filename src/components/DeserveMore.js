import React from 'react'

const DeserveMore = () => {
  return (
    <div>
        <div className={`min-h-[1125px] lg:h-auto flex flex-col justify-center bg-smDeserve md:bg-deserve bg-cover bg-center p-4 pl-12 pb-20 lg:p-4`}>
            <div className='lg:w-1/2 lg:ml-20'>
                <h1 className='text-7xl font-bold w-1/2 md:text-8xl md:w-4/5 pt-20'>feel special more often.</h1>
                <h3 className='text-2xl pb-80 md:pb-40 md:text-3xl font-bold'>exclusive rewards for paying your bills</h3>
            </div>
            <div className='pr-8 pb-8 md:pb-14 lg:pb-20 lg:w-1/2 lg:ml-20 xl:pb-40'>
                <p className='md:font-bold md:text-xl'>every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.</p>
                <button className='bg-white-bg text-black text-xl font-bold py-2 px-4 rounded-full mt-8 xl:mt-16 xl:py-4 xl:px-10 xl:text-2xl'>Explore rewards</button>
            </div>
        </div>
    </div>
  )
}

export default DeserveMore