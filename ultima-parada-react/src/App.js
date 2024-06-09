import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Category from './pages/Category'
// import FoodPage from './pages/FoodPage'
import NotFound from './pages/NotFound'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={ Home } />
          <Route exact path="/menu" Component={ Menu } />
          <Route exact path="/:id" Component={ Category } />
          {/* <Route exact path="/:id/:id" Component={ FoodPage } /> */}
          <Route exact path="*" Component={ NotFound } />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
