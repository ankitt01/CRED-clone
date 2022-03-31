import React from 'react'

const Ratings = () => {
  return (
    <div className='h-auto p-12 md:p-20'>
        <div className='md:flex justify-between lg:justify-around xl:w-4/5 xl:py-32 lg:m-auto'>
            <div className='pb-12'>
                <span className='text-9xl md:text-8xl font-bold'> 4.8 </span> <label className='text-4xl font-bold'>app store</label> <br />
                <i class="fa-solid fa-star pt-8"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i> <br />
                <button className='flex bg-white-bg text-black text-xl font-bold py-2 px-4 rounded-full mt-8 xl:mt-16 xl:py-4 xl:px-10 xl:text-2xl'><img src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" alt="apple" class="h-7 mr-2"></img>Download the app</button>
            </div>
            <div>
                <span className='text-9xl md:text-8xl font-bold'> 4.7 </span> <label className='text-4xl font-bold'>play store</label> <br />
                <i class="fa-solid fa-star pt-8"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i> <br />
                <button className='flex bg-white-bg text-black text-xl font-bold py-2 px-4 rounded-full mt-8 xl:mt-16 xl:py-4 xl:px-10 xl:text-2xl'><img src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png" alt="play store" class="h-7 mr-2" />Download the app</button>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Ratings