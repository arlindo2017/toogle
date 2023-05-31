import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>These are the navigation links.</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category">Category</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>

        </div>
    )
};

export default Navbar;