import './resultPage.scss'
import { listData } from '../../lib/data';
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"
import { useLocation } from 'react-router-dom';

function ResultPage () {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('location') || '';
    const minPrice = parseFloat(params.get('minPrice')) || 0;
    const maxPrice = parseFloat(params.get('maxPrice')) || Infinity;

    const filteredResults = listData.filter((item) => {
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
        const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
        return matchesQuery && matchesPrice;
      });

    return (
        <div className='resultPage'>
            <div className='listContainer'>
                <div className='wrapper'>
                    <Filter />
                </div>

                <div className="display">
                    {filteredResults.map(item => (
                    <Card key ={item.id} item={item}/>
                    ))} 
                </div> 
                
            </div>
        </div>

    )
}

export default ResultPage;