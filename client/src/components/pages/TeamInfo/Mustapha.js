import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mustapha from '../membersImages/mustapha.jpeg';

export default class Mustapha extends Component {
  render() {
    return (
      <div>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <img src={mustapha} alt='Mustapha' className='img-fluid' />
            </div>
            <div
              className='col-10 mx-auto col-md-6 my-3'
              style={{ fontStyle: 'italic' }}
            >
              <h3>
                Name:{' '}
                <span style={{ color: '#9b8884' }}>
                  Mustapha Mohammed Sheraf
                </span>
              </h3>
              <h3 className='text-information'>
                Title:{' '}
                <span style={{ color: '#9b8884' }}>
                  Full Stack Junior Developer
                </span>
              </h3>
              <div className='skills'>
                <h3 className='text-capitalize  mb-0'>Skills:</h3>
                <ul>
                  <li>
                    HTML5/CSS{' '}
                    <span className='bar'>
                      <span className='html'></span>
                    </span>
                  </li>
                  <li>
                    Bootstrap
                    <span className='bar'>
                      <span className='bootstrap'></span>
                    </span>
                  </li>
                  <li>
                    JavaScript
                    <span className='bar'>
                      <span className='javascript'></span>
                    </span>
                  </li>
                  <li>
                    React
                    <span className='bar'>
                      <span className='react'></span>
                    </span>
                  </li>
                  <li>
                    NodeJS
                    <span className='bar'>
                      <span className='nodejs'></span>
                    </span>
                  </li>
                  <li>
                    Express
                    <span className='bar'>
                      <span className='express'></span>
                    </span>
                  </li>
                  <li>
                    MongoDB
                    <span className='bar'>
                      <span className='mongodb'></span>
                    </span>
                  </li>
                </ul>
              </div>
              <h3 className='text-information'>
                <span className='text-primary'>Contact Details:</span>
                <br />
                <a href='https://www.facebook.com'>
                  <i className='mx-1 fab fa-facebook'></i>
                </a>
                <a href='https://www.github.com/maflooty'>
                  <i className='mx-1 fab fa-github'></i>
                </a>
                <a href='https://www.linkedin.com/in/mustapha-mohammed-sheraf-00749419b'>
                  <i className='mx-1 fab fa-linkedin'></i>
                </a>
              </h3>
              <div>
                <Link to='/about'>
                  <button className='btn btn-primary mt-5'>
                    Back To About
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
