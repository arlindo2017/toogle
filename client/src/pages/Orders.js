import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ORDERS } from "../utils/queries";
import Order from "../components/Order";

const Orders = () => {
  const { loading, data } = useQuery(QUERY_ORDERS);
  const orderData = data?.orders || [];
  console.log(orderData);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div name="table-container" className="flex">
      <div name="row-container" className="card bg-base-100 w-full">
        {/* header row for horizontal cards */}
        <div
          name="header-row"
          className="flex-row justify-evenly px-8 pt-8 gap-2 hidden md:flex mx-16 mb-4"
        >
          <h2 className="text-[#cc451b] card-title justify-center sm:w-40">
            Provider Details
          </h2>
          <h2 className="text-[#cc451b] card-title justify-center sm:w-48">
            Service Details
          </h2>
          <h2 className="text-[#cc451b] card-title justify-center sm:w-44">
            Order Details
          </h2>
        </div>

        {orderData.map((order) => (
          <Order
            key={order._id}
            // src={require(`../images/profile/${order.provider[0].profileImage}`)}
            // name={`${order.provider.firstName} ${order.provider.lastName}`}
            // company={order.provider.email}
            //service={order.services[0].serviceName}
            // category={order.services[0].serviceDesc}
            orderDate={order.orderDate}
            price={order.orderPrice}
            serviceDate={order.serviceDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
