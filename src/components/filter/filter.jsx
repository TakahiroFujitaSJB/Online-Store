import './filter.scss'
import Search from '../../assets/img/search.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Filter = () => {
    const [inputs, setInputs] = useState({
      itemName: '',
      type: '',
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
      <form className="filter" onSubmit={handleSearch}>
        <div className="top">
          <div className="item">
            <input
              type="text"
              id="itemName"
              name="itemName"
              placeholder="Item Name"
              value={inputs.itemName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <label htmlFor="type">Type </label>
            <select
              name="type"
              id="type"
              value={inputs.type}
              onChange={handleChange}
            >
              <option value="">any</option>
              <option value="music">music</option>
              <option value="electronics">electronics</option>
              <option value="antiques">antiques</option>
              <option value="furniture">furniture</option>
              <option value="food">food</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
              value={inputs.minPrice}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
              value={inputs.maxPrice}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label> <br /></label>
            <button type="submit">
              <img src={Search} alt="Search" />
            </button>
          </div>
        </div>
      </form>
    );
  };
  
  export default Filter;