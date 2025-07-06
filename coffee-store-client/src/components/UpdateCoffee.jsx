import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const {name, chef, supplier, taste, category, details, photo} = useLoaderData();

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());

        fetch(`http://localhost:5000/coffees/${name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Coffee updated successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }

        });

    };

    return (
        
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Update Coffee</h1>
                <p>Please fill in the details below to update the coffee.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter Coffee Name" defaultValue={name} />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Chef</label>
                        <input type="text" name='chef' className="input w-full" placeholder="Enter Coffee Chef" defaultValue={chef} />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter Coffee Supplier" defaultValue={supplier} />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" defaultValue={taste} />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Enter Coffee Category" defaultValue={category} />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" defaultValue={details} />

                    </fieldset>
                    
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
                       

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter Coffee Photo URL" defaultValue={photo} />
                
                </fieldset>
                <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;