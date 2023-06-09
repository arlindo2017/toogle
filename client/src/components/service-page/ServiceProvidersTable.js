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
  const [orderReady, setOrderReady] = useState(false);

  const updateDate = (data) => {
    //Function for child element to update
    setChildDate(data);
  };

  // useEffect(() => {
  //   //printOrderDetails();
  // }, [selectedProvider]);

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
  //console.log();
  const providers = props.data?.service?.serviceProviders || [];
  //console.log(providers);

  if (!Array.isArray(providers)) {
    // Handle the case where providers is not an array
    return <p>No service providers available.</p>;
  }

  return (
    <>
      <div className="overflow-x-auto p-20">
        <div className="flex items-center justify-center">
          <div className="p-6 bg-white rounded-lg shadow-lg border border-purple-500 flex flex-row items-center">
            <h1 className="text-2xl sm:text-5xl font-bold mr-10">Select Service Date &amp; Time</h1>

            <div className="flex justify-center">
              <DatePicker1Presentation updateDate={updateDate} />
            </div>
          </div>
        </div>
        <table className="table mt-20">
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
                      className="btn btn-accent focus:outline-none focus:ring focus:ring-red-300"
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

    

          {/* <button className=" active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300" onClick={printOrderDetails}>Place Order</button>
  


        <button className={`${orderReady ? 'btn btn-accent  bg-green-500' : 'disabled'}`}>test</button> */}

      </div>



      {/* Open the modal using ID.showModal() method */}
      {/* <button className="btn" onClick={() => window.my_modal_1.showModal()}>open modal</button> */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box ">
          <p className="font-bold text-3xl flex justify-center">Processing Your Order!</p>
          <progress className="progress progress-primary  w-56 m-2"></progress>
          <p className="py-1">Thanks for your order, and of course, thanks for choosing Toogle!</p>
          <p className="py-1">We look forward to helping you find your next Toogle professional!</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>




    </>
  );
};

export default ServiceProvidersTable;
