import { useState, useEffect } from "react";
import React from "react";

const Signup = () => {
  const [providerToggle, setProviderToggle] = useState(false);

  useEffect(() => {}, [providerToggle]);

  const updateProviderToggle = (e) => {
    console.log(e.target.checked);
    setProviderToggle(!providerToggle);
    return providerToggle ? setProviderToggle(false) : setProviderToggle(true);
  };

  return (
    <>
      <h1>This is the login page.</h1>
      <div className="form-control w-52">
      {/* <div className="collapse bg-base-200"> */}
        <label className="cursor-pointer label">
          <span className="label-text">Provider ?</span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={providerToggle}
            onChange={updateProviderToggle}
          />
        </label>        
      </div>

        <div className="collapse-content bg-primary">
          {/* <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content"> */}
          <h1>This is provider section</h1>
        </div>
      
      
      <div className="collapse text-center">
      <input type="checkbox" />
      <div className="collapse-title">
        Want to become a provider ?
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
      </div>
    </>
  );
};

export default Signup;
