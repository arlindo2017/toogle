import React from "react";
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
  console.log(
    "🚀 ~ file: ProviderSetUp.js:13 ~ ProviderSetup ~ myServices:",
    myServices
  );

  const stopService = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <h1 className="card-title">Provider page</h1>
      <div>lastName: {userData.lastName}</div>

      <button className="btn btn-accent">Add Service</button>

      {/* Currently offered */}
      <h1>Currently providing services for:</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Category</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* create a row for each service a user is set up to provide */}
            {myServices &&
              myServices.map((myService, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{myService.serviceName}</td>
                  <td>{myService.serviceCategory.categoryName}</td>
                  <td>
                    <button
                      className="btn btn-outline btn-error btn-xs"
                      data-serviceId={myService._id}
                      onClick={() => window.my_modal_2.showModal()}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Please confirm</h3>
          <p className="py-4">
            Are you sure you want to stop providing this service?
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
