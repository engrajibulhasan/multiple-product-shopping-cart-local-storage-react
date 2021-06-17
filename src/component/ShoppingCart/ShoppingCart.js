import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../App';
import './ShoppingCart.css';
import ShoppingCartCard from './ShoppingCartCard/ShoppingCartCard';


const ShoppingCart = () => {
  //Data fetching from context API
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  //console.log(value);
  //Product Remove from State
  const removeProduct = (id) => {
    const productAfterRemove = cart.filter((pd) => pd.id !== id);
    setCart(productAfterRemove);
    localStorage.removeItem(id);
  };

  //This will mount after cart firing
  useEffect(() => {
   // console.log("Cart Updated");
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      totalPrice += product.price * product.qnty;
    }
    setTotal(totalPrice);
  }, [cart]);

  const tax = total * 0.05;
  const grandTotal = total + tax;
  

  return (
    <div className="shopping-cart">
      <h1>Your have {cart.length} product in cart</h1>
      <div className="shopping-cart-products">
        {cart.map((cp, index) => (
          <ShoppingCartCard
            key={index}
            cartData={cp}
            removeProduct={removeProduct}
            index={index}
          ></ShoppingCartCard>
        ))}
      </div>
      <div className="total">
        <h4>Total: ${total}</h4>
        <h4>Tax (5%): ${tax} </h4>
        <h4>Grand Total: ${grandTotal}</h4>
      </div>
      
    </div>
  );
};

export default ShoppingCart;