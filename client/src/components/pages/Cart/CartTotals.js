import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
  const { cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right'>
            <Link to='/services'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                Clear All Services
              </button>
            </Link>
            <Link to='/appointment'>
              <button
                className='btn btn-outline-info text-uppercase mb-3 px-5'
                type='button'
              >
                Book Appointment
              </button>
            </Link>
            <h5>
              <span className='text-title font-weight-bold font-italic'>
                {' '}
                Total :{' '}
              </span>
              <strong>€ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
