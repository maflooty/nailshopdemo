import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });

    // We add payload to SERVER  //
    const payload = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
    };

    // Using axios to post data to the server
    axios({
      url: '/messages',
      method: 'POST',
      data: payload,
    })
      .then()
      .catch();
  };

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
              <form method='POST'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    placeholder='Email'
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='tel'
                    className='form-control'
                    name='phone'
                    placeholder='Phone Number'
                    value={this.state.phone}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    cols='30'
                    rows='3'
                    placeholder='Message'
                    name='message'
                    value={this.state.message}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <button
                  className='btn btn-outline-primary  text-uppercase mt-1'
                  type='submit'
                  onClick={(e) => this.onSubmit(e)}
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
