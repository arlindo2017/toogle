import React from "react";
import Orders from "./Orders";
import Profile from "../components/user-page/Profile";
import UpdatePassword from "../components/user-page/UpdatePassword";
import PreviousOrders from "../components/user-page/PreviousOrders";

import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const renderComponent = (tab) => {
  if (tab === "profile") {
    console.log("profile tab")
  }
  if (tab === "password") {
    console.log("password tab")

  }
  if (tab === "orders") {
    console.log("orders tab")

  }
  if (tab === "delete") {
    console.log("delete tab")

  }
}

const changeMenuTab = (e) => {
  const { target } = e;
  const inputValue = target.value;
  renderComponent(inputValue);
}

const User = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

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
            {renderComponent}

            
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
