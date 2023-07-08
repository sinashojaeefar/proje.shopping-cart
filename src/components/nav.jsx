import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Nav = () => {
  return (
    <>
       <div className='header'>
        <div className='logo'>
            <h2>Shopping Cart</h2>
        </div>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to="/" className='link'>Home</Link>
                    </li>

                    <li>
                        <Link to="/" className='link'>Product</Link>
                    </li>

                    <li>
                        <Link to="/cart" className='link'>Cart</Link>
                    </li>

                    <li>
                        <Link to="/" className='link'>About</Link>
                    </li>
                </ul>
            </div>
       </div>
    </>
  )
}

export default Nav;