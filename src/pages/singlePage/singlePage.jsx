import './singlePage.scss'
import Slider from '../../components/slider/Slider';
import Star from '../../assets/img/star.png';
import { singlePostData, userData } from '../../lib/data';
import { Link, useParams  } from 'react-router-dom';


function SinglePage () {
    const { id } = useParams();
    const data = singlePostData.find(item => item.id === parseInt(id));
    const user = userData.find(item => item.id === parseInt(id));

    if (!data) {
        return <div className="singlePage">No data found for ID: {id}</div>;
      }
    return (
    <div className="singlePage"> 
        <div className="details">
            <div className='wrapper'>
                <h1>{data.title}</h1>
                <Slider images={data.images} />
                <div className='info'>
                    <div className='top'>
                        <div className='post'>
                            <div className="rating">
                                <span>{data.rating}</span>
                                <img src={Star} alt="" />
                                <p>{data.reviews} reviews</p>
                            </div>
                            <div className='price'>${data.price} </div>
                        </div>
                        <div className='userSection'>
                            <p>Artist: {data.artist}</p>
                            <div className='user'>
                                <div className='userlink'>
                                    <Link to={user.link} target="_blank">
                                        <img src={user.img} alt="" />
                                    </Link>
                                </div>
                                <span>{user.name}</span> 
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='mainDesc'>  {data.mainDescription} </div>
                        <div className='subDesc'> {data.subDescription} </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='features'>
            <div className='wrapper'>
            </div>
        </div>
    </div>

    )
}

export default SinglePage;