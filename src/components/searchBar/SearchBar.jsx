import './searchBar.scss';
import React, { useState } from 'react'
import Search from '../../assets/img/search.png';

function SearchBar() {
    const [query,setQuery] = useState({
        type: "buy",
        minPrice:0,
        maxPrice:0,
    })

    const switchType = (val) => {
        setQuery((prev) => ({...prev, type: val}));
    }


    return (
        <div className='searchBar'>
            <div className="type"> 
                <h3> 
                    Let's Buy Something! 
                </h3>
            </div>
            <form>
                <input type="text" name="location" placeholder='Item to search' />
                <input type="number" name="minPrice" min={0} max={10000} placeholder='Minimum Price' />
                <input type="number" name="maxPrice" min={0} max={10000} placeholder='Maximum Price' />
                <button>
                    <img src={Search} alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar