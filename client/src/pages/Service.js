import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_SERVICE } from "../utils/queries";
import ServiceProvidersTable from "../components/ServiceProvidersTable";

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
  console.log(data);
  return (
    <div>
      <section style={styles.section}>
        <div style={styles.imageContainer}>
          <img
            src={require(`../images/${data.service.serviceCategory.categoryImage}`)}
            alt="Image"
            style={styles.image}
          />
        </div>
        <div style={styles.dataContainer}>
          <p className="mb-5 text-5xl font-bold">
            Service Details{" "}
            <span className="btn-success">${data.service.servicePrice}</span>
          </p>

          {/* <hr />
          <p className="mb-5 text-1xl font-bold">
            Service ID:<span className="text-sm"> {data.service._id}</span>
          </p> */}

          <p className="mb-5 text-2snipxl font-bold">
            Service Category:
            <span className="text-sm">
              {" "}
              {data.service.serviceCategory.categoryName}
            </span>
          </p>

          <p className="mb-5 text-2xl font-bold">
            Service Description:
            <span className="text-sm">
              {" "}
              {data.service.serviceCategory.categoryDesc}
            </span>
          </p>
          <hr />
        </div>
      </section>

      <p className="text-center mb-5 text-5xl font-bold">
        Choose Your Provider
      </p>

      <ServiceProvidersTable data={data} />
    </div>
  );
};

const styles = {
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "5em",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  dataContainer: {
    flex: 1,
    paddingLeft: "20px",
  },
};

export default Service;
