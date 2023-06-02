import React from "react";
import { useEffect } from "react"
import { QUERY_CATEGORIES_WITH_SERVICES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Services from "../pages/Services";

// var array = [{}]
const Category = () => {
    const { loading, data } = useQuery(QUERY_CATEGORIES_WITH_SERVICES);
    const categories = data?.getAllCategoriesWithServices;
    console.log("categories", categories);
    // useEffect(() => {
    //     if (data) {
    //         console.log("data", data);
    //     }
        
    // }, [data])
    // if (loading) {
    //     return console.log("loading")
    // }
    

    return (
        <div>
          {categories &&
            categories.map((category) => (
              <div key={category._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                  {category.categoryName} <br />
                </h4>
                <div className="card-body bg-light p-2">
                  {/* <p>{category.services.serviceName}</p> */}
                  
                </div>
              </div>
            ))}
        </div>
      ); 
    
    // const categoriesList = categories.categoryName;
    // const categoriesList = categories.map((category) => {
    //     return category.categoryName;
    // })
    // console.log("categoriesList", categoriesList);

    // return (
    //     <div> 
    //         <Services 
    //         categories={categories}/>
    //     </div>
    // )

    // const { loading, data } = useQuery(QUERY_SERVICES);
    // const services = data?.services;
    // const serviceList = services.map((service) => {
    //     return (
    //         <option key={service.serviceCategory._id} value={service.serviceName}></option>
    //     )
    // })
    // console.log("services", services);

    // var soaps = arr.filter(item => {
    //     item.name == "sap"
    // })
    // return (

    //     // {soaps.map(element => {
    //     //     return <Component props=item/>
    //     // })}
    //     <div>
    //         <h1>This is the category page.</h1>
    //         <Services 
    //         services={services}/>
    //     </div>
    // )
};

export default Category;