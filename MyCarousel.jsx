import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'

const MyCarousel = () => {
  return (
    <>
     <Carousel>
                <div>
                    <img src="./AdobeStock_488129699_Preview.jpeg" />
                    <p className="pet"></p>
                </div>
                <div>
                    <img src="./AdobeStock_554802089_Preview.jpeg" />
                    <p className="pet"></p>
                </div>
                <div>
                    <img src="./AdobeStock_666095703_Preview.jpeg" />
                    <p className="pet"></p>
                </div>
            </Carousel>
    </>
  )
}

export default MyCarousel