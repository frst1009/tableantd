import React, { useState } from "react";
import ResponsiveAppBar from "./Navbar";
import ProductCard from "./ProductCard";


function Basket(data) {
  const [basketItems, setBasketItems] = useState([]);

  const handleClick = (id) => {
    const productToAdd = data.find((product) => product.id === id);
    setBasketItems([...basketItems, productToAdd]);
  }

  return (
    <>
      <ResponsiveAppBar />
      <div>
        <h2>Basket Items</h2>
        <ul>
          {basketItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <ProductCard handleClick={handleClick} />
    </>
  );
}

export default Basket;