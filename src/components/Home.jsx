import React from 'react'
import Navbaar from './Navbaar'
import HeroSection from './HeroSection'
import Tagline from './Tagline'
import Cards from './Cards'
//this is the home page//
const Home = () => {
  return (
    <div>
     <Navbaar/>
     <HeroSection/>
     <Tagline/>
     <Cards/>
    </div>
  )
}

export default Home