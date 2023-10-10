import React, {memo} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const NavBar = () => {
    const state = useSelector((state) => state.handleCart);
    return (
        <Navbar expand="lg" className="bg-body-light py-3 shadow-sm">
            <Container>
                <NavLink to="/" className={'fw-bold fs-4 navbar-brand'}>React-Shop</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                    <div className="buttons d-flex">
                        {/*<Link to={"/login"} className={"btn btn-outline-dark"}>
                            <i className="fa fa-sign-in me-1"/> Login
                        </Link>
                        <Link to={"/register"} className={"btn btn-outline-dark ms-2"}>
                            <i className="fa fa-user-plus me-1"/> Registration
                        </Link>*/}
                        <Link to={"/cart"} className={"btn btn-outline-dark"}>
                            <i className="fa fa-shopping-cart me-1"/> Cart ({state.length})
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default memo(NavBar);
