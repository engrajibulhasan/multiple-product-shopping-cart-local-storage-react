import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    const { id, productName, price, initQnty, stock, unit, image } = props.info;
    return (
      <div className="card-box">
        <h2>{productName}</h2>
        <img src={image} alt={productName} />
        <p>
          Price: {price} | Min Order {initQnty}
          {unit} | Stock {stock}
        </p>
        <button
          onClick={() =>
            props.addToCardHandle({
              id,
              productName,
              price,
              stock,
              unit,
              image,
              initQnty,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    );
};

export default ProductCard;