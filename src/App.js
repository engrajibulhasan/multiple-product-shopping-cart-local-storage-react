import { createContext, useState } from 'react';
import './App.css';
import ProductCard from "./component/ProductCard/ProductCard";
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import fakeData from './FakeData/fakeData';
export const CartContext = createContext();

function App() {
  //Storing fake data into products
  const products = fakeData;

  //State Management Array
  const [cart, setCart] = useState([]);


  //This function will trigger after clicking Add to Cart
  const addToCardHandle = (payload) => {
    const isSame = cart.find((cpd) => cpd.id === payload.id);
      
    if (isSame) {
      alert("Already in Cart!!");
    } else {
      const newCart = [...cart, payload]; //Spread Operator | concating old data with new data
      setCart(newCart); //Insertion into cart state
    }

    
  }


  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>
          Product List <span>Cart {cart.length}</span>
        </h1>
        <div className="product-container">
          {products.map((pd) => (
            <ProductCard
              key={pd.id}
              info={pd}
              addToCardHandle={addToCardHandle}
            ></ProductCard>
          ))}
        </div>
         <ShoppingCart></ShoppingCart> 
      </div>
    </CartContext.Provider>
  );
}

export default App;
