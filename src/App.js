
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Carrusel from './components/carrusel/Carrusel';
import Category from './components/products/Category';
import Products from './components/products/Products';
import Landing from './pages/Landing';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Landing/>}/>
      <Route path="/carrusel" element={<Carrusel/>}/>
      <Route path="/productos" element={<Category/>}/>
      {/*<Route path="/carrito" element={<Cart/>}/>*/}
      <Route path="/lista-productos" element={<Products/>}/>
     
    
    </Routes>
  
    <CartProvider>
    <Products/>
    <Cart/>
    </CartProvider>
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