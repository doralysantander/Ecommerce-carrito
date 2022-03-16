import React from 'react'
//import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrusel from '../components/carrusel/Carrusel'
import Category from '../components/products/Category';
//rutas nuevas 

import Cart from '../components/Cart/Cart';
import {CartProvider} from '../context/CartContext'
import Products from'../components/products/Products';
import About from '../components/about/About'


const Landing = () => {
  return (

    <>      
            <Carrusel/>
            <About />
            <Category/> 
            <CartProvider>
             <Cart/>
            </CartProvider>
            

    </>
  )
}

export default Landing

