import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Rout from './components/rout';

function App() {
  const [cartItem, setcartItem] = useState([]);
  const addtocart = (product) => 
  {
      const exist = cartItem.find((x) => {
        return x.id === product.id;
      })
      if(exist) {
        alert("This Product is Already");
      }
      else {
        setcartItem([...cartItem, {...product, quantity: 1}])
      }

      alert("This Product has added to cart")
  }

  return (
    <>
        <Router>
            <Nav />
            <Rout addtocart= {addtocart} cartItem={cartItem} setcartItem={setcartItem}/>
        </Router>
    </>
  );
}

export default App;
