import React from "react";
import Orders from "./Orders";

const User = () => {
  return (
    <div>
      <div className="card mx-56 bg-base-100 shadow-xl mt-10 -z-50">
        <div className="grid grid-cols-8 gap-4 card-body">
          {/* left side card */}
          <div className="col-start-2 col-span-2">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={require('../images/profile-placeholder.png')}  alt="profile placeholder" />
              </div>
            </div>
            <p>Username</p>
            <p>change username</p>
          </div>

          {/* right side card */}
          <div className="col-start-4 col-span-4">
            <h2 className="card-title">Account Information</h2>
            {/* info form */}

            
            

          </div>
        </div>
      </div>

      <div className="flex flex-col w-full border-opacity-50 mt-20 mb-5">
        <div className="divider text-2xl font-bold">PREVIOUS ORDERS</div>
      </div>

      <Orders />
    </div>
  );
};

export default User;
