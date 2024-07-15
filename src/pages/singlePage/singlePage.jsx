import './singlePage.scss'
import Slider from '../../components/slider/Slider';
import Star from '../../assets/img/star.png';
import { singlePostData, userData } from '../../lib/data';
import { Link } from 'react-router-dom';


function SinglePage () {

    return (
    <div className="singlePage"> 
        <div className="details">
            <div className='wrapper'>
                <h1>{singlePostData.title}</h1>
                <Slider images={singlePostData.images} />
                <div className='info'>
                    <div className='top'>
                        <div className='post'>
                            <div className="rating">
                                <span>{singlePostData.rating}</span>
                                <img src={Star} alt="" />
                                <p>{singlePostData.reviews} reviews</p>
                            </div>
                            <div className='price'>${singlePostData.price} </div>
                        </div>
                        <div className='userSection'>
                            <p>Artist: {singlePostData.artist}</p>
                            <div className='user'>
                                <div className='userlink'>
                                    <Link to={`https://www.yohkamiyama.com/`} target="_blank">
                                        <img src={userData.img} alt="" />
                                    </Link>
                                </div>
                                <span>{userData.name}</span> 
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='mainDesc'>  {singlePostData.mainDescription} </div>
                        <div className='subDesc'> {singlePostData.subDescription} </div>
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