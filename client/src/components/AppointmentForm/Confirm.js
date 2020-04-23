import React, { Component } from 'react';
import axios from 'axios';

// Confirmation page
class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();

    // We add payload to SERVER  //
    const payload = {
      name: this.props.values.name,
      phone: this.props.values.phone,
      email: this.props.values.email,
      city: this.props.values.city,
      service: this.props.values.service,
      aptdate: this.props.values.aptdate,
      apttime: this.props.values.apttime,
      about: this.props.values.about,
    };

    // Using axios to post data to the server
    axios({
      url: '/appointments',
      method: 'POST',
      data: payload,
    })
      .then()
      .catch();

    this.props.nextStep();
  };

  // Function to enable us go back on the form
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { name, phone, email, city, service, aptdate, apttime, about },
    } = this.props;

    return (
      <section className='confirm-page  py-5'>
        <div className='container main-container'>
          <h2>Confirmation Page</h2>
          <hr />
          <div className='row'>
            <div className='col-sm-12 col-lg-6 '>
              <form method='POST' onSubmit={this.continue}>
                <div className='form-group'>
                  <input
                    name='name'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={name}
                  />
                </div>

                <div className='form-group '>
                  <input
                    name='phone'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={phone}
                  />
                </div>

                <div className='form-group'>
                  <input
                    name='email'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={email}
                  />
                </div>

                <div className='form-group'>
                  <input
                    name='city'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={city}
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='service'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={service}
                  />
                </div>

                <div className='form-group'>
                  <input
                    name='aptdate'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={aptdate}
                  />
                </div>

                <div className='form-group'>
                  <input
                    name='apttime'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={apttime}
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='about'
                    type='text'
                    className='form-control-plaintext'
                    defaultValue={about}
                  />
                </div>

                <div className='form-group'>
                  <button
                    className='btn btn-success btn-lg'
                    type='submit'
                    label='Continue'
                    onClick={this.continue}
                  >
                    Confirm
                  </button>
                  <button
                    className='btn btn-primary mx-2 btn-lg'
                    type='submit'
                    label='Back'
                    onClick={this.back}
                  >
                    Go Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Confirm;
