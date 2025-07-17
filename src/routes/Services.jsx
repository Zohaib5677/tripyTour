import React from 'react'
import Hero from '../components/Hero'
import Trip from '../components/Trip'
function Services() {
  return (
    <>
    <Hero 
    cName="hero-mid"
    heroImg="night.jpg"
    title="Services"
    // text="Explore the world with us"
    // buttontext="travel plan"
    // url="/"
    btnClass="hide"
    ></Hero>
    <Trip />
    </>
   ) 
}

export default Services