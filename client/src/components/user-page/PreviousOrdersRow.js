import React from "react";
import NumberToDate from "../../utils/NumberToDate";

const PreviousOrdersRow = (props) => {
    console.log(props);
    return (
        <div name="row-container" className="card bg-base-100 w-full">
            <div name="row-cell" className="flex flex-col md:flex-row md:justify-evenly gap-2 border-2 border-slate-200 rounded-2xl mx-4 p-4">
                <div className="flex justify-center w-full">{props.services}</div>
                <div className="flex justify-center w-full">
                    <NumberToDate number={props.serviceDate} />
                </div>
                <div className="flex justify-center w-full">${props.price}</div>
            </div>
            {/* <div className="card-actions justify-center mt-8">
                <button className="btn btn-accent">View Order Details</button>
            </div> */}
        </div>
    )
};

export default PreviousOrdersRow;