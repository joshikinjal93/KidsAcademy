import React from 'react'
import Banner from '../Banner'
import Achivements from '../Achivements'
import AboutSection from '../About'
import Testimonials from '../Testimonials'
import TeacherPage from '../TeacherPage'
import Partner from '../Partner'
import Subscribe from '../Subscribe'


function AboutStyle() {
  return (
    <>
      <Banner props={{heading:"About Our KidsAcademy", page:"About us"}}/>
      <AboutSection removeBg={true} />
      <Achivements/>
      <Testimonials desktopSlides={2}/>
      <TeacherPage/>
      <Partner removeBg={true}/>
      <Subscribe/>
    </>
  )
}

export default AboutStyle