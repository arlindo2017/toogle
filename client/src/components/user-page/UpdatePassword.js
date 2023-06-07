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

    // Set error messages
    const [errorState, setErrorState] = useState({
        errPassword: "",
        errNewPassword: "",
        errNewPasswordConfirm: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    // On blur fields validation
    const handleBlur = (e) => {

        // Check to see if the two newly entered passwords match
        if (formState.newPassword !== formState.newPasswordConfirm) {
            setErrorState({ ...errorState, errNewPasswordConfirm: "* Passwords must match" });
        } else {
            setErrorState({ ...errorState, errNewPasswordConfirm: "" });
        }

    };

    // On change form handling
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };
    
    const handleUpdatePassword = async (event) => {
        event.preventDefault();
    
        // Check to see if two new passwords are the same
        if (formState.newPassword !== formState.newPasswordConfirm) {
            setErrorMessage("Passwords must match");
            document.getElementById("newPasswordConfirm").focus();
            return;
        }

        try {
            const userId = props.userId;
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

      // Reset input fields
        setFormState({
            password: "",
            newPassword: "",
            newPasswordConfirm: "",
        });
    };

    return (
        <div>
            <h1 className="card-title">Update Password</h1>
            <input 
                className="input input-bordered input-accent w-full max-w-xs" 
                type="password" 
                placeholder="Previous Password" 
                name="password"
                id="password"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formState.password}
            />
            <input 
                className="input input-bordered input-accent w-full max-w-xs" 
                type="password" 
                placeholder="New Password" 
                name="newPassword"
                id="newPassword"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formState.newPassword}
            />
            <input 
                className="input input-bordered input-accent w-full max-w-xs" 
                type="password" 
                placeholder="Confirm Password" 
                name="newPasswordConfirm"
                id="newPasswordConfirm"
                onChange={handleInputChange}
                onBlur={handleBlur}
                value={formState.newPasswordConfirm}
            />
            {/* check for non-matching password */}
            <div className="md:flex md:items-center py-1">
                <div>
                <p className="text-red-600 text-sm">{errorState.errNewPasswordConfirm}</p>
                </div>
            </div>
            <button className="btn btn-accent" onClick={handleUpdatePassword}>Update Password</button>
        </div>
    );
};

export default UpdatePassword;