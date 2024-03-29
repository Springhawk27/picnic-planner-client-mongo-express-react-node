import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();






    useEffect(() => {
        fetch('https://scary-demon-31223.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                const myBooking = data.filter(booking => booking.email == user?.email)
                setBookings(myBooking);
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete")

        if (proceed) {
            const url = `https://scary-demon-31223.herokuapp.com/bookings/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert("Deleted")
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }

                })
        }
    };






    return (
        <div>
            <h2 className="bg-blue-500 py-2 text-white font-bold mb-4">Review your order</h2>

            {
                bookings.map(booking => <div
                    className="flex flex-col justify-center  items-center"
                    key={booking._id}
                >
                    <div className="border-2 border-yellow-200 p-2 m-2 rounded w-2/5 bg-yellow-50">
                        <img src={booking.img} alt="" />
                        <h3>Spot Name: {booking.spotName}</h3>
                        <p>Price: {booking.spotPrice} taka</p>
                        <p>Location: {booking.spotLocation}</p>
                        <p className="bg-green-100 my-1 ">Status: {booking.status}</p>
                        <br />
                        <button className=" bg-yellow-300 py-1 px-2 border-0 rounded" onClick={() => handleDelete(booking._id)}>Delete</button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default MyBookings;