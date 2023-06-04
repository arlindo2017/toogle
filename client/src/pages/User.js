import React from "react";
import Orders from "./Orders";

const User = () => {
  return (
    <div>
      <h1>This is the user page.</h1>

      <div className="flex flex-col w-full border-opacity-50 mt-20 mb-5">
        <div className="divider text-2xl font-bold">PREVIOUS ORDERS</div>
      </div>

      <Orders />
    </div>
  );
};

export default User;
