import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DatePicker1Presentation } from "./Calendar";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../../utils/mutations";

const ServiceProvidersTable = (props) => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];

  const [
    createOrder,
    { createOrderData, createOrderLoading, createOrderError },
  ] = useMutation(ADD_ORDER);

  const handleCreateOrder = async (data) => {
    console.log(data);
    try {
      createOrder({ variables: data });
      // console.log(data)
    } catch (error) {
      console.error("THIS IS TOTALLY NOT AN ERROR");
    }
    // Auth.logout();
    // return <Navigate replace to="/" />;
  };

  //console.log(userData);

  const [childDate, setChildDate] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");

  const updateDate = (data) => {
    //Function for child element to update
    setChildDate(data);
  };

  useEffect(() => {
    printOrderDetails();
  }, [selectedProvider]);

  async function updateProvider(e) {
    return setSelectedProvider(e.target.name);
    //console.log(selectedProvider);
  }
  const printOrderDetails = async (e) => {
    //Function that will get the details we need for the order
    const orderDetails = {
      services: props.data.service.serviceCategory._id,
      user: userData._id,
      provider: selectedProvider,
      serviceQty: 1,
      orderPrice: props.data.service.servicePrice,
      serviceDate: childDate,
      //serviceDate: "07/11/2023",
    };
    const allValuesExist = Object.values(orderDetails).every(
      (value) => value !== undefined && value !== ""
    );
    if (!allValuesExist) {
      return;
    }
    console.log("place an order", orderDetails);
    handleCreateOrder(orderDetails);
  };

  //console.log("props", props);
  //console.log();
  const providers = props.data?.service?.serviceProviders || [];
  //console.log(providers);

  if (!Array.isArray(providers)) {
    // Handle the case where providers is not an array
    return <p>No service providers available.</p>;
  }

  return (
    <div className="overflow-x-auto p-20">
      <table className="table">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Email</th>
            <th>Ratings</th>
            <th></th>
            {/* Last th tag intentionally empty */}
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <tr key={provider._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={require(`../../images/profile/profile1.jpg`)}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {provider.firstName} {provider.lastName}
                    </div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>{provider.email}</td>
              <td>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  //checked
                  />
                </div>
              </td>
              {Auth.loggedIn() ? (
                // Render content when Auth.loggedIn is true
                <td>
                  {/* <button className="btn btn-outline btn-accent">
                    Select Provider
                  </button> */}
                  <div className="collapse max-w-xs flex">
                    <input type="checkbox" />
                    <div
                      id="isCollapsed"
                      className="btn btn-accent collapse-title"
                    >
                      Hire { provider.firstName } {provider.lastName} 
                    </div>
                    <div className="collapse-content h-25 flex-col flex">
                      <DatePicker1Presentation updateDate={updateDate} />
                      <button
                        name={provider._id}
                        className="btn btn-outline btn-accent"
                        //dataproviderId={provider._id}
                        onClick={updateProvider}
                      >
                        Schedule Service
                      </button>
                    </div>
                  </div>
                </td>
              ) : (
                // Render content when Auth.loggedIn is false
                <td>
                  <Link to="/login" className="btn btn-outline btn-accent">
                    Login/Signup
                  </Link>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceProvidersTable;
