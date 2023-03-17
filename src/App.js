import React from 'react'

import { About, Footer, Header, Work, Skills, Testimonial, Profile } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header />
        <Profile />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
    </div>
  )
}

export default App
