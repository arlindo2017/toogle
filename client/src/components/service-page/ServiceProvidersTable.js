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
      console.log("line 23 data", data)
    } catch (error) {
      console.error("THIS IS TOTALLY NOT AN ERROR");
    }
    // Auth.logout();
    // return <Navigate replace to="/" />;
  };

  //console.log(userData);

  const [childDate, setChildDate] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [orderReady, setOrderReady] = useState(false);

  const updateDate = (data) => {
    //Function for child element to update
    setChildDate(data);
  };

  useEffect(() => {
    printOrderDetails();
  }, [selectedProvider]);

  function updateProvider(e) {
    setSelectedProvider(e.target.name);
    //console.log(selectedProvider);
  }
  const printOrderDetails = async (e) => {
    //Function that will get the details we need for the order
    const orderDetails = {
      services: props.data.service._id,
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
      console.log("not placing an order", orderDetails);
      setOrderReady(false);
      return;
    }
    setOrderReady(true);
    console.log("place an order", orderDetails);
    handleCreateOrder(orderDetails);
    window.my_modal_1.showModal();
  };

  //console.log("props", props);
  const providers = props.data?.service?.serviceProviders || [];
  //console.log(providers);

  if (!Array.isArray(providers)) {
    // Handle the case where providers is not an array
    return <p>No service providers available.</p>;
  }

  return (
    <>
      <div className="divider text-2xl font-bold">SELECT DATE &amp; TIME</div>
      <div className="m-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg  flex flex-row items-center justify-center">
        <div className="flex  ">
          <DatePicker1Presentation updateDate={updateDate} />
        </div>
      </div>
      <div className=" px-10">
        <div className="flex items-center justify-center"></div>
        <div className="divider text-2xl font-bold">CHOOSE YOUR PROVIDERS</div>
        <table className="table ">
          <thead>
            <tr>
              <th className="text-lg">Provider</th>
              <th className="text-lg">Email</th>
              <th className="text-lg">Ratings</th>
              <th className="text-lg">Select Provider</th>
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

                    <button
                      className="btn btn-accent focus:outline-none focus:ring focus:ring-red-300 w-52"
                      name={provider._id}
                      onClick={updateProvider}
                    >
                      Hire {provider.firstName} {provider.lastName}
                    </button>
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

      {/* Open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box ">
          <p className="font-bold text-3xl flex justify-center">
            Processing Your Order!
          </p>
          <progress className="progress progress-accent  w-56 m-2"></progress>
          <p className="py-1 text-center">
            Thank you for your order, and of course, thank you for choosing
            Toogle! We look forward to helping you find your next Toogle
            professional!
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <Link className="btn btn-accent" to="/orders">
              View Order
            </Link>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ServiceProvidersTable;
