import React, { Component } from 'react';
import UserFormDetails from './UserFormDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    city: '',
    phone: '',
    service: '',
    aptdate: '',
    apttime: '',
    about: '',
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      name,
      email,
      city,
      phone,
      service,
      aptdate,
      apttime,
      about,
    } = this.state;
    const values = {
      name,
      email,
      service,
      city,
      phone,
      aptdate,
      apttime,
      about,
    };

    switch (step) {
      case 1:
        return (
          <UserFormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success name={name} />;
    }
  }
}

export default UserForm;
