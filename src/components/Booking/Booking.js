import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Booking.css';


const Booking = () => {
    const { spotId } = useParams();
    const [spot, setSpot] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/picnicSpots/${spotId}`)
            .then(res => res.json())
            .then(data => setSpot(data))
    }, [])


    const onSubmit = data => {
        const id = spotId;
        data.orderId = id;
        data.spotName = spot?.name;
        data.spotPrice = spot?.price;
        data.spotLocation = spot?.location;
        data.img = spot?.img;

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order placed successfully');
                    reset();
                }
            })

        console.log(data)
    };



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
            <div className="order__form">
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user?.displayName} {...register("name", { required: true })} />
                    {errors.displayName && <span className="error">This field is required</span>}
                    <input defaultValue={user?.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />

                    <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                    <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                    <input type="submit" />
                </form>
            </div>
        </div >
    );
};

export default Booking;