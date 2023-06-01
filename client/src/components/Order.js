import React from "react";

const Order = () => {
    return (
        <div>
            {/* divider */}
            <div className="flex flex-col w-full">
                <div className="grid h-20 card place-items-center text-4xl">Previous Orders</div> 
            </div>

            {/* table start */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Provider</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th></th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={require("../images/profileplaceholder.png")} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">Lights On Electrical</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Wiring Installation
                        <br/>
                        <span className="badge badge-ghost badge-sm">Electrical</span>
                        </td>
                        <td>05/23/2023</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th></th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={require("../images/profileplaceholder.png")} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Brice Swyre</div>
                            <div className="text-sm opacity-50">GoGreen Group</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        Tree Removal
                        <br/>
                        <span className="badge badge-ghost badge-sm">Landscaping</span>
                        </td>
                        <td>01/05/2023</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th></th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={require("../images/profileplaceholder.png")} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Marjy Ferencz</div>
                            <div className="text-sm opacity-50">Pipecleaners, Inc.</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        New Bathroom Install
                        <br/>
                        <span className="badge badge-ghost badge-sm">Plumbing</span>
                        </td>
                        <td>06/13/2022</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    </tbody>              
                </table>
            </div>
        </div>
    )
};

export default Order;