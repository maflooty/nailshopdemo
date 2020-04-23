import React from 'react';

const Footer = () => {
  return (
    <div className='Footer-Container'>
      <div className='container main-footer'>
        <div className='row'>
          <div className='col-md-6 col-sm-6 '>
            <h1> Unleash your beauty</h1>
          </div>

          <div className='col-md-6 col-sm-6 Footer-Container-h2'>
            <h2> Opening Hours </h2>
            <p> Monday - Saturday 10.30 - 19.00 </p>

            <h2> Phone Number</h2>
            <p> +31 23456678</p>

            <h2>
              Connect to our{' '}
              <a href='https://www.facebook.com/vdnails.leuven'>
                {' '}
                <i className='fab fa-facebook'></i>
              </a>
            </h2>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; Copyright 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
