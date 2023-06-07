import React, { useState, useEffect } from "react";
// import Orders from "./Orders";
import Profile from "../components/user-page/Profile";
import UpdatePassword from "../components/user-page/UpdatePassword";
import PreviousOrders from "../components/user-page/PreviousOrders";
import DeleteAccount from "../components/user-page/DeleteAccount";
import ProviderSetup from "../components/user-page/ProviderSetUp";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { UPDATE_PROVIDER } from "../utils/mutations";

const User = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

  // provider toggle button
  const [providerToggle, setProviderToggle] = useState(userData.isProvider);

  const [updateProvider, { mutate, isLoading: isMutating }] = useMutation(UPDATE_PROVIDER);

  useEffect(() => {
    if (userData) {
      providerMongo();
    }
  }, [providerToggle]);

  useEffect(() => {
    setProviderToggle(data?.me?.isProvider)
  },[data])

  async function providerMongo() {
    try {
      await updateProvider({
        variables: { isProvider: providerToggle },
      });
    } catch (error) {
      console.error(error);
    }
  }

  // function that updates state for provider toggle
  const updateProviderToggle = async (e) => {
    console.log(e.target.checked);
    setProviderToggle(prevProviderToggle => !prevProviderToggle);
  };

  const [menuTab, setMenuTab] = useState({
    profile: true,
    provider: false,
    password: false,
    orders: false,
    delete: false,
  });

  const changeMenuTab = (e) => {
    const { target } = e;
    const inputValue = target.value;
    if (inputValue === "profile") {
      setMenuTab({
        profile: true,
        provider: false,
        password: false,
        orders: false,
        delete: false,
      });
    }
    if (inputValue === "provider") {
      setMenuTab({
        profile: false,
        provider: true,
        password: false,
        orders: false,
        delete: false,
      });
      setMenuTab({
        profile: true,
        provider: false,
        password: false,
        orders: false,
        delete: false,
      });
    }
    if (inputValue === "provider") {
      setMenuTab({
        profile: false,
        provider: true,
        password: false,
        orders: false,
        delete: false,
      });
    }
    if (inputValue === "password") {
      setMenuTab({
        profile: false,
        provider: false,
        password: true,
        orders: false,
        delete: false,
      });
    }
    if (inputValue === "orders") {
      setMenuTab({
        profile: false,
        provider: false,
        password: false,
        orders: true,
        delete: false,
      });
    }
    if (inputValue === "delete") {
      setMenuTab({
        profile: false,
        provider: false,
        password: false,
        orders: false,
        delete: true,
      });
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className="form-control w-52">
        {/* <div className="collapse bg-base-200"> */}
        <label className="cursor-pointer label">
          <span className="label-text">Provider Status</span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={providerToggle}
            onChange={updateProviderToggle}
          />
        </label>
      </div>
      {/* need to fix z-index - tabs and buttons don't work on the card if set to -z-50 */}
      <div className="card mx-16 bg-base-100 shadow-xl mt-10">
        <div className="grid grid-cols-8 gap-4 card-body">
          {/* left side card */}
          <div className="col-start-2 col-span-2">
            <div className="avatar">
              <div className="w-24 rounded-full">
                { userData?.profileImage ? (
                  <img src={require(`../images/profile/${userData?.profileImage}`)} alt="profile placeholder" />
                  
                ) : (
                  <img src={require('../images/profile/profile-placeholder.png')}  alt="profile placeholder" />
                )}
              </div>
            </div>
            <div className="join join-vertical">
              <button
                onClick={changeMenuTab}
                value="profile"
                className="btn join-item"
              >
                My Profile
              </button>
              {/* show this button only if user is has a provider toggled enabled */}
              <button
                onClick={changeMenuTab}
                value="provider"
                className={"btn join-itme " + (providerToggle ? "" : "hidden")}
              >
                Provider Setup
              </button>
              <button
                onClick={changeMenuTab}
                value="password"
                className="btn join-item"
              >
                Change Password
              </button>
              <button
                onClick={changeMenuTab}
                value="orders"
                className="btn join-item"
              >
                Previous Orders
              </button>
              <button
                onClick={changeMenuTab}
                value="delete"
                className="btn join-item"
              >
                Delete Account
              </button>
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
            {/* Provider Setup */}
            <div
              id="provider"
              className={`${menuTab.provider ? "" : "hidden"}`}
            >
              <ProviderSetup />
            </div>
            <div
              id="password"
              className={`${menuTab.password ? "" : "hidden"}`}
            >
              <UpdatePassword 
            userId={`${userData._id}`}
            />
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
