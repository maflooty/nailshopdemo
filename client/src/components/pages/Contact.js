import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className='contact-page py-5'>
        <div className='container'>
          <div className='well well-sm'>
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className='row location'>
            <div className='col-md-6'>
              <iframe
                src='https://www.google.com/maps/d/embed?mid=1d3_ypVE6RmyumVdFo5UPB7Cfz1ywuWRq'
                style={{
                  border: '0',
                  width: '100%',
                  height: '315px',
                  frameBorder: '0',
                }}
                allowFullScreen
              ></iframe>
              <i className='fas fa-map-marker btn-danger'></i>
              <h4>Diestsestraat 150, 3000 Leuven </h4>
            </div>
            <div className='col-md-6'>
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='tel'
                    className='form-control'
                    placeholder='Phone Number'
                  />
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      cols='30'
                      rows='3'
                      placeholder='Message'
                    />
                  </div>
                </div>
                <button
                  className='btn btn-outline-primary  text-uppercase mt-1'
                  type='submit'
                >
                  <i className='fa fa-paper-plane-o' aria-hidden='true' />
                  &nbsp;Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
