import React from "react";

function FeatureProviders() {
  return (
    <span>
      <div className="flex flex-col w-full border-opacity-50 mt-20">
        <div className="divider text-2xl font-bold">FEATURED PROVIDERS</div>
      </div>

      <div className="grid-container px-40 py-10">
        <div className="grid grid-cols-3 gap-4">
          {/* card 1 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-16 rounded">
                  <img
                    src={require("../../images/profile/profileplaceholder.png")}
                    alt="landscaping"
                  />
                </div>
                <h2 className="card-title px-5">GoGreen Landscaping</h2>
              </div>
              <div className="flex flex-col w-full">
                <div className="divider"></div>
              </div>
              <h2 className="card-title">Services</h2>
              <div className="grid grid-cols-2 pb-3">
                <div>Lawn Mowing</div>
                <div className="pl-3">$25/hr</div>
                <div>Tree Removal</div>
                <div className="pl-3">$150/hr</div>
                <div>Weeding</div>
                <div className="pl-3">$15/hr</div>
              </div>
              <button className="btn btn-accent">MORE INFO</button>
            </div>
          </div>
          {/* card 2 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-16 rounded">
                  <img
                    src={require("../../images/profile/profileplaceholder.png")}
                    alt="landscaping"
                  />
                </div>
                <h2 className="card-title px-5">GoGreen Landscaping</h2>
              </div>
              <div className="flex flex-col w-full">
                <div className="divider"></div>
              </div>
              <h2 className="card-title">Services</h2>
              <div className="grid grid-cols-2 pb-3">
                <div>Lawn Mowing</div>
                <div className="pl-3">$25/hr</div>
                <div>Tree Removal</div>
                <div className="pl-3">$150/hr</div>
                <div>Weeding</div>
                <div className="pl-3">$15/hr</div>
              </div>
              <button className="btn btn-accent">MORE INFO</button>
            </div>
          </div>
          {/* card 3 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-16 rounded">
                  <img
                    src={require("../../images/profile/profileplaceholder.png")}
                    alt="landscaping"
                  />
                </div>
                <h2 className="card-title px-5">GoGreen Landscaping</h2>
              </div>
              <div className="flex flex-col w-full">
                <div className="divider"></div>
              </div>
              <h2 className="card-title">Services</h2>
              <div className="grid grid-cols-2 pb-3">
                <div>Lawn Mowing</div>
                <div className="pl-3">$25/hr</div>
                <div>Tree Removal</div>
                <div className="pl-3">$150/hr</div>
                <div>Weeding</div>
                <div className="pl-3">$15/hr</div>
              </div>
              <button className="btn btn-accent">MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}

export default FeatureProviders;
