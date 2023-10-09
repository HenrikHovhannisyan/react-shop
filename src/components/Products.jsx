import React, {memo, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Products = () => {
    const [date, setDate] = useState([]);
    const [filter, setFilter] = useState(date);
    const [isLoading, setIsLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setDate(await response.clone().json());
                setFilter(await response.json());
                setIsLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <Col className="text-center">
                <h2>Loading...</h2>
            </Col>
        )
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center mb-5">
                    <button className="btn btn-outline-dark m-1">All</button>
                    <button className="btn btn-outline-dark m-1">Men's Clothing</button>
                    <button className="btn btn-outline-dark m-1">Women's Clothing</button>
                    <button className="btn btn-outline-dark m-1">Jewelery</button>
                    <button className="btn btn-outline-dark m-1">Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
                                <div className="card h-100 text-center p-4">
                                    <Image className="card-img-top product_img" src={product.image} alt={product.title} height={250}/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };

    return (
        <div>
            <Container className={"my-5 py-5"}>
                <Row>
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr/>
                    </div>
                </Row>
                <Row className={"justify-content-center"}>
                    {isLoading ? <Loading/> : <ShowProducts/>}
                </Row>
            </Container>
        </div>
    );
};

export default memo(Products);
