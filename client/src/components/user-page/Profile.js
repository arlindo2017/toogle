import React from "react";

const Profile = (props) => {
    return (
        <div>
            <h1 className="card-title">My Profile</h1>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <button className="btn btn-accent">Update Info</button>
        </div>
    );
};

export default Profile;