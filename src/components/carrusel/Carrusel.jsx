import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import img1 from '../../assets/carrusel/apple-2.jpg'
import img2 from '../../assets/carrusel/apple-3.jpg'
import img3 from '../../assets/carrusel/apple-4.jpg'
import img4 from '../../assets/carrusel/apple-5.jpg'

const images =[img1,  img2, img3,img4]

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }
  //{ width: 1200, itemsToShow: 4 }
];

const Carrusel = () => {
  const [items, setItems] = useState(images)
  return (
    <div id="inicio"  className="App">
      <div className="controls-wrapper">
      </div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}><img src={item} alt="img"/></Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Carrusel


