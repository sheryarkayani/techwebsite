"use client"

import AboutHero from '../components/About/AboutHero'
import AboutEmpower from '../components/About/AboutEmpower'
import AboutTeam from '../components/About/AboutTeam'

// function About() {
  const About: React.FC = () => {

  return (
    <div className="bg-[#0a0a13]">
        <AboutHero />
        <AboutEmpower />
        <AboutTeam />
    </div>
  )
}

export default About
