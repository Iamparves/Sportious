import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="container">
                <div className="notFound__inner">
                    <h2>404!</h2>
                    <h3>Page Not Found</h3>
                    <Link className="btn__primary" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;