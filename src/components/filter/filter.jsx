import './filter.scss'
import Search from '../../assets/img/search.png';


function Filter () {


    return (
        <div className='filter'>
            <h1> Explore </h1>
            <div className='top'>
                <div className='item'>
                    <input type='text' id='itemName' name='itemName' placeholder='Item Name' />
                </div>
            </div>
            <div className='bottom'>
                <div className='item'>
                    <label htmlFor="type">Type </label>
                    <select name="type" id="type">
                        <option value=""> any </option>
                        <option value="music"> music </option>
                        <option value="electronics"> electronics </option>
                        <option value="antiques"> antiques </option>
                        <option value="furniture"> furniture </option>
                        <option value="food"> food </option>
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor="minPrice"> Min Price </label>
                    <input type='number' id='minPrice' name='minPrice' placeholder='any' />
                </div>
                <div className='item'>
                    <label htmlFor="maxPrice"> Max Price </label>
                    <input type='number' id='maxPrice' name='maxPrice' placeholder='any' />
                </div>
                <div className='item'>
                    <label> <br></br></label>
                    <button>
                        <img src={Search} alt="" />
                    </button>
                </div>

                
            </div>
        </div>

    )
}

export default Filter;