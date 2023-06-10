import React from "react";
import { Link } from "react-router-dom";

const ServiceCategoryPanel = ({ services }) => {
  const catServices = services.map((service) => ({
    serviceName: service.serviceName,
    _id: service._id,
  }));

  return (
    <div className="flex flex-col px-8 pb-8 gap-2">
      {catServices.map((service) => (
        <ul key={service._id}>
          <Link to={`/service/${service._id}`}>
            <li className="hover:text-[#cc451b]">{service.serviceName}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default ServiceCategoryPanel;
