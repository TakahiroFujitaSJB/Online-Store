import './resultPage.scss'
import { listData } from '../../lib/data';
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"
import { useLocation } from 'react-router-dom';

function ResultPage () {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const query = params.get('itemName') || '';
    const type = params.get('type') || '';
    const minPrice = parseFloat(params.get('minPrice')) || 0;
    const maxPrice = parseFloat(params.get('maxPrice')) || Infinity;

    const filteredResults = listData.filter((item) => {
        if (query != '' && type == '')
            {
                const matchesType = item.type.toLowerCase().includes(query.toLowerCase()) 
                const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
                return matchesType && matchesPrice;
            }
        else{
            const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
            const matchesType = type === '' || item.type === type;
            const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
            return matchesQuery && matchesType && matchesPrice;
        }
        
    });

    return (
        <div className="resultPage">
            <div className="listContainer">
                <div className="wrapper">
                    <h1> Showing results for "{query}" </h1>
                    <Filter />
                </div>
                <div className="display">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((item) => (
                        <Card key={item.id} item={item} />
                        ))
                    ) : (
                        <h1>No matching results found</h1>
                  )}
                </div>
            </div>
        </div>
    );
};

export default ResultPage;