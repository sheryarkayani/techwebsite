"use client"

import TechStack from "../components/ServicesPage/TechStack"
import ServicesGrid from "../components/ServicesPage/ServicesGrid"
import ServiceHero from "../components/ServicesPage/ServiceHero"
import HomeCases from "../components/Homecomp/HomeCases"

// const Services = () => {
const Services: React.FC = () => {

  return (

    <div className="bg-[#0a0a13] ">
      <ServiceHero />
     <TechStack />
     <ServicesGrid />
     <HomeCases />

    </div>

     
  )
}

export default Services

