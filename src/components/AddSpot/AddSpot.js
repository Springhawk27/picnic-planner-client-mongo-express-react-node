import React from 'react';
import axios from 'axios';
import './AddSpot.css';
import { useForm } from "react-hook-form";


const AddSpot = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/picnicSpots', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add__spot ">
            <h2 className="bg-blue-500 py-2 text-white font-bold mb-4">Add a picnic spot here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })} placeholder="name" />
                <input {...register("location", { required: true, maxLength: 30 })} placeholder="location" />
                <input {...register("guideName", { required: true, maxLength: 30 })} placeholder="guide name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddSpot;