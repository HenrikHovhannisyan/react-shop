import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Products from "../components/Products";
import NavBar from "../components/Navbar";
import Product from "../components/Product";

const RouteList = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/products'} element={<Products/>}/>
                <Route path={'/products/:id'} element={<Product/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteList;