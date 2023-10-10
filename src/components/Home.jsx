import React, {memo} from "react";
import Image from "react-bootstrap/Image";
import Background from "../assets/bg.jpg";

const Home = () => {
    return (
        <>
            <div className={"hero"}>
                <div className="card bg-dark text-white rounded-0 border-0">
                    <Image className="card-img background" src={Background} alt="Background" height="550"/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">
                                CHACK OUT ALL THE TRENDS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Home);
