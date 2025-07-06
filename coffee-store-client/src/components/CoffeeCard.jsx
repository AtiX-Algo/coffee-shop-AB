import React from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your coffee has been deleted.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    });

                    //remove the deleted coffee from the state
                const remainingCoffees = coffees.filter(coffee => coffee._id !== _id);
                setCoffees(remainingCoffees);
            }
        });

    }

    const { name, price, quantity, photo } = coffee;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="Coffee" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/coffee-details/${coffee._id}`}>
                            <button className="btn btn-primary">View</button>
                        </Link>
                        <Link to={`/update-coffee/${coffee._id}`}>
                            <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(coffee._id)} className="btn btn-primary">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;