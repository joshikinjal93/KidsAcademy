import React from 'react'
import Banner from '../Banner'
import Facility from '../Facility'
import AboutSection from '../About'
import Teachers from '../Teachers'
import Testimonials from '../Testimonials'
import Subscribe from '../Subscribe'
import Features from '../Features'


function About() {
  return (
    <>
    <Banner props={{heading:"About Our KidsAcademy", page:"About us"}}/>
    <Facility/>
    <AboutSection />
    <Features/>
    <Teachers/>
    <Testimonials/>
    <Subscribe/>
   </>
  )
}

export default About