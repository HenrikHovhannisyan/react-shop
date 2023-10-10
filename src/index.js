import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouteList from "./routes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouteList/>
    </React.StrictMode>
);
