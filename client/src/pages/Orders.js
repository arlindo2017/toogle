import React from "react";
import Order from "../components/Order";

const Orders = () => {
  const order = {
    src: require("../images/profile/profileplaceholder.png"),
    name: "Hart Hagerty",
    company: "Lights On Electrical",
    service: "Wiring Installation",
    category: "Electrical",
    orderDate: "05/23/2023",
    price: "99.99",
    serviceDate: "06/12/2023"
  };
  return (
    <div name="table-container" className="flex">
      <div name="row-container" className="card bg-base-100 w-full">
         {/* header row for horizontal cards */}
         <div name="header-row" className="flex-row justify-evenly px-8 pt-8 gap-2 hidden md:flex mx-16 mb-4">
                <h2 className="text-[#cc451b] card-title justify-center sm:w-40">Provider Details</h2>
                <h2 className="text-[#cc451b] card-title justify-center sm:w-48">Service Details</h2>
                <h2 className="text-[#cc451b] card-title justify-center sm:w-44">Order Details</h2>
          </div>

        <Order
          src={order.src}
          name={order.name}
          company={order.company}
          service={order.service}
          category={order.category}
          orderDate={order.orderDate}
          price={order.price}
          serviceDate={order.serviceDate}
        />
        <Order
          src={order.src}
          name={order.name}
          company={order.company}
          service={order.service}
          category={order.category}
          orderDate={order.orderDate}
          price={order.price}
          serviceDate={order.serviceDate}
        />
      </div>

    </div>
    // <div className="mb-20">
    //   {/* table start */}
    //   <div className="overflow-x-auto w-full">
    //     <table className="table w-full">
    //       {/* head */}
    //       <thead>
    //         <tr>
    //           {/* <th></th> */}
    //           <th>Provider</th>
    //           <th>Service</th>
    //           <th>Date</th>
    //           <th></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* row 1 */}
    //         <Order
    //           src={order.src}
    //           name={order.name}
    //           company={order.company}
    //           service={order.service}
    //           category={order.category}
    //           date={order.date}
    //         />
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default Orders;
