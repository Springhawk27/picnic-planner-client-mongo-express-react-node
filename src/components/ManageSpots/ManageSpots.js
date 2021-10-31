import React, { useEffect, useState } from 'react';

const ManageSpots = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/picnicSpots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/picnicSpots/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert("Deleted")
                    const remaining = spots.filter(spot => spot._id !== id)
                    setSpots(remaining);
                }

            })
    }

    return (
        <div>
            <h2 className="bg-blue-500 py-2 text-white font-bold mb-4">Manage your  picnic spot here</h2>

            {
                spots.map(spot => <div
                    className="flex flex-col justify-center  items-center"
                    key={spot._id}
                >
                    <div className="border-2 border-yellow-200 p-2 m-2 rounded w-2/5 bg-yellow-50">
                        <h3>{spot.name}</h3>
                        <button className=" bg-yellow-300 py-1 px-2 border-0 rounded" onClick={() => handleDelete(spot._id)}>Delete</button>

                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageSpots;


// Moinot Ghat, Dohar
// Location: Dhaka
// Guide Name: Al Helal
// Description: Mainot Ghat is a place in Doha upazila of Dhaka District. Across the river Bhadrasan of Faridpur on the river.

// Cost: 4500 taka