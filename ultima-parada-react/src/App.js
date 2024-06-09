import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <About />
        <Feedback />
        <Footer />
      </>
    );
  }
}

export default App;
