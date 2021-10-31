import React from 'react';
import { NavLink } from 'react-router-dom';
import useSpots from '../../hooks/useSpots';
import Spot from '../Spot/Spot';


const FeaturedSpots = () => {
    const [spots, setSpots] = useSpots([]);





    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-1 ">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-green-700">We have the below places for your next picnic and many more</h1>
                    </div>
                </div>
            </section>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <NavLink to="/spots" className="flex flex-wrap -m-4">
                            {
                                spots.slice(0, 6).map(spot => <Spot
                                    key={spot._id}
                                    spot={spot}

                                ></Spot>)
                            }

                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FeaturedSpots;