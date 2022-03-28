import React from 'react'
import DeserveMore from '../components/DeserveMore'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'
import Trust from '../components/Trust'
import Security from '../components/Security'
const HomePage = () => {
  
  return (
    <div>
        <Header />
        <HeroSection />
        <ProductShowcase />
        <DeserveMore />
        <Trust />
        <Security />
    </div>
  )
}

export default HomePage