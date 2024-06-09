import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import Feedback from '../components/Feedback';

class Home extends React.Component {
  render() {
    return (
      <>
        <Main />
        <About />
        <Feedback />
      </>
    );
  }
}

export default Home;
