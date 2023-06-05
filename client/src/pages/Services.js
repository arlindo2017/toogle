import React from "react";
import { QUERY_CATEGORIES_WITH_SERVICES } from "../utils/queries";
import { useQuery } from "@apollo/client";
import ServiceCategoryPanel from "../components/service-page/ServiceCategoryPanel";

const Services = () => {
  const { data } = useQuery(QUERY_CATEGORIES_WITH_SERVICES);
  const categories = data?.getAllCategoriesWithServices;

  return (
    <div className="page-container">
      {/* banner */}
      <div className="hero">
        <img
          src={require("../images/categories-banner.jpeg")}
          alt="man using power drill"
          className="hero object-cover"
        ></img>
        {/* <div className="hero-overlay "></div> */}
        <div className="text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-40 text-5xl font-bold">Help us help you.</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full border-opacity-50 mt-10 mb-5">
        <div className="divider text-2xl font-bold">WHAT WE OFFER</div>
      </div>

      {/* categories */}
      <div className="category-container flex flex-wrap w-full justify-center px-20">
        {categories &&
          categories.map((category) => (
            <div
              key={category._id}
              className="card w-72 bg-base-100 shadow-xl m-4"
            >
              <figure>
                <img
                  src={require(`../images/category/${category.categoryImage}`)}
                  alt={category.categoryName}
                />
              </figure>
              <div className="card items-center text-center">
                <h2 className="card-title mt-5">{category.categoryName}</h2>
              </div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>
              </div>
              <div>
                <ServiceCategoryPanel services={category.services} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
