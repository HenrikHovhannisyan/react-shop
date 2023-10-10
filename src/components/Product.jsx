import React, {memo, useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {addCart} from "../redux/action";
import {useParams} from "react-router";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setIsLoading(false);
        };

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <Col md={6}>
                    <Skeleton height={400}/>
                </Col>
                <Col md={6} style={{lineHeight: 2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <div className="d-flex">
                        <Skeleton height={50} width={100}/>
                        <Skeleton height={50} width={100} style={{marginLeft: 6}}/>
                    </div>
                </Col>
            </>
        )
    };

    const ShowProduct = () => {
        return (
            <>
                <Col md={6} className="mb-3">
                    <Image src={product.image} alt={product.title} height={400} width={400} fluid/>
                </Col>
                <Col md={6} className="mb-3">
                    <h4 className="text-uppercase text-black-50">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'/>
                    </p>
                    <h3 className="display-6 fw-bolder my-4">$ {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <Button variant="outline-dark" className="px-4 py-2" onClick={() => addProduct(product)}>Add To Cart</Button>
                    <Link to={'/cart'} className="btn btn-dark ms-2 px-3 py-2">Go To Cart</Link>
                </Col>
            </>
        );
    };

    return (
        <div>
            <Container className='py-5'>
                <Row className='py-4'>
                    {isLoading ? <Loading/> : <ShowProduct/>}
                </Row>
            </Container>
        </div>
    );
};

export default memo(Product);
