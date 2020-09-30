import React from 'react';
import { Link } from "react-router-dom";

import './Error404.scss';

export default function Error404() {
    return (
        <div className="error404">
            <h1>Error 404 !</h1>
            <h2>Page not found 😞</h2>
            <Link to="/" className="error404__go-home">Go Home</Link>
        </div>
    )
}
