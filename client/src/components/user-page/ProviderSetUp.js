import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { QUERY_MY_SERVICES } from "../../utils/queries";

export default function ProviderSetup(props) {
  // Get information about user
  const userData = { ...props.userData };
  // Query services and categories
  const { loading, data } = useQuery(QUERY_MY_SERVICES);
  const myServices = data?.getMyServices || [];

  const [selectedService, setSelectedService] = useState({
    stateId: "",
    stateName: "",
  });

  // Store additional information about buttons
  const buttonData = {};  

  // remove currenlty selected element
  const stopService = (e) => {
    // console.log(e.target);
  };

  // update state for selected Service
  // show confirmation modal
  const showModal = (e) => {
    const selectedButton = e.target.name;
    setSelectedService((prevState) => ({
      ...prevState,
      stateId: buttonData[selectedButton].serviceId,
      stateName: buttonData[selectedButton].serviceName,
    }));
    window.my_modal_2.showModal();
  };

  // update button data
  function updateButtonData(myService, index) {
    
      buttonData[`button${index + 1}`] = {
        serviceId: myService._id,
        serviceName: myService.serviceName,
      };
    

    return (
      
        <tr key={index}>
          <th>{index + 1}</th>
          <td>{myService.serviceName}</td>
          <td>{myService.serviceCategory.categoryName}</td>
          <td>
            <button
              className="btn btn-outline btn-error btn-xs"
              // value={myService._id}
              name={`button${index + 1}`}
              // onClick={() => window.my_modal_2.showModal()}
              onClick={showModal}
            >
              Remove
            </button>
          </td>
        </tr>
      
    );
  }

  return (
    <>
      <h1 className="card-title">Provider page</h1>
      <div>lastName: {userData.lastName}</div>

      <button className="btn btn-accent">Add Service</button>

      {/* Currently offered */}
      <div className="flex flex-col w-full border-opacity-50 mt-10 mb-5">
        <div className="divider text-2xl font-bold">CURRENTY OFFERING</div>
      </div>
      <p>
        You are currently being listed as a provider for the following services:
      </p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* create a row for each service a user is set up to provide */}
            {myServices &&
              myServices.map((myService, index) =>
                updateButtonData(myService, index)
              )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Please confirm</h3>
          <p className="py-4">
            Are you sure you want to stop providing service for: <span className="font-semibold">
              {selectedService.stateName}?
            </span>
          </p>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={stopService}>
              Confirm
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
