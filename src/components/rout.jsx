import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Product from './product';
import Cart from './cart';

const Rout = ({addtocart, cartItem, setcartItem}) => {
  return (
    <>
      <Routes >
          <Route path='/' element={<Product addtocart={addtocart}/>} />
          <Route path='/cart' element={<Cart addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem}/>} />
      </Routes>
    </>
  )
}

export default Rout;