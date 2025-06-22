import React from 'react'
import Hero from '../../components/Hero'
import Discover from '../../components/Discover'
import Expert from '../../components/Expert'
import Emergency from '../../components/Emergency'
import Download from '../../components/Download'
import Features from '../../components/Features'

const Home = () => {
  return (
    <>
    <Hero />
    <Discover/>
    <Expert/>
    <Emergency/>
    <Download/>
    <Features/> 
    </>
  )
}

export default Home