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
                    Step into a world of endless possibilities at <strong>TF Online.</strong> From trend-setting fashion to cutting-edge tech and everything in between, we're here to make your shopping experience extraordinary. 
                    Why choose us? It's simple:
                    </p>
                    <p>
                        <br />&emsp; <strong>Curated Selection:</strong> Discover handpicked items that stand out from the crowd.
                        <br />&emsp;<strong> Effortless Shopping</strong>: Navigate our sleek interface for a seamless checkout.
                        <br />&emsp;<strong>Speedy Delivery</strong>: Enjoy swift shipping straight to your door.
                        <br />&emsp;<strong>Top-notch Service:</strong> Our team is always here to help, ensuring your satisfaction.
                    </p>
                    <p> Ready to elevate your shopping game? Dive in and discover what makes us your go-to online shopping destination. </p>
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