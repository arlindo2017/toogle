import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_MY_SERVICES } from "../../utils/queries";
import { UPDATE_PROVIDER_LIST } from "../../utils/mutations";

// export default function ProviderSetup(props) {
export default function ProviderSetup(props) {
  console.log("props: ", props)
  // Get information about user
  let userData = { ...props.data.me };
  // let userData = { ...props.data };
  // console.log("toggle switched, userData: ", userData)

  // Mutation to remove user from list service providers
  const [updateProviderList] = useMutation(UPDATE_PROVIDER_LIST);

  // Query services and categories
  const { loading, data, refetch } = useQuery(QUERY_MY_SERVICES);
  const myServices = data?.getMyServices || [];

  const [selectedService, setSelectedService] = useState({
    stateId: "",
    stateName: "",
  });

  if (loading) {
    return <div>Loading...</div>
  }
  // Store additional information about buttons
  const buttonData = {};

  // remove currenlty selected element
  const stopService = async (e) => {
    try {
      await updateProviderList({
        variables: { serviceId: selectedService.stateId },
      });
      // updata services data
      refetch();
      
    } catch (error) {
      console.log(error);
    }
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
            name={`button${index + 1}`}
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
      <h1 className="card-title flex-grow justify-center">Provider setup</h1>
      <button className="btn btn-accent">Add Service</button>
      <h2 className="font-bold py-12">Provider Status: <span className={`p-2 rounded-lg bg-accent ${userData?.isProvider ? "bg-accent" : "bg-warning"}`}>{userData?.isProvider ? "Active" : "Suspended"}</span></h2>

      {/* Currently offered */}
      <h2 className="font-bold">Current services:</h2>
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
          <h3 className="font-bold text-lg text-error">Please confirm</h3>
          <p className="py-4 text-center">
            Are you sure you want to stop providing service for{" "}
          </p>
            <p className="font-semibold text-center">{selectedService.stateName}?</p>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn hover:btn-error" onClick={stopService}>
              Confirm
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
