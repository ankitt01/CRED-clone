import React from 'react'
import DeserveMore from '../components/DeserveMore'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'
import Trust from '../components/Trust'
import Security from '../components/Security'
import Brands from '../components/Brands'
import Parallax from '../components/Parallax'
const HomePage = () => {
  
  return (
    <div>
        <Header />
        <HeroSection />
        <ProductShowcase />
        <DeserveMore />
        <Brands />
        <Trust />
        <Parallax />
        <Security />
    </div>
  )
}

export default HomePage