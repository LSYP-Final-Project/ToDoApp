import React from 'react';
import { Link } from 'react-router-dom';
import { SvgPageNotFound } from '../svg'

const PageNotFound = () => (
    <div className="container">
        <div className="row">
            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-primary btn-lg" aria-label="Back to Home Page">
                    <div className="d-flex align-items-center">
                        <span class="material-icons me-2">home</span>
                        Take Me Home
                    </div>
                </Link>
            </div>
        </div>
        <SvgPageNotFound />
    </div>
);

export default PageNotFound;