import React, {useState} from 'react';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');


    const handleChange = (e) => {
        setCity(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city)
    }

    return (

        <div className="container">
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type='text'
                    placeholder='Search Cities...'
                    value={city}
                    onChange={handleChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>

        </div>
    );
};


export default CitySelector;


