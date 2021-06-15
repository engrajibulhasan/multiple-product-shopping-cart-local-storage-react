import React, { useContext, useState } from 'react';
import { CartContext } from '../../App';
import './ShoppingCart.css';
import ShoppingCartCard from './ShoppingCartCard/ShoppingCartCard';


const ShoppingCart = () => {
    //Data fetching from context API
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const handleTotal = (ammount,type) => {
    console.log(ammount, 'changed');
    if (type === 'p') {
      setTotal(total + ammount);
    } else {
      setTotal(total - ammount);
    }
  }

  const tax = total * 0.05;
  const grandTotal = total + tax;
    
  
  return (
    <div className="shopping-cart">
      <h1>Your have {cart.length} product in cart</h1>
      <div className="shopping-cart-products">
        {cart.map((cp) => (
          <ShoppingCartCard
            key={cp.id}
            cartData={cp}
            handleTotal={handleTotal}
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