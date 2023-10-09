import React, {memo, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Skeleton from "react-loading-skeleton";

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
            }

            return () => {
                componentMounted = false;
            }
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-lg-3 col-sm-6 mb-4">
                    <Skeleton height={350}/>
                </div>
                <div className="col-lg-3 col-sm-6 mb-4">
                    <Skeleton height={350}/>
                </div>
                <div className="col-lg-3 col-sm-6 mb-4">
                    <Skeleton height={350}/>
                </div>
                <div className="col-lg-3 col-sm-6 mb-4">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    };

    const filterProduct = (cat) => {
        const updateList = date.filter((x) => x.category === cat);
        setFilter(updateList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center mb-5">
                    <button className="btn btn-outline-dark m-1" onClick={() => setFilter(date)}>All</button>
                    <button className="btn btn-outline-dark m-1" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark m-1" onClick={() => filterProduct("women's clothing")}>Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark m-1" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark m-1" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div className="col-lg-3 col-sm-6 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <Image className="card-img-top product_img" src={product.image} alt={product.title}
                                       height={250}/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                </div>
                            </div>
                        </div>
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
