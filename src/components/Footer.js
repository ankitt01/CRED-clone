import React from 'react'

const Footer = () => {
  return (
    <div className='p-12 bg-light-black md:flex md:text-lg xl:px-40'>
        <div className=' md:w-1/3 mr-20'>
            <img className='my-12' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png" alt="cred logo" class="sc-132u5v8-20 jsBpT"></img>
            <img className='w-60 mb-8' src="https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png" alt="security logo" class="sc-132u5v8-19 bzscUl"></img>
            <h3 className='font-bold pb-6'>complete security. no asterisks.</h3>
            <p className='text-sm pb-12'>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p> 
        </div>
        <div className='footer-sec flex grow md:mt-12 justify-between text-xs md:text-sm'>
            <div className='grow'>
                <h3 className='font-bold text-sm'>products</h3>
                <p>credit card bill payments</p>
                <p>credit score check</p>

                <h3 className='font-bold text-sm mt-12'>resources</h3>
                <p>articles</p>
                <p>blogs</p>
                <p>calculators</p>
            </div>
            <div className='grow'>
                <h3 className='font-bold text-sm'>CRED</h3>
                <p>credit card bill payments</p>
                <p>credit score check</p>
                
                <h3 className='font-bold text-sm  mt-12'>policy</h3>
                <p>articles</p>
                <p>blogs</p>
                <p>calculators</p>
                
            </div>
        </div>
    </div>
  )
}

export default Footer