import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROVIDERS } from "../../utils/queries";
import { Link } from "react-router-dom";

function FeatureProviders() {
  const { loading, data } = useQuery(QUERY_PROVIDERS, {
    variables: { limit: 4 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <span>
      {/* category grid */}
      <div className="justify-center">
        <div className=" w-full border-opacity-50  m-10">
          <div className="divider text-2xl font-bold">FEATURE PROVIDERS</div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* Map through providers and create cards */}
          {data?.providers.map((provider) => (
            <div
              key={provider._id}
              className="card shadow-xl m-2 m:w-xs  xl:max-w-xs"
            >
              <figure>
                <img
                  src={require(`../../images/profile/${provider?.profileImage}`)}
                  alt={`${provider?.firstName}`}
                />
              </figure>
              <div className="card-actions ml-3">
                <div className="badge badge-outline px-4 py-4 mt-3 font-bold ">
                  {provider?.firstName}
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{provider?.firstName} {provider?.lastName} </h2>
                <p>
                  {`Provider Details: `}
                  <span className="font-bold">{provider?.email}</span>
                </p>
                <div className="text-end mt-5">
                  <Link to={`/provider/${provider?._id}`}>
                    <button className="btn btn-outline btn-accent">
                      More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </span>
  );
}

// function FeatureProviders() {
//   return (
//     <span>
//       <div className="flex flex-col w-full border-opacity-50 mt-20">
//         <div className="divider text-2xl font-bold">FEATURED PROVIDERS</div>
//       </div>

//       <div className="grid-container px-40 py-10">
//         <div className="grid grid-cols-3 gap-4">
//           {/* card 1 */}
//           <div className="card bg-base-100 shadow-xl">
//             <div className="card-body">
//               <div className="avatar">
//                 <div className="w-16 rounded">
//                   <img
//                     src={require("../../images/profile/profileplaceholder.png")}
//                     alt="landscaping"
//                   />
//                 </div>
//                 <h2 className="card-title px-5">GoGreen Landscaping</h2>
//               </div>
//               <div className="flex flex-col w-full">
//                 <div className="divider"></div>
//               </div>
//               <h2 className="card-title">Services</h2>
//               <div className="grid grid-cols-2 pb-3">
//                 <div>Lawn Mowing</div>
//                 <div className="pl-3">$25/hr</div>
//                 <div>Tree Removal</div>
//                 <div className="pl-3">$150/hr</div>
//                 <div>Weeding</div>
//                 <div className="pl-3">$15/hr</div>
//               </div>
//               <button className="btn btn-accent">MORE INFO</button>
//             </div>
//           </div>
//           {/* card 2 */}
//           <div className="card bg-base-100 shadow-xl">
//             <div className="card-body">
//               <div className="avatar">
//                 <div className="w-16 rounded">
//                   <img
//                     src={require("../../images/profile/profileplaceholder.png")}
//                     alt="landscaping"
//                   />
//                 </div>
//                 <h2 className="card-title px-5">GoGreen Landscaping</h2>
//               </div>
//               <div className="flex flex-col w-full">
//                 <div className="divider"></div>
//               </div>
//               <h2 className="card-title">Services</h2>
//               <div className="grid grid-cols-2 pb-3">
//                 <div>Lawn Mowing</div>
//                 <div className="pl-3">$25/hr</div>
//                 <div>Tree Removal</div>
//                 <div className="pl-3">$150/hr</div>
//                 <div>Weeding</div>
//                 <div className="pl-3">$15/hr</div>
//               </div>
//               <button className="btn btn-accent">MORE INFO</button>
//             </div>
//           </div>
//           {/* card 3 */}
//           <div className="card bg-base-100 shadow-xl">
//             <div className="card-body">
//               <div className="avatar">
//                 <div className="w-16 rounded">
//                   <img
//                     src={require("../../images/profile/profileplaceholder.png")}
//                     alt="landscaping"
//                   />
//                 </div>
//                 <h2 className="card-title px-5">GoGreen Landscaping</h2>
//               </div>
//               <div className="flex flex-col w-full">
//                 <div className="divider"></div>
//               </div>
//               <h2 className="card-title">Services</h2>
//               <div className="grid grid-cols-2 pb-3">
//                 <div>Lawn Mowing</div>
//                 <div className="pl-3">$25/hr</div>
//                 <div>Tree Removal</div>
//                 <div className="pl-3">$150/hr</div>
//                 <div>Weeding</div>
//                 <div className="pl-3">$15/hr</div>
//               </div>
//               <button className="btn btn-accent">MORE INFO</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </span>
//   );
// }

export default FeatureProviders;
