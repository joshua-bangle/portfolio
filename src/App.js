import React from 'react';
import './App.css';

import About from './components/About/About'
import Card from './components/Card/Card'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'


function App() {
  // var lightText = {
  //   color: 'white'
  // }
  return (
    <div className="App">
      <Nav />
      <Hero>
      
      </Hero>
      <About />
      <div className='card-display'>
        <Card title="Test Card">
          This is my test card
        </Card>
        <Card title="second card">
          this is my second card
        </Card>
      </div>
      <Footer />
    </div>

  );
}

export default App;
