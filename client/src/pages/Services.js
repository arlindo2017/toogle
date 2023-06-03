import React from "react";

const Services = ({ services }) => {
    const catServices = [];
        for (let index = 0; index < services.length; index++) {
            const element = services[index];
            catServices.push(element.serviceName);
        }
    const catServicesMapped = catServices.map((service) =>
    <p key={service}>{service}</p>);

    return (
        <div className="card-body pt-0 items-center text-center">
            {catServicesMapped}
        </div>
    )
};

export default Services;