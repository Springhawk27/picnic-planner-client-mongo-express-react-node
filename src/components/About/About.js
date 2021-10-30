import React from 'react';
import about_us from '../../images/about/about_us.png'
import goal_objective from '../../images/about/goal_objective.jpg'


const About = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={about_us} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who <strong>We Are</strong>
                        </h1>
                        <p className="mb-8 leading-relaxed">Picnic Planner, the country's largest picnic planner and guidance platform, helps thousands of people each day become better travelers, from planning to booking to taking a picnic trip. People across the country use the Picnic Planner site and app to discover where to plan their picnic.  Picnic Planner makes planning easy no matter where the place is.

                        </p>

                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src={goal_objective} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our Goal</h2>
                                <p className="leading-relaxed text-base">Our goal is  to serve people with a place of relaxation and a fun place for all the members of the family.

                                </p>

                            </div>
                        </div>

                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Our Objective</h2>
                                <p className="leading-relaxed text-base">
                                    <li>To render the country's standard  service to the people of the country at an affordable </li>
                                    <li>To promote Tourist spot  & resort and hotels.</li>
                                    <li>To make planning a vacation much easier.</li>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;