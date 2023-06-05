import React from "react";
import { Link } from "react-router-dom";

const ServiceCategoryPanel = ({ services }) => {
  const catServices = services.map((service) => ({
    serviceName: service.serviceName,
    _id: service._id,
  }));

  return (
    <div className="card-body pt-0 ">
      {catServices.map((service) => (
        <ul key={service._id}>
          <Link to={`/service/${service._id}`}>
            <li className="hover:text-teal-700">{service.serviceName}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default ServiceCategoryPanel;
