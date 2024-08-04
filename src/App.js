import React from 'react';
import DisplayFirst from './components/Display1/component';
import DisplaySecond from './components/Display2/component';
import DisplayThird from './components/Display3/component';
import DisplayFourth from './components/Display4/component';
import DisplayFifth from './components/Display5/component';
import DisplaySixth from './components/Display6/component';
import Header from './components/Header/component';
import Footer from './components/Footer/Footer';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <DisplayFirst />
      <DisplaySecond />
      <DisplayThird />
      <DisplayFourth />
      <DisplayFifth />
      <DisplaySixth />
      <Footer />
    </div>
  );
}

export default App;
