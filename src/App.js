// import Product from "./Components/Product/Product";
import React from 'react';
import appStyles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import ProductList from "./Components/ProductList/ProductList";
import ProductProvider from './Components/Providers/ProductProvider';
import Filter from './Components/Filter/Filter';

// import SearchBar from './Common/SearchBar/SearchBar';


const App = () => {
    return (
        <>
            <ProductProvider>
                <div className={appStyles.app_container} id='container'>
                    <Navbar />
                    <h1 className={`${appStyles.app_title}`}>Shopping App</h1>
                    {/* <SearchBar /> */}
                    <Filter />
                    <div className={appStyles.items_box}>
                        <ProductList />
                    </div>
                </div>
            </ProductProvider>
        </>
    );
}

export default App;