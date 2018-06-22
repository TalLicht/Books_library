import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import BooksList from './components/BooksList';
import Footer from './components/Footer';

const API_KEY = 'AIzaSyC8RnrsZVArT6iLFaJm1F78fxd53H0WXLg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <BooksList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
