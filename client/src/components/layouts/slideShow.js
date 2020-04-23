import React, { Component } from 'react';
import slide01 from './screen.jpg';
import slide02 from './cake.jpg';
import slide03 from './redfinger.jpg';

class SlideShow extends Component {
  render() {
    return (
      <div className='CarouselPage'>
        <div
          id='carouselExampleControls'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={slide02} className='d-block w-100' alt='first slide' />
            </div>
            <div className='carousel-item'>
              <img src={slide01} className='d-block w-100' alt='second slide' />
            </div>
            <div className='carousel-item'>
              <img src={slide03} className='d-block w-100' alt='third slide' />
            </div>
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleControls'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleControls'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SlideShow;
