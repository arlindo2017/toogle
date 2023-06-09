import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_SERVICE } from "../utils/queries";
import ServiceProvidersTable from "../components/service-page/ServiceProvidersTable";

const Service = () => {
  const { serviceId } = useParams();

  const { loading, error, data } = useQuery(QUERY_SINGLE_SERVICE, {
    variables: { serviceId },
  });

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const service = data?.service;
  //console.log(data);
  return (
    <>
      <div className="text-sm breadcrumbs pl-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">All Services</Link>
          </li>
          <li>
            <Link to="#">{service.serviceName}</Link>
          </li>
        </ul>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl p-20 -z-50">
        <figure>
          <img
            className="max-w-md max-h-80"
            src={require(`../images/category/${service.serviceCategory.categoryImage}`)}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <p className="mb-5 text-5xl font-bold">
            Service Details{" "}
            <span className="btn-success">${service.servicePrice}</span>
          </p>

          <p className="mb-5 text-2xl font-bold">
            Service Category:
            <span className="text-sm">
              {"  "}
              {service.serviceCategory.categoryName}
            </span>
          </p>

          <p className="mb-5 text-2xl font-bold">
            Service Description:
            <span className="text-sm">
              {"  "}
              {service.serviceCategory.categoryDesc}
            </span>
          </p>
        </div>
      </div>

      <div className="p-2">
        <p className="text-center mb-5 text-5xl font-bold p-10">
          {" "}
          Choose Your Provider
        </p>

        <ul className="steps right-15 min-w-full pb-8">
          <li className="step step-primary">Choose Service</li>
          <li className="step step-primary">Select Provider</li>
          <li className="step step-primary">Pick Date</li>
          <li className="step">Confirm Order</li>
        </ul>
      </div>

      <ServiceProvidersTable data={data} />
    </>
  );
};

export default Service;
