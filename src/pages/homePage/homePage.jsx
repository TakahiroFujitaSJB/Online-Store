import './homePage.scss';
import SearchBar from '../../components/searchBar/SearchBar';
import OnlineStore from '../../assets/img/onlineStore.png';
import OnlineStore2 from '../../assets/img/onlineStore2.png';

function HomePage() {
    return (
        <div className='homePage'>
            <div className='textContainer'>  
                <div className='wrapper'>
                    <h1>Find and buy what you want from this Online Store</h1>
                    <p> 
                    FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT 
                    FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT 
                    FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT 
                    FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT 
                    FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT FILLER CONTENT 
                    </p>
                    <SearchBar />
                    <div className='metrics'>
                        <div className='metricsBox'>
                            <h1> 4000+ </h1>
                            <h2> Products </h2>
                        </div>
                        <div className='metricsBox'>
                            <h1> 2000+ </h1>
                            <h2> Sold </h2>
                        </div>
                        <div className='metricsBox'>
                            <h1> 5000+ </h1>
                            <h2> Reviews </h2>
                        </div>
                    </div>

                </div>
            </div>

            <div className='imgContainer'>  
                <img src={OnlineStore} alt="" />
                <img src={OnlineStore2} alt="" />
            </div> 
        </div>
    )
}

export default HomePage