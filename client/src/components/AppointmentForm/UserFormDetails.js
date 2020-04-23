import React, { Component } from 'react';

// Book Appointment Form
class UserFormDetails extends Component {
  state = {
    errors: {},
  };

  // Function to continue to confirmation page
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    const errors = this.validate();

    this.setState({ errors });
    if (errors) return;
  };

  // Function to validate the form
  validate = () => {
    const errors = {};
    const { values } = this.props;
    if (values.name.trim() === '') errors.name = 'Name is required';
    if (values.phone.trim() === '') errors.phone = 'Phone number is required';
    if (values.service.trim() === '') errors.service = 'Service is required';
    if (values.aptdate.trim() === '')
      errors.aptdate = 'Appointment date is required';
    if (values.apttime.trim() === '')
      errors.apttime = 'Appointment time is required';
    return Object.keys(errors).length === 0 ? null : errors;
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <section className='appt-form py-5'>
        <div className='container main-container'>
          <div>
            <h1>Book Appointment </h1>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-lg-6'>
              <form>
                <div className='form-group was-validated'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Full Name'
                    name='name'
                    required
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                  />

                  <div className='invalid-feedback'>Name is required.</div>
                </div>
                <div className='form-group was-validated'>
                  <input
                    className='form-control'
                    type='tel'
                    placeholder='Phone Number ex. +32465111111'
                    name='phone'
                    required
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                  />

                  <div className='invalid-feedback'>
                    Phone number is required.
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Email'
                    name='email'
                    required
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                  />
                </div>

                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='City'
                    name='city'
                    required
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                  />
                </div>
                <div className='form-group was-validated'>
                  <label htmlFor='sel1'>Choose a service:</label>

                  <select
                    className='form-control'
                    id='sel1'
                    type='text'
                    name='service'
                    required
                    onChange={handleChange('service')}
                    defaultValue={values.service}
                  >
                    <option></option>
                    <option>Manicure €20</option>
                    <option>Manicure & Colors €35</option>
                    <option>Acrylic NewSet €40 </option>
                    <option>Acrylic Retouch €35</option>
                    <option>Gel New NewSet €40</option>
                    <option>Gel Retouch €35</option>
                    <option>Shellac €25</option>
                    <option>Pedicure €38</option>
                    <option>Pedicure & Colors €45</option>
                    <option>Remove Nails €13</option>
                    <option>Nail Art €2/finger </option>
                  </select>

                  <div className='invalid-feedback'>Service is required.</div>
                </div>
                <div className='form-group was-validated'>
                  <label htmlFor='sel1'>Select Date:</label>
                  <input
                    className='form-control'
                    type='date'
                    placeholder='Appointment Date'
                    name='aptdate'
                    required
                    onChange={handleChange('aptdate')}
                    defaultValue={values.aptdate}
                  />

                  <div className='invalid-feedback'>
                    Appointment date is required.
                  </div>
                </div>

                <div className='form-group was-validated'>
                  <label htmlFor='sel1'>Select Time:</label>

                  <select
                    className='form-control'
                    id='sel1'
                    type='text'
                    name='apttime'
                    required
                    onChange={handleChange('apttime')}
                    defaultValue={values.apttime}
                  >
                    <option></option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                  </select>

                  <div className='invalid-feedback'>
                    Appointment time is required.
                  </div>
                </div>

                <div className='form-group'>
                  <textarea
                    className='form-control'
                    name='about'
                    onChange={handleChange('about')}
                    defaultValue={values.about}
                    placeholder='Special Request'
                  />
                </div>

                <div className='form-group'>
                  <button
                    disabled={this.validate()}
                    className='btn btn-primary btn-lg'
                    type='submit'
                    label='Continue'
                    onClick={this.continue}
                  >
                    Submit
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

export default UserFormDetails;
