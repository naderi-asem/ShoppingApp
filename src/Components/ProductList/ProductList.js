import React/*, { Component }*/ from "react";
import Product from "../Product/Product"
import { Fragment } from "react";
import { useProducts, useProductsActions } from "../Providers/ProductProvider";


const ProductList = () => {

    const products = useProducts();
    const dispatch = useProductsActions();

    // console.log("productList: ", products);

    function renderProduct() {
        if (products.length === 0)
            return <h2>this products cart is empty</h2>;
        return products.map(product => {
            // console.log(product.id)
            return <Product
                product={product}
                key={product.id}
                onDelete={() => dispatch({ type: "remove", id: product.id })}
                onIncrement={() => dispatch({ type: "increment", id: product.id })}
                onDecrement={(e) => dispatch({ type: "decrement", event: e, id: product.id })}
            // onChangeTitle={(e) => dispatch({type: "edit", event: e, id: product.id})}
            >
                {product.discount}
            </Product>
        });

    }

    return (
        <Fragment>
            {renderProduct()}
        </Fragment>
    );
}


export default ProductList;