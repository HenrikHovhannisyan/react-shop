import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch({type: "DELITEM", payload: item});
    };

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <Container className="py-4">
                    <button onClick={() => handleClose(cartItem)} className="btn-close float-end"
                            aria-label="Close"/>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">${cartItem.price}</p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <Container className="py-4">
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <h3>Your Cart is Empty</h3>
                </div>
            </Container>
        );
    };

    const button = () => {
        return (
            <Container className="text-center mb-5">
                <Link to="/checkout" className="btn btn-outline-success">
                    Proceed To checkout
                </Link>
            </Container>
        );
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            <Container>
                {state.length !== 0 && state.map(cartItems)}
            </Container>
            {state.length !== 0 && button()}
        </>
    )
};

export default memo(Cart);
