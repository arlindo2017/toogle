import React from "react";

const PreviousOrders = () => {
    const order = {
        src: require("../../images/profile/profileplaceholder.png"),
        name: "Hart Hagerty",
        company: "Lights On Electrical",
        service: "Wiring Installation",
        category: "Electrical",
        orderDate: "05/23/2023",
        price: "99.99",
        serviceDate: "06/12/2023"
      };
    return (
        <div>
            <h1 className="card-title justify-center mb-4">Order History</h1>
            <div name="table-container" className="flex">
                <div name="row-container" className="card bg-base-100 w-full">
                    <div name="row-cell" className="flex flex-col md:flex-row md:justify-evenly gap-2 border-2 border-slate-200 rounded-2xl mx-4 p-4">
                        <div className="flex justify-center">{order.service}</div>
                        <div className="flex justify-center">{order.serviceDate}</div>
                        <div className="flex justify-center">${order.price}</div>
                    </div>
                    <div className="card-actions justify-center mt-8">
                        <button className="btn btn-accent">View Order Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviousOrders;