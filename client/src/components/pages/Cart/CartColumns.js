import React from 'react';

export default function CartColumns() {
  return (
    <div className='container-fluid text-center my-5 d-none d-lg-block'>
      <div className='row'>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Service</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Name of Service</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Price</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Remove</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Total</p>
        </div>
      </div>
    </div>
  );
}
