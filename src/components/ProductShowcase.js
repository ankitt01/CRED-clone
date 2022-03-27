import React, { useEffect, useRef, useState } from 'react'

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] =  useState(false);
  const ref = useRef(null);
  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting)
      setShowAnimation(true)
  };
  const options = {
    root: null,
    rootMargin:'0px',
    threshold:0.5,
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options)
    if(!showAnimation) {
      if(ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current);
      }
    }
  },[])
  return (
    <div>
        <div ref={ref} className={`wrapper bg-right-top bg-product-showcase overflow-hidden ${showAnimation ? "scale-up-bottom" : ""} bg-cover`}>
          { showAnimation && <div className='images min-h-70 flex grow justify-center'>
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
              alt="product"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
              alt="product"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
              alt="product"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
              alt="product"
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
              alt="product"
            />
          </div>}
        </div>
    </div>
  )
}

export default ProductShowcase