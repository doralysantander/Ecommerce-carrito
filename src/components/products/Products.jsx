//import {CartContext} from '../../context/CartContext'
import { useContext, useEffect, useState } from "react";
import {CartContext} from '../../context/CartContext'

import {ProductsData} from '../../Data/productsdata'

const Products = () => {

/* Traemos del context la funcion para agregar un producto */
const { AddItemToCart } = useContext(CartContext);
return (// aqui puedo colocar justyfy-items:center justify-content:center
<div div className="w-full h-5/6 gap-4 grid justify-items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
{ProductsData.map((product,i)=>(
<div key={i} className=" w-full border flex flex-col justify-center items-center border-lime-800">

<img
src={product.image}
alt="fallo la carga"
className="w-3/6 h-3/6 overflow-hidden aspect-square"
/>
<p>{product.description}</p>
<span>valor: ${product.price} Libra</span>
<div>
<button className="bg-green-900 cursor-pointer hover:bg-yellow-500 px-2 py-2 rounded-md text-zinc-100 font-bold" onClick={()=>AddItemToCart(product)}>AGREGAR</button>
</div>
</div>

))
}
</div>
)
}

export default Products
/*
<div className="border  flex flex-col justify-center items-center border-lime-800"> 



*/