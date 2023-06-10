        import React from "react";

const Order = (props) => {
    return (
        <>
           
            {/* row content */}
            <div name="row-cell" className="flex flex-col md:flex-row md:justify-evenly p-8 md:pt-0 gap-2 border-2 border-slate-200 rounded-2xl mx-16 mb-4">
                {/* provider row  */}
                <div name="provider" className="flex flex-col md:w-40">
                    <h2 className="text-[#cc451b] card-title justify-center md:invisible">Provider Details</h2>
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
                {/* service row  */}
                <div name="service" className="flex flex-col md:w-48 pt-3">
                    <h2 className="text-[#cc451b] card-title flex justify-center md:invisible">Service Details</h2>
                    <div className="flex justify-center">{props.service}</div>
                    <div className="flex justify-center"><span className="badge badge-accent">{props.category}</span></div>
                    <div className="flex justify-center">Scheduled for: {props.serviceDate}</div>
                </div>
                {/* order row  */}
                <div name="order" className="flex flex-col md:w-44 pt-3">
                    <h2 className="text-[#cc451b] card-title flex justify-center md:invisible">Order Details</h2>
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