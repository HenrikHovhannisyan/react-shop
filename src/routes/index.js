import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Products from "../components/Products";
import NavBar from "../components/Navbar";
import Product from "../components/Product";
import {Provider} from "react-redux";
import store from "../redux/store";
import Cart from "../components/Cart";

const RouteList = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <NavBar/>
                <Routes>
                    <Route path={'/'} element={<App/>}/>
                    <Route path={'/products'} element={<Products/>}/>
                    <Route path={'/products/:id'} element={<Product/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    )
};

export default RouteList;