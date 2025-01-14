import React from 'react'
import Hero from './components/Hero'
import Product from './product/page'
import Feature from './components/Feature'
import Contact from './contact/page'
import SingleProduct from './components/SingleProduct'
import About from './about/page'


const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Product/>
      <SingleProduct/>
      <Feature/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Homepage
