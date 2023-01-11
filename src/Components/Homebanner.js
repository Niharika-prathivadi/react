import React from 'react'
import '../Components/CSS/Homebanner.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Homebanner() {
  return (
    <div className='main_banner'>
      <Carousel autoplay className='carousel_container' showArrows={true} transitionTime={1000} showStatus={false} showIndicators={false} swipeable={true} showThumbs={false} >
                <div className='banner_main'>
                    <img src={require('../Components/Images/b1.jpg')}  className="banner1"/>
                    <div className='banner_content'>
                      <h1>Articles</h1>
                      <p>Discover our in-depth articles on nutrition,plant based living and productivity.</p>
                    </div>
                </div>
                <div className='banner_main'>
                    <img src={require('../Components/Images/b2.jpg')} className="banner2" />
                    <div className='banner_content'>
                      <h1>Shop</h1>
                      <p>Browse through  a crafted collection of appliances,book and pantry staples that we use at Pickup Limes.</p>
                    </div>
                </div>
                <div className='banner_main'>
                    <img src={require('../Components/Images/b3.jpg')} className="banner3" />
                  <div className='banner_content'>
                  <h1>Recipes</h1>
                  <p>Get cooking with the collection of our delicious plant based recipe.</p>
                  </div>
                </div>
            </Carousel>
         

    </div>
  )
}

export default Homebanner