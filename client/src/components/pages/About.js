import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import akader from './membersImages/akader.jpeg';
import dena from './membersImages/dena.jpeg';
import masha from './membersImages/masha.jpeg';
import mustapha from './membersImages/mustapha.jpeg';
import ReactPlayer from 'react-player';

class About extends Component {
  render() {
    return (
      <div className='about-page py-5'>
        <div className='container'>
          <section>
            <div className='row'>
              <div className='col-md-6 my-4 text-dark'>
                <h1>About Us!</h1>
                <hr />
                <h3>We are Hack Your Future Belgium students of class #6.</h3>
                <p>
                  We are coding really hard for the past 7 months. We create our
                  masterpiece strugling with tons of stuck moments. But we are
                  so grateful for all who support us.
                </p>
                <p>
                  Our thanks and gratitude goes to all supports from Hack Your
                  Future, our lovely coaches and the last but not least is our
                  classmates.
                </p>
              </div>
              <div className='col-md-6  about-pictures  d-none d-lg-block'>
                <Link to='/akader'>
                  <img
                    src={akader}
                    alt='akader'
                    className='img-1 img-thumbnail about-image'
                  />
                </Link>
                <Link to='/masha'>
                  <img
                    src={masha}
                    alt='masha'
                    className='img-3 img-thumbnail about-image'
                  />
                </Link>
                <Link to='/mustapha'>
                  <img
                    src={mustapha}
                    alt='mustapha'
                    className='img-4 img-thumbnail about-image'
                  />
                </Link>
                <Link to='/dena'>
                  <img
                    src={dena}
                    alt='dena'
                    className='img-5 img-thumbnail about-image'
                  />
                </Link>
              </div>
            </div>
          </section>
          <section className='py-5'>
            <div className='row'>
              <div className='col-md-4'>
                <h1>Watch Our Video</h1>
                <hr />
                <p className='my-5'>
                  We take the work out of connecting with us so you can
                  accomplish more. Learn how painless booking appointment can be
                  using Nailshop.
                </p>
              </div>
              <div className='col-md-6'>
                <div className=' player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=2vt-0D0ddx0'
                    controls={true}
                    width='100%'
                    height='100%'
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default About;
