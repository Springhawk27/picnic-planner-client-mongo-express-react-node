import React from 'react';
import { NavLink } from 'react-router-dom';
import banner2 from '../../images/banner/banner2.png'

const Banner = () => {
    return (
        <div>
            <section className="text-gray-600 body-font bg-gradient-to-b from-yellow-200  to-yellow-0">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We are a small family

                            <br className="hidden lg:inline-block" /> that had grown big with all
                            <br className="hidden lg:inline-block" /> your love….
                        </h1>
                        <p className="mb-8 leading-relaxed">Check your Favourite picnic spot now. It's simple, fast and  cost you less.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                                <NavLink to="/spots">Book Now</NavLink>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={banner2} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;