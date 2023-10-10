import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import Products from "../components/Products";
import NavBar from "../components/Navbar";

const RouteList = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/products'} element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    )
};

export default RouteList;