import React, {memo} from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className={"hero"}>


            <Products/>
        </div>
    );
};

export default memo(Home);
