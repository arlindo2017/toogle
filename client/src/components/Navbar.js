import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

// https://daisyui.com/components/navbar/

const Navbar = () => {

    const userLogout = (event) => {
      event.preventDefault();
      Auth.logout();
    };


    // Verify whether or not user is signed in and display appropriate nav items
    function userNavigation() {
      if (Auth.loggedIn()) {
        return (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                  <img src={require("../images/profileplaceholder.png")} alt="profile placeholer"/>
                  </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/user" className="justify-between">
                      Profile
                  </Link>
                </li>
                <li><Link to="/order">Previous Orders</Link></li>
                <li><Link onClick={userLogout}>Logout</Link></li>
              </ul>
            </div>
          ) 
        } else {
          return (
            <Link to="/login" className="btn">Login/Signup</Link>
        )
      }
    }


    return (
        <div className="navbar bg-base-100">
            {/* nav bar for the collapsed hamburger menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li>
                        <summary>Services</summary>
                        <ul className="p-2">
                            <li><Link to="/service">Plumbing</Link></li>
                            <li><Link to="/service">Electrical</Link></li>
                            <li><Link to="/service">Landscaping</Link></li>
                            <li><Link to="/category">Browse All Categories</Link></li>
                        </ul>
                        </li>
                        {/* <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <Link to="/"><img className="h-14" src={require('../images/logo.png')} alt="toogle logo"></img></Link>
            </div>
            
            {/* nave bar for full page desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li tabIndex={0}>
                    <details>
                    <summary>Services</summary>
                    <ul className="p-2">
                        <li><Link to="/service">Plumbing</Link></li>
                        <li><Link to="/service">Electrical</Link></li>
                        <li><Link to="/service">Landscaping</Link></li>
                        <li><Link to="/category">Browse All Categories</Link></li>
                    </ul>
                    </details>
                </li>
                {/* <li><a>Item 3</a></li> */}
                </ul>
            </div>

            <div className="navbar-end">              
                {userNavigation()}
            </div>
        </div>        
    )
};

export default Navbar;