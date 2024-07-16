import './searchBar.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../assets/img/search.png';

function SearchBar() {
    const [inputs, setInputs] = useState({
        itemName: '',
        minPrice: '',
        maxPrice: ''
      });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const query = new URLSearchParams(inputs).toString();
        navigate(`/search?${query}`);
      };

    return (
        <div className='searchBar'>
            <div className="type" > 
                <a href="/list">
                    <h3> 
                        Let's Buy Something! 
                    </h3>
                </a>
            </div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    name="itemName" 
                    placeholder='Item to search' 
                    value={inputs.itemName}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="minPrice" 
                    min={0} max={10000} 
                    placeholder='Minimum Price' 
                    value={inputs.minPrice}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="maxPrice" 
                    min={0} 
                    max={10000} 
                    placeholder='Maximum Price'
                    value={inputs.maxPrice}
                    onChange={handleChange} 
                />
                <button type='submit'>
                    <img src={Search} alt="Search" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar

