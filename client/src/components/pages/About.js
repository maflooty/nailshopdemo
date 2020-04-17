import React, { Component } from 'react';
import akader from './membersImages/akader.jpeg';
import dena from './membersImages/dena.jpeg';
import masha from './membersImages/masha.jpeg';
import mustapha from './membersImages/mustapha.jpeg';
import Team from './TeamInfo/Team';

class About extends Component {
  state = {
    teamVisible: false,
  };
  render() {
    const members = this.state.teamVisible ? <Team /> : null;
    return (
      <div className='about-page py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 my-4 text-dark'>
              <h1 className='text-uppercase display-3'>About Us!</h1>

              <h3>
                We are <strong>Hack Your Future Belgium </strong>students of
                class #6.
              </h3>
              <p>
                We are coding really hard for the past 7 months. We create our
                masterpiece strugling with tons of stuck moments. But we are so
                grateful for all who support us.
              </p>
              <p>
                Our thanks and gratitude goes to all supports from Hack Your
                Future, our lovely coaches and the last but not least is our
                classmates.
              </p>
              <button
                onClick={() => {
                  this.setState({ teamVisible: true });
                }}
                className='btn main-btn my-4 text-capitalize'
              >
                Our Team{' '}
              </button>
            </div>
            <div className='col-md-6  about-pictures my-4 d-none d-lg-block'>
              <img
                src={akader}
                alt='akader'
                className='img-1 img-thumbnail about-image'
              />
              <img
                src={masha}
                alt='masha'
                className='img-3 img-thumbnail about-image'
              />
              <img
                src={mustapha}
                alt='mustapha'
                className='img-4 img-thumbnail about-image'
              />
              <img
                src={dena}
                alt='dena'
                className='img-5 img-thumbnail about-image'
              />
            </div>
          </div>
        </div>
        {members}
      </div>
    );
  }
}
export default About;
