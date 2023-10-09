import React, {memo} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Navbars = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-light py-3 shadow-sm">
                <Container>
                    <Navbar.Brand href="#home" className={'fw-bold fs-4'}>React-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Products</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <div className="buttons">
                            <Link to={""} className={"btn btn-outline-dark"}>
                                <i className="fa fa-sign-in me-1"/> Login
                            </Link>
                            <Link to={""} className={"btn btn-outline-dark ms-2"}>
                                <i className="fa fa-user-plus me-1"/> Registration
                            </Link>
                            <Link to={""} className={"btn btn-outline-dark ms-2"}>
                                <i className="fa fa-shopping-cart me-1"/> Cart (0)
                            </Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
)
};

export default memo(Navbars);
