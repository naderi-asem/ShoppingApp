import React, { Fragment, useEffect } from 'react';
import productStyles from './Product.module.css';
import { BsTrash } from "react-icons/bs";

 

const Product = (props) => {
    const { product, onDelete, onIncrement, onDecrement/*, onChangeTitle*/ } = props;

    return (
        <div className={productStyles.product} id='products_container'>
            <p>product: {product.title}</p>

            <p>
               size:  {product.availableSize.map((s , index) => {
                const length = product.availableSize.length;
                const end = product.availableSize.indexOf(s);
                if(length-1 > end)
                    return <span key={index+Math.random()*100000}>{s + " - "}</span>;
                else {
                    return <span key={index+Math.random()*100000}>{s}</span>
                }
                // return <span key={index+Math.random()*100000} >{s}</span>
               })}
            </p>

            <p className={productStyles.product_price}>
                price: {product.price}
                <span className={productStyles.product_quantity}>{product.quantity}</span>
            </p>

            {product.discount}

            {/* <input type="text" onChange={onChangeTitle} value={product.title} /> */}

            

            <button className={`${productStyles.btn} ${productStyles.inc}`} onClick={onIncrement}>Increment</button>

            <button className={`${productStyles.btn} ${productStyles.inc} ${product.quantity === 1 && productStyles.remove}`} onClick={onDecrement}>
                {product.quantity === 1
                    ? <Fragment>
                        <BsTrash />
                        remove from cart
                    </Fragment>
                    : "Decrement"}
            </button>

            <button id='product-delete' className={productStyles.btn} onClick={onDelete}>Delete</button>

        </div>
    );
}


export default Product;