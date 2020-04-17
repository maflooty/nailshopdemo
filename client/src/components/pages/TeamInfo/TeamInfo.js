import React, { Component } from 'react';
import { TeamConsumer } from '../TeamInfo/TeamContext';

export default class TeamInfo extends Component {
  render() {
    const { member, title, experience, image } = this.props.item;
    return (
      <TeamConsumer>
        {(value) => (
          <div className='card-deck col-10 col-lg-3 mx-auto mb-5 '>
            <div className='card'>
              <img src={image} alt={member} className='card-img-top' />
              <div className='card-body text-dark'>
                <h3 className='card-title text-uppercase '>{member}</h3>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{experience}</p>
              </div>
            </div>
          </div>
        )}
      </TeamConsumer>
    );
  }
}
