//src/components/AddCoffee.jsx
import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData);
        console.log(coffeeData);

        //  coffeeData to  backend API
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(coffeeData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        form.reset(); 
    };

    return (

        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>Please fill in the details below to add a new coffee.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter Coffee Name" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Chef</label>
                        <input type="text" name='chef' className="input w-full" placeholder="Enter Coffee Chef" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Enter Coffee Supplier" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Enter Coffee Category" />

                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />

                    </fieldset>
                    
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
                       

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter Coffee Photo URL" />

                </fieldset>
                <input type="submit" className='btn w-full' value="Add Coffee" />
            </form>
        </div>

    );
};

export default AddCoffee;