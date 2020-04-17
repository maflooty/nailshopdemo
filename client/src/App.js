import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import Default from './components/pages/Default';
import UserForm from './components/AppointmentForm/UserForm';
import Cart from './components/pages/Cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/appointment' component={UserForm} />
          <Route component={Default} />
        </Switch>
      </div>
    );
  }
}

export default App;
