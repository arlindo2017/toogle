import React, { useState } from "react";
import Orders from "./Orders";
import Profile from "../components/user-page/Profile";
import UpdatePassword from "../components/user-page/UpdatePassword";
import PreviousOrders from "../components/user-page/PreviousOrders";
import DeleteAccount from "../components/user-page/DeleteAccount";

import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const User = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

  const [menuTab, setMenuTab] = useState({ profile: true, password: false, orders: false, delete: false });

  const changeMenuTab = (e) => {
    const { target } = e;
    const inputValue = target.value;
    if (inputValue === "profile") {
      console.log("profile tab");
      setMenuTab({ profile: true, password: false, orders: false, delete: false });
    }
    if (inputValue === "password") {
      console.log("password tab");
      setMenuTab({ profile: false, password: true, orders: false, delete: false });
  
    }
    if (inputValue === "orders") {
      console.log("orders tab");
      setMenuTab({ profile: false, password: false, orders: true, delete: false });
  
    }
    if (inputValue === "delete") {
      console.log("delete tab");
      setMenuTab({ profile: false, password: false, orders: false, delete: true });
  
    };
  }

  return (
    <div>
      <div className="join join-vertical">
              <button onClick={changeMenuTab} value="profile" className="btn join-item">My Profile</button>
              <button onClick={changeMenuTab} value="password" className="btn join-item">Change Password</button>
              <button onClick={changeMenuTab} value="orders" className="btn join-item">Previous Orders</button>
              <button onClick={changeMenuTab} value="delete" className="btn join-item">Delete Account</button>
            </div>
      <div className="card mx-56 bg-base-100 shadow-xl mt-10 -z-50">
        <div className="grid grid-cols-8 gap-4 card-body">
          {/* left side card */}
          <div className="col-start-2 col-span-2">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={require('../images/profile/profile-placeholder.png')}  alt="profile placeholder" />
              </div>
            </div>
            {/* <div className="join join-vertical">
              <button value="profile" className="btn join-item">My Profile</button>
              <button onClick={changeMenuTab} value="password" className="btn join-item">Change Password</button>
              <button onClick={changeMenuTab} value="orders" className="btn join-item">Previous Orders</button>
              <button onClick={changeMenuTab} value="delete" className="btn join-item">Delete Account</button>
            </div> */}
          </div>

          {/* right side card */}
          <div className="col-start-4 col-span-4">
            <div id="profile" className={`${menuTab.profile ? "" : "hidden"}`}>
            <Profile />
            </div>
            <div id="password" className={`${menuTab.password ? "" : "hidden"}`}>
            <UpdatePassword />
            </div>
            <div id="orders" className={`${menuTab.orders ? "" : "hidden"}`}>
            <PreviousOrders />
            </div>
            <div id="delete" className={`${menuTab.delete ? "" : "hidden"}`}>
            <DeleteAccount />
            </div>
            
            

            {/* {
              setMenuTab.profile? <Profile /> :
              setMenuTab.password? <UpdatePassword /> :
              setMenuTab.orders? <PreviousOrders /> :
              setMenuTab.delete? <DeleteAccount /> :
              null
            } */}

            
            {/* <h2 className="card-title">Account Information</h2> */}
            {/* info form */}
            {/* <p>First Name: {userData.firstName}</p>
            <p>Last Name: {userData.lastName}</p>
            <p>Email: {userData.email}</p>
            <p>Password: (option to update password)</p>            */}

          </div>
        </div>
      </div>

    <div className="flex flex-col w-full border-opacity-50 mt-20 mb-5">
      <div className="divider text-2xl font-bold">PREVIOUS ORDERS</div>
    </div>

    <Orders />
  </div>

  );
};

export default User;
