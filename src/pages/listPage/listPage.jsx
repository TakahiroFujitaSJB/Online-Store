import './listPage.scss'
import { listData } from '../../lib/data';
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"

function ListPage () {

    const data = listData;

    return (
        <div className='listPage'>
            <div className='listContainer'>
                <div className='wrapper'>
                    <Filter />
                </div>

                <div className="display">
                    {data.map(item => (
                    <Card key ={item.id} item={item}/>
                    ))} 
                </div> 
                
            </div>
        </div>

    )
}

export default ListPage;