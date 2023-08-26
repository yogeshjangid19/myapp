import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const HomeCarousel = () => {
  return (
    <div>
        <Carousel className='carousel'>
       <Carousel.Item>
        <img src='https://trumpwallpapers.com/wp-content/uploads/Marvel-Wallpaper-04-3840-x-2160.jpg' text="First slide" alt='' />
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://wallpapercave.com/wp/wp2588492.jpg" text="Second slide" alt='' />
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://4kwallpapers.com/images/walls/thumbs_2t/167.jpg" text="Third slide" alt=''/>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default HomeCarousel
