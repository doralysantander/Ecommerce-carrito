import React from 'react'
import Cart from '../Cart/Cart'
import Products from '../products/Products'
import Carrusel from '../carrusel/Carrusel'
import About from '../about/About'
import Category from '../products/Category'

const Home = () => {
  return (
    <div>
          
         <Carrusel/>
         <Cart />
        <About />  
        <Category/>
        <Products/>
    </div>
  )
}

export default Home