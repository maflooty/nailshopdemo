import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class EmptyCart extends Component {
  render() {
    return (
      <ComponentNotFound className='container my-5 py-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='error-template'>
              <h1>Ops!</h1>
              <h2>You Have Not Book Any Service</h2>
              <div className='error-details'>
                Click To Go Back To Services To Choose!
              </div>
              <div className='error-actions'>
                <Link to='/services' className='btn btn-outline-primary btn-lg'>
                  <i className='fas fa-home' />
                  &nbsp;Back To Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ComponentNotFound>
    );
  }
}

export default EmptyCart;

const ComponentNotFound = styled.div`
  .error-template {
    padding: 40px 15px;
    text-align: center;
  }
  .error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .btn {
    margin-right: 10px;
  }
`;
