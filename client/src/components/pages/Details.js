import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            name,
            image,
            price,
            description,
            time,
            inCart,
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-primary my-5'>
                  <h1>{name}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={image} alt={name} className='img-fluid' />
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <h3 className='text-primary'>
                    <strong>
                      Price : <span>€</span>
                      {price}
                    </strong>
                  </h3>
                  <h3 className='text-information'>
                    <strong>
                      Service Time : {time}
                      <span>mins</span>
                    </strong>
                  </h3>
                  <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                    Description about the service
                  </p>
                  <p className='text-muted lead'>{description}</p>
                  <div>
                    <Link to='/services'>
                      <button className='btn btn-primary'>
                        Back To Services
                      </button>
                    </Link>
                    <button
                      className='btn btn-secondary ml-3'
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? 'inCart' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
