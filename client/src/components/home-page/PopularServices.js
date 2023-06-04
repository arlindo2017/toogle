import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../../utils/queries";
import { Link } from "react-router-dom";

function PopularServices() {
  const { loading, data } = useQuery(QUERY_SERVICES, {
    variables: { limit: 4 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <span>
      {/* category grid */}
      <div className="justify-center">
        <div className=" w-full border-opacity-50  m-10">
          <div className="divider text-2xl font-bold">POPULAR SERVICES</div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Map through services and create cards */}
          {data?.services.map((service) => (
            <div
              key={service._id}
              className="card shadow-xl m-2 m:w-xs  xl:max-w-xs"
            >
              <figure>
                <img
                  src={require(`../../images/category/${service?.serviceCategory.categoryImage}`)}
                  alt={`${service?.serviceName}`}
                />
              </figure>
              <div className="card-actions ml-3">
                <div className="badge badge-outline px-4 py-4 mt-3 font-bold ">
                  {service?.serviceCategory.categoryName}
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{service?.serviceName}</h2>
                <p>
                  {`Service Price: `}
                  <span className="font-bold">${service?.servicePrice}</span>
                </p>
                <div className="text-end mt-5">
                  <Link to={`/services/${service?._id}`}>
                    <button className="btn btn-outline btn-accent">
                      Order Service
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </span>
  );
}

export default PopularServices;
