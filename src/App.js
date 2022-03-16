
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carrusel from './components/carrusel/Carrusel';
import Category from './components/products/Category';
import Products from './components/products/Products';
import Landing from './pages/Landing';
//import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Home />
    </CartProvider>
    <Routes>
     <Route path="/" element={<Landing/>}/>
      <Route path="/carrusel" element={<Carrusel/>}/>
      <Route path="/productos" element={<Category/>}/>
      <Route path="/lista-productos" element={<Products/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
   
  
 
    </>
    
  );
}
export default App;
/* import ShoppingCart from './components/products/ShoppingCart';
<Route path="/lista-productos" element={<ShoppingCart/>}/>
 <Navbar/>
    <Routeaas>


    <CartProvider>
            <Cart/>
            <Products/>
    </CartProvider>


    <CartProvider>
    <Cart/>
    </CartProvider>


*/