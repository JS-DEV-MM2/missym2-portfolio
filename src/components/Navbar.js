import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="container">
                <Link to='/'>
                    <h1>Missy Maloney</h1>
                </Link>
            </div>
        </div>
    );    
}

export default Navbar;