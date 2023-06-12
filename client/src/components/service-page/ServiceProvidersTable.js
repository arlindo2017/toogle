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
      console.log("line 23 data", data);
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

      <section>
        {/* category grid */}
        <div className="justify-center my-10 ">
          <div className=" w-full border-opacity-50">
            <div className="divider text-2xl font-bold">
              SELECT YOUR PROVIDER
            </div>
          </div>

          {/* Map through providers and create cards */}
          {providers.map((provider) => (
            <div className="flex flex-col md:flex-row md:justify-evenly md:p-3 gap-1 border-2 border-slate-200 rounded-2xl mb-2 mx-10">
              {/* profile */}
              <div className="w-16 h-16 items-center">
                <img
                  className="w-24 ring ring-error ring-offset-base-50 "
                  src={require(`../../images/profile/${provider?.profileImage}`)}
                  alt="Avatar"
                />
              </div>

              <div className="w-80 text-center">
                <div className="font-bold flex justify-center">
                  {provider?.firstName} {provider?.lastName}
                </div>

                <div className="text-sm opacity-50 flex justify-center">
                  {provider?.email}
                </div>
              </div>

              {/* button */}
              <div className="flex justify-center items-center">
                {Auth.loggedIn() ? (
                  // Render content when Auth.loggedIn is true
                  <button
                    className="btn btn-accent btn-sm focus:outline-none focus:ring focus:ring-red-300 w-36"
                    name={provider._id}
                    onClick={updateProvider}
                  >
                    Hire {provider.firstName}
                  </button>
                ) : (
                  // Render content when Auth.loggedIn is false
                  <div className="">
                    <Link to="/login" className="btn btn-outline btn-accent">
                      Login/Signup
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

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
            {/* <Link className="btn btn-accent" to="/orders">
              View Order
            </Link> */}
            <a className="btn btn-accent" href="/orders">
              View Order
            </a>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ServiceProvidersTable;
