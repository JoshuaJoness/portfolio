import React from 'react';
import cc1 from './calorieCam/Image.svg';
import cc2 from './calorieCam/Image1.svg';
import cc3 from './calorieCam/Image2.svg';
import cc4 from './calorieCam/Image3.svg';
import cc5 from './calorieCam/Image4.svg';
import cc6 from './calorieCam/Image5.svg';
import cc7 from './calorieCam/Image6.svg';
import cc8 from './calorieCam/Image7.svg';
import cc9 from './calorieCam/Image8.svg';

import CalorieCarousel from './calorieCarousel.tsx';

const CalorieCam = () => {
    return (
        <div style={{ display: 'flex', paddingLeft: '5%', paddingRight: '5%' }}>
            <img src={cc1} alt="image" style={{ height: 800, margin: 50 }}/>

            <img src={cc5} alt="image" style={{ height: 800, margin: 50 }}/>
            {/* <CalorieCarousel /> */}

            {/* <img src={cc8} alt="image" style={{ height: 800, width: '25%' }}/> */}
            <div style={{ fontSize: 30, width: '60%' }}>
                <p>Calorie cam is the first project that I released to Apple's <a>App Store</a>. </p>
                <p>This project utilizes two APIs. The first recognizes a food item from the user's picture. The second retrieves nutritional infromation
                    for the item.
                </p>
                <p>
                    The user can then log their item, and track both their macro and micro-nutrients.
                </p>
                <p style={{ color: '#A3B18A'}}>
                    <span style={{ color: '#3A5A40'}}>Built with </span> 
                    React Native, TypeScript
                </p>
                <p>Download <a>here</a></p>
                <i class="fab fa-github"></i>
            </div>

        </div>
    )
}

export default CalorieCam;

{/* <i class="fab fa-react" style={{ color: '#A3B18A'}}></i> */}