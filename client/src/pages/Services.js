import React from "react";
import { QUERY_SERVICES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Category from "../components/Category";

const Services = ({ categories }) => {
    // console.log("categories from service page", categories);
    // const { loading, data } = useQuery(QUERY_SERVICES);
    // const services = data?.services;
    // console.log("services", services)
    // // // const categoriesList = categories.categoryName;
    // // const servicesList = services.map((service) => {
    // //     return service.serviceName;
    // // })
    // // console.log("servicesList", servicesList);
    // return (
    //     <div>
    //         {categories && categories.map((category) => (
    //             <div key={category._id} className="card mb-3">

    //                 <h4 className="card-header bg-primary text-light p-2 m-0">
    //                 {category.categoryName} <br />

    //                     {services && services.map((service) => {
    //                         if (service.serviceCategory._id === category._id) {
    //                             return (
    //                                 <div key={service._id} className="card mb-3">
        
    //                                     <h4 className="card-header bg-primary text-light p-2 m-0">
    //                                     {service.serviceName} <br />
                                
    //                                     </h4>
                                
    //                                 </div>
    //                             )
                                
    //                         }
    //                     }
    //                     )}

              
    //                 </h4>
            
    //             </div>
    //         ))}

    //     </div>
    // )
};

export default Services;