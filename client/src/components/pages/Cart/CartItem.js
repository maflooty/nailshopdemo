import React from 'react';

export default function CartItem({ item, value }) {
  const { id, name, image, price, total } = item;
  const { removeItem } = value;
  return (
    <div className='row my-2 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={image}
          alt={name}
          style={{ width: '5rem', height: '5rem' }}
          className='img-fluid'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Service :</span>
        {name}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>Price :</span>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='btn' onClick={() => removeItem(id)}>
          <i className='fas fa-trash font-weight-bold btn btn-warning'></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong> Service Total : € {total}</strong>
      </div>
    </div>
  );
}
