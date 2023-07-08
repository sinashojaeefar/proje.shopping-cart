import React from 'react';
import Detail from './productDetail';
import './style.css';

const Product = ({addtocart}) => {
  return (
    <>
      <div className='product-container'>
          <div className='product'>
              {
            Detail.map((curElm) => {
                return (
                  <>
                    <div className='product-box' key={curElm.id}>
                        <div className='img-box'>
                            <img src={curElm.Img} alt={curElm.Title} />
                        </div>

                        <div className='detail'>
                            <h4>{curElm.Cate}</h4>
                            <h3>{curElm.Title}</h3>
                            <p>$ {curElm.price}</p>
                            <button className='addtocart' onClick={() => addtocart (curElm)}>
                              Add To Cart</button>
                        </div>
                    </div>
                  </>
                )
            })
          }
          </div>
      </div>
  
    </>
  )
}

export default Product;