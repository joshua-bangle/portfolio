import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';



import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Card from './components/Cards/Card/Card'
import About from './components/About/About'


function App() {
  // var lightText = {
  //   color: 'white'
  // }

  return (
    <BrowserRouter>
      <div className="App">

        <Route path='/' exact component={About} />
        <Route path='/card1' component={Card} />
        <Route path='/projects' component={Home} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
