import React from "react";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { UPDATE_PW } from "../../utils/mutations";

const UpdatePassword = (props) => {
    // console.log(props.userId);
    const [updatePassword, { data, loading, error }] = useMutation(UPDATE_PW);

    const [formState, setFormState] = useState({
        password: "",
        newPassword: "",
        newPasswordConfirm: "",
      });

      // On change form handling
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };
    
    const handleUpdatePassword = async (event) => {
        event.preventDefault();
        try {
        const userId = props.userId;
        // console.log("userId", userId);
        await updatePassword({ 
            variables: { 
                id: userId,
                password: formState.password,
                newPassword: formState.newPassword
            } 
        });
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div>
            <h1 className="card-title">Update Password</h1>
            <input className="input input-bordered input-accent w-full max-w-xs" 
                type="text" 
                placeholder="Previous Password" 
                name="password"
                id="password"
                onChange={handleInputChange}
                // onBlur={handleBlur}
                value={formState.password}
            />
            <input className="input input-bordered input-accent w-full max-w-xs" 
                type="text" 
                placeholder="New Password" 
                name="newPassword"
                id="newPassword"
                onChange={handleInputChange}
                // onBlur={handleBlur}
                value={formState.newPassword}
            />
            <input className="input input-bordered input-accent w-full max-w-xs" 
                type="text" 
                placeholder="Confirm Password" 
                name="newPasswordConfirm"
                id="newPasswordConfirm"
                onChange={handleInputChange}
                // onBlur={handleBlur}
                value={formState.newPasswordConfirm}
            />
            <button className="btn btn-accent" onClick={handleUpdatePassword}>Update Password</button>
        </div>
    );
};

export default UpdatePassword;