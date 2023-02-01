import React, { useReducer, useContext } from "react";
// use nanoid to create id for component key. 
//It quickly generates short non-sequential url-friendly unique ids.
// import { nanoid } from 'nanoid';
import { productsData } from "../../db/productsDB";

// const idCreator = (text) => ({
//     completed: false,
//     id: nanoid(),
//     text
// });

// const initialState = [
//     { id: idCreator().id, title: "react js", price: "100 $", discount: <p>discount is 15%</p>, quantity: 1 },
//     { id: idCreator().id, title: "javascript", price: "90 $", discount: <p>discount is 10%</p>, quantity: 1 },
//     { id: idCreator().id, title: "html & css", price: "80 $", quantity: 1 }
// ];

const reducer = (state, actions) => {
    switch (actions.type) {
        case "increment": {
            const index = state.findIndex(p => p.id === actions.id);
            const product = { ...state[index] };
            product.quantity++;
            const newProducts = [...state];
            newProducts[index] = product;
            return newProducts;
        }
        case "decrement": {
            const index = state.findIndex(p => p.id === actions.id);
            const product = { ...state[index] };

            if (product.quantity === 1) {
                const filteredProducts = state.filter(p => p.id !== actions.id);
                return filteredProducts
            } else {
                product.quantity--;
                const newProducts = [...state];
                newProducts[index] = product;
                return newProducts;
            }
        }
        case "remove": {
            return state.filter(product => product.id !== actions.id);
        }
        case "filter": {
            if (actions.value === "")
                return productsData;
            else {
                const productSizeFiltered = productsData.filter(p => p.availableSize.indexOf(actions.value) >= 0);
                return productSizeFiltered;
            }
        }
        case "sort": {
            const sortedData = [...state];
            if (actions.value === "Decreasing") {
                const additivePrice = sortedData.sort((a, b) => b.price - a.price);
                return additivePrice;
            } else if (actions.value === "Additive") {
                const decreasingPrice = sortedData.sort((a, b) => a.price - b.price);
                return decreasingPrice;
            }
            else {
                const defaultState = productsData.filter(p => sortedData.includes(p));
                return defaultState;
            }
        }
        case "search": {
            const value = actions.event.target.value.toLowerCase();
            const searchedProduct = state.filter(P => P.title.toLowerCase().includes(value.trim()));
            return searchedProduct;
        }
        default:
            return productsData;
    }
}
const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const ProductProvider = ({ children }) => {



    const [products, dispatch] = useReducer(reducer, productsData)



    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    );
}

export default ProductProvider;
export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => useContext(ProductContextDispatcher);