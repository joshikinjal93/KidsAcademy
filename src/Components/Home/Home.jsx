import React from 'react'
import HomeBanner from './Homebanner'
import './home.css'
import Facility from '../Facility'
import About from '../About'
import Classes from '../Classes'
import Teachers from '../Teachers'
import Gallery from '../Gallery'
import Achivements from '../Achivements'
import Testimonials from '../Testimonials'
import Partner from '../Partner'
import Events from '../Events'
import Subscribe from '../Subscribe'

function Home() {
  return (
    <>
        <HomeBanner/>
        <Facility/>
        <About/>
        <Classes/>
        <Teachers/>
        <Gallery/>
        <Achivements/>
        <Testimonials/>
        <Partner/>
        <Events/>
        <Subscribe/>
    </>
  )
}

export default Home