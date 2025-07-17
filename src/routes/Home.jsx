import React from 'react'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'

function Home() {
  return (
   <>
   <Hero 
   cName="hero"
   heroImg="12.jpg"
   title="Welcome to Trippy"
   text="Explore the world with us"
   buttontext="travel plan"
   url="/"
   btnClass="show"
   ></Hero>
   <Destination />
   <Trip />
   </>
  )
}

export default Home