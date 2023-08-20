import React, { useState } from 'react';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleSaveClick = () => {
        props.handleSaveClick(value);
    };

    return (
        <div>
            <input
                required
                type='number'
                className='form-control mr-3'
                id='name'
                value={value}
                onChange={handleInputChange}
            />
            <button
                type='button'
                className='btn btn-primary'
                onClick={handleSaveClick}
            >
                Save
            </button>
        </div>
    );
};

export default EditBudget;