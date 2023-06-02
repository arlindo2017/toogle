import React from "react";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="hero min-h-screen">
                <img src={require("../images/mainbanner.jpeg")} alt="man installing lightbulb" className="hero min-h-screen object-cover"></img>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content pr-[45vw]">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to toogle.</h1>
                    <p>We help you get things done.</p>
                    <p className="mb-5">By letting you let someone else do it.</p>
                    <button className="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>

            {/* stats section */}
            <div className="stats shadow w-full rounded-none">
  
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                
                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                
            </div>

            {/* category grid */}
            <div className="flex flex-col w-full border-opacity-50 mt-20">
                <div className="divider text-2xl font-bold">POPULAR SERVICES</div>
            </div>

            <div className="grid-container px-40 py-10">
                <div className="grid grid-cols-4 gap-4">
                    {/* card 1 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second banner/hero */}
            <div className="card lg:card-side bg-base-100 shadow mt-20 rounded-none">
                <figure className="w-1/2"><img src={require('../images/painting.jpg')} alt="painting"/></figure>
                <div className="card-body my-auto">
                    <h2 className="card-title">Turn your to-do list into a to-done list.</h2>
                    <p className="flex-grow-0">Find service providers for every inch of your house, all in one place.</p>
                        <li>Search by what's important to you.</li>
                        <li>View availability and schedule an appointment.</li>
                        <li>Leave reviews and view your previous orders.</li>
                </div>
            </div>

            {/* reviews section */}
            <div className="flex flex-col w-full border-opacity-50 mt-20">
                <div className="divider text-2xl font-bold">WHAT OTHERS ARE SAYING</div>
            </div>
            
            <div className="carousel w-full">
                {/* slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Margaret</h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>This is the best service ever!!  So easy.</p>
                            <p>05/23/2023</p>
                            <div className="badge badge-accent">Plumbing</div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                {/* slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                <div className="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dave</h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>Great Experience.  Will use again.</p>
                            <p>05/23/2023</p>
                            <div className="badge badge-accent">Electrical</div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                {/* slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                <div className="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Sam</h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>I didn't have to lift a finger!</p>
                            <p>05/23/2023</p>
                            <div className="badge badge-accent">Plumbing</div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                {/* slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                <div className="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Jerry</h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p>My lawn has never looked better.</p>
                            <p>05/23/2023</p>
                            <div className="badge badge-accent">Landscaping</div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* featured providers cards */}
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
                                    <img src={require('../images/profileplaceholder.png')} alt="landscaping" />
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
                                    <img src={require('../images/profileplaceholder.png')} alt="landscaping" />
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
                                    <img src={require('../images/profileplaceholder.png')} alt="landscaping" />
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

            {/* get started section */}
            <div className="flex flex-col w-full border-opacity-50 mt-20">
                <div className="divider text-2xl font-bold">GET STARTED</div>
            </div>
            <div className="card mt-5 mx-20 mb-20">
                <div className="card flex flex-col w-full md:flex-row">
                    <div className="grid w-1/2 place-items-center">
                        <img className="mask mask-hexagon mb-5" src={require('../images/signup.jpeg')} alt="moving"/>
                        <button className="btn btn-outline btn-accent">Sign Up</button>
                    </div> 
                    <div className="divider md:divider-horizontal"></div> 
                    <div className="grid w-1/2 place-items-center">
                        <img className="mask mask-hexagon mb-5" src={require('../images/tools.jpeg')} alt="painting"/>
                        <button className="btn btn-outline btn-accent">Become a Provider</button>
                    </div> 
                </div>
            </div>

        </div>
    )
};

export default Home;