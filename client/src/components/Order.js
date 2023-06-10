        import React from "react";

const Order = (props) => {
    return (
        <>
            {/* header row for horizontal cards */}
            <div name="header-row" className="flex-row justify-evenly px-8 pt-8 gap-2 hidden sm:flex">
                <h2 className="card-title justify-center sm:w-40">Provider Details</h2>
                <h2 className="card-title justify-center sm:w-48">Service Details</h2>
                <h2 className="card-title justify-center sm:w-44">Order Details</h2>
            </div>

            <div name="row-cell" className="flex flex-col sm:flex-row sm:justify-evenly p-8 sm:pt-0 gap-2">
            <div name="provider" className="flex flex-col sm:w-40">
                <h2 className="card-title justify-center sm:invisible">Provider Details</h2>
                <div className="avatar flex justify-center">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={props.src} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold flex justify-center">{props.name}</div>
                    <div className="text-sm opacity-50 flex justify-center">{props.company}</div>
                </div>
            </div>
            <div name="service" className="flex flex-col sm:w-48">
                <h2 className="card-title flex justify-center sm:invisible">Service Details</h2>
                <div className="flex justify-center">{props.service}</div>
                <div className="flex justify-center"><span className="badge badge-accent">{props.category}</span></div>
                <div className="flex justify-center">Scheduled for: {props.serviceDate}</div>
            </div>
            <div name="order" className="flex flex-col sm:w-44">
                <h2 className="card-title flex justify-center sm:invisible">Order Details</h2>
                <div className="flex justify-center">${props.price}</div>
                <div className="flex justify-center">Ordered on: {props.orderDate}</div>
            </div>
            </div>
        </>



        // <tr>
        //     {/* <th></th> */}
        //     <td>
        //     <div className="flex items-center space-x-3">
        //         <div className="avatar">
        //         <div className="mask mask-squircle w-12 h-12">
        //             <img src={props.src} alt="Avatar Tailwind CSS Component" />
        //         </div>
        //         </div>
        //         <div>
        //         <div className="font-bold">{props.name}</div>
        //         <div className="text-sm opacity-50">{props.company}</div>
        //         </div>
        //     </div>
        //     </td>
        //     <td>
        //     {props.service}
        //     <br/>
        //     <span className="badge badge-ghost badge-sm">{props.category}</span>
        //     </td>
        //     <td>{props.date}</td>
        //     {/* <th>
        //     <button className="btn btn-ghost btn-xs">details</button>
        //     </th> */}
        // </tr>
    )
};

export default Order;