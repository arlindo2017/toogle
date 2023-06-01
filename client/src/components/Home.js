import React from "react";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div class="hero min-h-screen">
                <img src={require("../images/mainbanner.jpeg")} alt="man installing lightbulb" class="hero min-h-screen object-cover"></img>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content pr-[45vw]">
                    <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome to toogle.</h1>
                    <p>We help you get things done.</p>
                    <p class="mb-5">By letting you let someone else do it.</p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* category grid */}
            <div class="flex flex-col w-full">
                <div class="grid h-10 card mt-20 rounded-box place-items-left text-2xl font-bold pl-10">Popular services</div> 
            </div>

            <div className="grid-container px-40 py-10">
                <div class="grid grid-cols-4 gap-4">
                    {/* card 1 */}
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div class="card-actions justify-end">
                                <div class="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div class="card-actions justify-end">
                                <div class="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div class="card-actions justify-end">
                                <div class="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div class="card bg-base-100 shadow-xl">
                        <figure><img src={require('../images/moving.jpeg')} alt="furniture assembly" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Furniture Assembly</h2>
                            <p>Avg Price: $57-128</p>
                            <div class="card-actions justify-end">
                                <div class="badge badge-outline">Moving</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second banner/hero */}
            <div class="card lg:card-side bg-base-100 shadow-xl mt-20">
                <figure className="w-1/2"><img src={require('../images/painting.jpg')} alt="painting"/></figure>
                <div class="card-body my-auto">
                    <h2 class="card-title">Turn your to-do list into a to-done list.</h2>
                    <p className="flex-grow-0">Find service providers for every inch of your house, all in one place.</p>
                        <li>Search by what's important to you.</li>
                        <li>View availability and schedule an appointment.</li>
                        <li>Leave reviews and view your previous orders.</li>
                </div>
            </div>

            {/* reviews section */}
            <div class="flex flex-col w-full">
                <div class="grid h-10 card mt-20 rounded-box place-items-left text-2xl font-bold pl-10">See what others are saying...</div> 
            </div>
            
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <div class="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Margaret</h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <p>This is the best service ever!!  So easy.</p>
                            <p>05/23/2023</p>
                            <div className="badge badge-accent">Plumbing</div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                <div class="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Dave</h2>
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
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                <div class="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Sam</h2>
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
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" class="carousel-item relative w-full">
                <div class="card w-full bg-base-100 shadow-xl my-5 mx-10 px-5">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Jerry</h2>
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
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Home;