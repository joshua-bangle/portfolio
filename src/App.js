import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';



import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Card from './components/Cards/Card/Card'
import About from './components/About/About'


function App() {
  // var lightText = {
  //   color: 'white'
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path='/' exact component={Home} />
        <Route path='/card1' component={Card} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
