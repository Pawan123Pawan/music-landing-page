import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ReviewSection from './components/ReviewSection'
import Content from './components/Content'
import AppScreenShot from './components/AppScreenShot'
import Membership from './components/Membership'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollTopButton'

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar/>
      <HeroSection/>
      <ReviewSection/>
      <Content/>
      <AppScreenShot/>
      <Membership/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default App