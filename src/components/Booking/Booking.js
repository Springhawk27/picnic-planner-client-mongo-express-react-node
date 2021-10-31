import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Booking = () => {
    const { spotId } = useParams();
    const [spot, setSpot] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/picnicSpots/${spotId}`)
            .then(res => res.json())
            .then(data => setSpot(data))
    }, [])



    return (

        <div className="lg:w-1/1 md:w-1/1 p-4 w-full hover:shadow-xl">
            <div className="block relative h-48 rounded overflow-hidden">
                <img alt="spot" className="object-contain object-left w-full h-full block" src={spot?.img} />
            </div>
            <div className="mt-2 text-left">
                <h2 className="text-blue-600 title-font text-lg font-medium">{spot?.name}</h2>
                <h2 className="text-grey-600 title-font text-lg ">Location: {spot?.location}</h2>
                <h2 className="text-grey-600 title-font text-lg ">Guide Name: {spot?.guideName}</h2>
                <p className="mt-1">Description: {spot?.description}</p>
                <p className="mt-1 text-red-700">Cost: {spot?.price} taka</p>
                <NavLink to="/doctors" className="flex justify-start mt-2">
                    < button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Proceed to Checkout</button>
                </NavLink>

            </div>
        </div >
    );
};

export default Booking;