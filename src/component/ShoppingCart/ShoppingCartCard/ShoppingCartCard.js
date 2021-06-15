import React, { useEffect, useState } from 'react';
import './ShoppingCartCard.css';

const ShoppingCartCard = (props) => {
    //console.log(props.cartData,'abcd');
  const { id, productName, price, initQnty, stock, unit, image } = props.cartData;
  
  //state management
  const [qnty, setQnty] = useState(initQnty);

  useEffect(() => {
    props.handleTotal(price, "p");
  }, [price]);

  const handlePlus = () => {
    if (qnty < stock) {
      setQnty(qnty + 1);
      props.handleTotal(price, "p");
    }
  }

  const handleMinus = () => {
    if (qnty > initQnty) {
      setQnty(qnty - 1);
      props.handleTotal(price, "m");
    } 
    console.log(qnty);
  }

  const handleOnChange = () => {
    console.log(qnty);
  }



    return (
      <div className="cartCart">
        <div className="imageDiv">
          <img src={image} alt={productName} />
        </div>
        <div className="infoDiv">
          <h2>{productName}</h2>
          <p>
            Price: {price} | Min Order {initQnty}
            {unit} | Stock {stock}
          </p>

          <div className="idBtn">
            <button onClick={handleMinus}>-</button>
            <input
              type="text"
              value={qnty}
              min={qnty}
              max={stock}
              onChange={handleOnChange}
            />
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <div className="itemTotal">
          <strong>
            {qnty}x{price} ={qnty*price}
          </strong>
        </div>
        <div className="actionDiv">
          <button onClick={() => alert("Button not functional")}>Remove</button>
        </div>
      </div>
    );
};

export default ShoppingCartCard;