import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

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
    <div className="overflow-x-auto p-20">
      <table className="table">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Email</th>
            <th>Ratings</th>
            <th></th>
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
              {Auth.loggedIn() ? (
                // Render content when Auth.loggedIn is true
                <td>
                  <button className="btn btn-outline btn-accent">
                    Select Provider
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
  );
};

export default ServiceProvidersTable;
