import React, { useState } from "react";
// import Orders from "./Orders";
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
      setMenuTab({ profile: true, password: false, orders: false, delete: false });
    }
    if (inputValue === "password") {
      setMenuTab({ profile: false, password: true, orders: false, delete: false });
    }
    if (inputValue === "orders") {
      setMenuTab({ profile: false, password: false, orders: true, delete: false });
    }
    if (inputValue === "delete") {
      setMenuTab({ profile: false, password: false, orders: false, delete: true });
    };
  }

  return (
    <div>
      {/* need to fix z-index - tabs and buttons don't work on the card if set to -z-50 */}
      <div className="card mx-16 bg-base-100 shadow-xl mt-10">
        <div className="grid grid-cols-8 gap-4 card-body">
          {/* left side card */}
          <div className="col-start-2 col-span-2">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={require('../images/profile/profile-placeholder.png')}  alt="profile placeholder" />
              </div>
            </div>
            <div className="join join-vertical">
              <button onClick={changeMenuTab} value="profile" className="btn join-item">My Profile</button>
              <button onClick={changeMenuTab} value="password" className="btn join-item">Change Password</button>
              <button onClick={changeMenuTab} value="orders" className="btn join-item">Previous Orders</button>
              <button onClick={changeMenuTab} value="delete" className="btn join-item">Delete Account</button>
            </div>
          </div>

          {/* right side card */}
          <div className="col-start-4 col-span-4">
            <div id="profile" className={`${menuTab.profile ? "" : "hidden"}`}>
            <Profile 
              firstName={`${userData.firstName}`}
              lastName={`${userData.lastName}`}
              email={`${userData.email}`}
            />
            </div>
            <div id="password" className={`${menuTab.password ? "" : "hidden"}`}>
            <UpdatePassword />
            </div>
            <div id="orders" className={`${menuTab.orders ? "" : "hidden"}`}>
            <PreviousOrders />
            </div>
            <div id="delete" className={`${menuTab.delete ? "" : "hidden"}`}>
            <DeleteAccount 
            userId={`${userData._id}`}
            />
            </div>
          </div>
        </div>
      </div>

    {/* <div className="flex flex-col w-full border-opacity-50 mt-20 mb-5">
      <div className="divider text-2xl font-bold">PREVIOUS ORDERS</div>
    </div>

    <Orders /> */}
  </div>

  );
};

export default User;
