import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import SkillSection from '../SkillSection/SkillSection'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <SkillSection/>
    </div>
  )
}

export default Home
