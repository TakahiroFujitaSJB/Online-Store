import './slider.scss'

function Slider ({images}) {
    return (
    <div className="slider"> 
        <div className='big'>
            <img src={images[0]} alt="" />
        </div>
        <div className='small'>
            {images.slice(1).map((image, index) => (<img src={image} alt="" key={index}/> ))}
        </div>

    </div>

    )
}

export default Slider;