import React from "react";
import { useEffect } from "react"
import { QUERY_CATEGORIES_WITH_SERVICES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Services from "../pages/Services";

const Category = () => {
    const { data } = useQuery(QUERY_CATEGORIES_WITH_SERVICES);
    const categories = data?.getAllCategoriesWithServices;
  
    return (
        <div>
          {categories &&
            categories.map((category) => (
              <div key={category._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                  {category.categoryName} <br />
                </h4>
                <div>
                    <Services 
                    services={category.services}
                    />
                </div>                
              </div>
            ))}
        </div>
    ); 
};

export default Category;