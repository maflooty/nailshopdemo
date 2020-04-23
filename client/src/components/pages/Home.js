import React, { Component } from 'react';

import Services from './Services';
import Contact from './Contact';
import About from './About';
import Footer from '../layouts/Footer';
import SlideShow from '../layouts/slideShow';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SlideShow />
        <Services />
        <About />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
