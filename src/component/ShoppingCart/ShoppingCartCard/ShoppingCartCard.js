import React, { useContext } from 'react';
import { CartContext } from "../../../App";
import './ShoppingCartCard.css';

const ShoppingCartCard = (props) => {

  //console.log(props.cartData,'abcd');
  const { id, productName, price, initQnty, qnty, stock, unit, image } = props.cartData;
  
  //state management
  const [cart, setCart] = useContext(CartContext);


  // Increment Decrement  Product
  const updateCart = (clickType) => {
    if (clickType === 'plus') {
      if (qnty < stock) {
        cartManager(clickType);
      }
    } else {
      if (qnty > initQnty) {
        cartManager(clickType);
      }
    }
  }


  const cartManager = (clickType) => {
    let update;
    const oldCart = [...cart];
    const currentProduct = oldCart[props.index];
    if (clickType === 'plus') {
      update = currentProduct.qnty + 1;
    } else {
      update = currentProduct.qnty - 1;
    }
    currentProduct.qnty = update;
    setCart(oldCart);
    //addToDatabaseCart(id, update);
    localStorage.setItem(id, update);
  };



  return (
    <div className="cartCart">
      <div className="imageDiv">
        <img src={image} alt={productName} />
      </div>
      <div className="infoDiv">
        <h2>{productName} </h2>
        <p>
          Price: {price} | Min Order {initQnty}
          {unit} | Stock {stock}
        </p>

        <div className="idBtn">
          <button onClick={() => updateCart("minus")}>-</button>
          <input
            type="text"
            value={qnty}
            min={qnty}
            max={stock}
            readOnly
          />
          <button onClick={() => updateCart("plus")}>+</button>
        </div>
      </div>
      <div className="itemTotal">
        <strong>
          {qnty}x{price} ={qnty * price}
        </strong>
      </div>
      <div className="actionDiv">
        <button onClick={() => props.removeProduct(id)}>Remove</button>
      </div>
    </div>
  );
};

export default ShoppingCartCard;