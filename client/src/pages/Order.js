import React from "react";

const Order = (props) => {
    return (
        <tr>
            {/* <th></th> */}
            <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={props.src} alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div className="font-bold">{props.name}</div>
                <div className="text-sm opacity-50">{props.company}</div>
                </div>
            </div>
            </td>
            <td>
            {props.service}
            <br/>
            <span className="badge badge-ghost badge-sm">{props.category}</span>
            </td>
            <td>{props.date}</td>
            <th>
            <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
};

export default Order;