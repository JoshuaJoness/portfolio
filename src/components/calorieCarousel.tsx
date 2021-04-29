import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cc1 from './calorieCam/Image.svg';
import cc2 from './calorieCam/Image1.svg';
import cc3 from './calorieCam/Image2.svg';
import cc4 from './calorieCam/Image3.svg';
import cc5 from './calorieCam/Image4.svg';
import cc6 from './calorieCam/Image5.svg';
import cc7 from './calorieCam/Image6.svg';
import cc8 from './calorieCam/Image7.svg';
import cc9 from './calorieCam/Image8.svg';

const CalorieCarousel = () => {
        return (
            <Carousel width={'40%'} autoPlay infiniteLoop>
                <div style={{ height: 800 }}>
                    <img src={cc1} style={{ height: 800 }} />
                </div>
                <div>
                    <img src={cc2} style={{ height: 800 }}/>
                </div>
                <div>
                    <img src={cc3} style={{ height: 800 }}/>
                </div>
            </Carousel>
        )
};

export default CalorieCarousel;