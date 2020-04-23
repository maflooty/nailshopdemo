import React from 'react';

const Success = (props) => {
  return (
    <div className='container my-5 py-5'>
      <div className='success-container'>
        <div className='col-sm-12 col-lg-6'>
          <h1>Successful</h1>
          <hr />
          <h3>
            Thank You
            <span style={{ fontFamily: 'Cookie', fontSize: '42px' }}>
              {props.name}!
            </span>
          </h3>
          <h3> Your appointment is confirmed</h3>
          <p className='lead'>
            We are looking forward to welcome you in our store. To cancel
            appointment, please call 24 hours before your appointment time...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
