import React from "react";

const UpdatePassword = () => {
    return (
        <div>
            <h1 className="card-title">Update Password</h1>
            <input type="text" placeholder="Previous Password" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" placeholder="New Password" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" placeholder="Confirm Password" className="input input-bordered input-accent w-full max-w-xs" />
            <button className="btn btn-accent">Update Password</button>
        </div>
    );
};

export default UpdatePassword;