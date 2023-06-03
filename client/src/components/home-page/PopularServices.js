import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SERVICES } from "../../utils/queries";

function PopularServices() {
  const { loading, data } = useQuery(QUERY_SERVICES, {
    variables: { limit: 4 },
  });
  useEffect(() => {}, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <span>
      {/* category grid */}
      <div className="flex flex-col w-full border-opacity-50 mt-20">
        <div className="divider text-2xl font-bold">POPULAR SERVICES</div>
      </div>
      <div className="grid-container px-40 py-10">
        <div className="grid grid-cols-4 gap-4">
          {/* Map through services and create cards */}
          {data?.services.map((service) => (
            <div key={service._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={require(`../../images/category-placeholder.jpeg`)}
                  alt="furniture assembly"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service?.serviceName}</h2>
                <p>Avg Price: $57-128</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {service?.serviceCategory.categoryName}
                  </div>
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
