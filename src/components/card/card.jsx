import './card.scss'
import { Link } from 'react-router-dom';
import Star from '../../assets/img/star.png';
import Save from '../../assets/img/save.png';


function Card ({item}) {

    return (
        <div className='card'> 
            <Link to={`/${item.id}`} className='imageContainer'>
                <img src={item.img} alt="" />
        
            </Link>
            <div className='textContainer'>
                <h2 className="title">
                    <Link to={`/${item.id}`}> {item.title} </Link>
                </h2>
                <p className="rating">
                    <span>{item.rating}</span>
                    <img src={Star} alt="" />
                    <p>{item.reviews} reviews</p>
                </p>
                <p className="price">${item.price} </p>
                <div className="bottom">
                    <div className='features'>
                        <div className='feature'>
                            <span>type: {item.type}</span>
                        </div>
                        <div className='feature'>
                            <span>{item.stock} in stock</span>
                        </div>
                    </div>
                    {/* 
                    <div className='icons'>
                        <div className='icon'>
                            <img src={Save}></img>
                        </div>
                    </div>
                    */}
                </div>
            </div>

        </div>

    )
}

export default Card;