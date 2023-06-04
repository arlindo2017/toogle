import React from "react";
import { Link } from "react-router-dom";

const ServiceProvidersTable = (props) => {
  console.log("props", props);
  console.log();
  const providers = props.data?.service?.serviceProviders || [];
  console.log(providers);

  if (!Array.isArray(providers)) {
    // Handle the case where providers is not an array
    return <p>No service providers available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Email</th>
            <th>Ratings</th>
            <th>Select</th>
            {/* Add more table headers if needed */}
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
                        src={require(`../images/profile/profile1.jpg`)}
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
                    checked
                  />
                </div>
              </td>
              <td>
                <button className="btn btn-outline btn-accent">
                  Select Provider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceProvidersTable;
