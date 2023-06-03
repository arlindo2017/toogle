import React from "react";

const Services = ({ services }) => {
    const catServices = [];
        for (let index = 0; index < services.length; index++) {
            const element = services[index];
            catServices.push(element.serviceName);
        }
    const catServicesMapped = catServices.map((service) =>
    <li key={service}>{service}</li>);

    return (
        <div>
            <ul>
                {catServicesMapped}
            </ul>
        </div>
    )
};

export default Services;