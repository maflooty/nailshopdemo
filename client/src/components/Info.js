import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

class Info extends Component {
  render() {
    const { id, name, description, price, image, time } = this.props.item;
    return (
      <InfoConsumer>
        {(value) => (
          <div className='col-10 col-lg-4 mx-auto mb-5'>
            <div className='card' style={{ width: '18rem' }}>
              <img src={image} alt={name} className='card-img-top' />
              <div className='card-body'>
                <h3 className='card-title text-uppercase'>{name}</h3>
                <h5 className='card-title'>{(price, time)}</h5>
                <p className='card-text'>{description}</p>
                <Link
                  onClick={() => value.handleDetail(id)}
                  to='/details'
                  className='btn btn-outline-primary text-uppercase'
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
export default Info;
