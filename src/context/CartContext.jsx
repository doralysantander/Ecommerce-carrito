import { createContext, useEffect, useState } from "react";

/* Creamos el context, se le puede pasar un valor inicial */
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState(() => {
    try {
      /* Verificamos si hay productos en el local storage,
      si hay algo lo parseamos porque se guarda como string 
      y si no hay nada devolvemos un array vacio */
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });


  /* Cada vez que se actualize el carrito seteamos el local storage para guardar los productos */
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  /* Creamos la funcion para agregar productos al carrito */
  const AddItemToCart = (product) => {
    /* Recibimos un producto y nos fijamos si ya esta en el carrito */
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    /* Si el producto se encuentra en el carrito, recorremos el carrito
    y al producto le sumamos uno a la cantidad, sino retornamos el carrito como estaba */
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
      /* Si el producto no se encuentra al carrito, lo agregamos y dejamos en uno la cantidad */
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  /* Creamos la funcion para borrar productos del carrito */
  const DeleteItemToCart = (productId) => {
    /* Buscamos el producto con su id */
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === productId
    );

    /* Si la cantidad del producto es igual a 1, filtramos el carrito y lo sacamos */
    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== productId)
      );
    } else {
      /* Si la cantidad es mayor a 1, recorremos el carrito
      y al producto le restamos uno en su cantidad, sino devolvemos el carrito como estaba */
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === productId) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  const sendMessage = () => { 
    let msg = []; 
    let priceTotal = 0;
    for (let item of cartItems) { 
      priceTotal += item.price * item.amount;
      let textopedido = item.description + " x" + item.amount + " precio c/u: " + item.price +  "%0A"; 
      msg += textopedido; 
    } 
    window.open(`https://api.whatsapp.com/send?phone=573173244337&text=Hola Abel, me interesan estos productos:%0A${msg} precioTotal: ${priceTotal}`
    
    ); 
  };

  /*Crear una funcion para eliminar todos los productos del carrito */


  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, AddItemToCart, DeleteItemToCart,sendMessage }} //estado del carro y 
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
