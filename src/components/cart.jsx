import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Cart = ({cartItem, setcartItem}) => {

  function inc(product) {
    const exist = cartItem.find((x) => {
        return x.id === product.id;
    })

    setcartItem(cartItem.map((item) => {
        return item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item

    }))
  }

  function dec(product) {
    const exist = cartItem.find((x) => {
        return x.id === product.id;
    })

    setcartItem(cartItem.map((item) => {
        return item.id === product.id ? {...exist, quantity: exist.quantity - 1} : item

    }))
  }

  function removeCart(product) {
    const exist = cartItem.find((x) => {
      return x.id === product.id;
    })
    if(exist.quantity > 0) {
      setcartItem(cartItem.filter((x) => {
          return x.id !== product.id;
      }))
    }
  }

  const TotalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <>
      {cartItem.length === 0 && 
      <>
      <h2 className='empty_cart'>Cart Is Empty</h2>
        <Link to="/">
      <button className='shop_btn'>Shop Now</button>
        </Link>
      </>
      }

      <div className='cart_item'>
        <div className='cart_product'>
          {
            cartItem.map((item) =>{
                return(
                  <div className='cart_box' key={item.id}>
                  <div className='cart_product_item'>
                    <div className='cart_img_box'>
                      <img src={item.Img} alt={item.Title} />
                    </div>
  
                    <div className='cart_item_detail'>
                      <h2>{item.Title}</h2>
                      <h3>$ {item.price}</h3>
                      <button className='quantity_dec' onClick={() => dec(item)}>-</button>
                      <input type="text" value={item.quantity}/>
                      <button className='quantity_inc' onClick={() => inc(item)}>+</button>
                      <h3>Sub Total: $ {item.price * item.quantity}</h3>
                    </div>

                    <button className='remove_cart' onClick={() => removeCart(item)}>x</button>
                  </div>
                </div>
                )
            })
          }

        </div>
      </div>

      {
            cartItem.length > 0 && 
            <>
              <p className='total'>Total: $ {TotalPrice}</p>
              <button className='checkout'>Checkout</button>
            </>
          }
      
    </>
  )
}

export default Cart;