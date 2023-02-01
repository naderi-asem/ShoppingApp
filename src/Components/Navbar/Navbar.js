import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useProducts } from '../Providers/ProductProvider';
import navbar from './navbar.module.css';


const Navbar = () =>  {
    
        const products = useProducts();
        // console.log("navbar: ", products)
        return (
            <header className={`${navbar.container}`}>
                <span className={navbar.icon_box}>
                    <AiOutlineShoppingCart />
                    <span>{products.length}</span>
                </span>
                <h3>Shopping App</h3>
            </header>
        )
}

export default Navbar;