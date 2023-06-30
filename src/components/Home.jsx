import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <h1>Home Page</h1>
        <Footer/>
    </div>
  )
}
