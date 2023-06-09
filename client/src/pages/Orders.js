import React from "react";
import Order from "../components/Order";

const Orders = () => {
  const order = {
    src: require("../images/profile/profileplaceholder.png"),
    name: "Hart Hagerty",
    company: "Lights On Electrical",
    service: "Wiring Installation",
    category: "Electrical",
    date: "05/23/2023",
  };
  return (
    <div className="mb-20">
      {/* table start */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Provider</th>
              <th>Service</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <Order
              src={order.src}
              name={order.name}
              company={order.company}
              service={order.service}
              category={order.category}
              date={order.date}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
