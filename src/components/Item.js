import React, { useState } from "react";

function Item({ name, category }) {

  let [inCart, setInCart] = useState(false)

  function handleItemChange(){
    setInCart((inCart)=> !inCart)
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ inCart ? "remove" : "add"} onClick={handleItemChange}>{inCart ? "Remove From" : "Add To"}  Cart</button>
    </li>
  );
}

export default Item;
