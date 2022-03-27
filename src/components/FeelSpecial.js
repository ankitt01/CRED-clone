import React from 'react'
import jsonData from "../components/data.json"

const FeelSpecial = () => {
const display = jsonData.map((item,id) => {
  console.log()
  return (
    <div className={`h-screen flex flex-col justify-between bg-[${item['img-src']}] md:bg-[${item['sm-img-src']}] bg-cover bg-center p-4 pl-12`}>
        <div className='lg:w-1/2 lg:ml-20'>
            <h1 className='text-7xl pb-4 font-bold w-1/2 md:text-8xl md:w-4/5 pt-40'>{item.head}</h1>
            <h3 className='text-2xl md:text-3xl font-bold'>{item['sub-head']}</h3>
        </div>
        <div className='pr-8 pb-8 md:pb-14 lg:pb-20 lg:w-1/2 lg:ml-20 xl:pb-40'>
            <p className='md:font-bold md:text-xl'>{item['sub-subhead']}</p>
            <button className='bg-white-bg text-black text-xl font-bold py-2 px-4 rounded-full mt-8 xl:mt-16 xl:py-4 xl:px-10 xl:text-2xl'>{item['btn-data']}</button>
        </div>
    </div>
  )
})
  return (
    display
  )
}

export default FeelSpecial