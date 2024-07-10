import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import Homepage from './Components/Homepage';
import Product from './Components/Product';



function App() {
  return (
    <div className="App">

    <Nav />  
    <Homepage />
    <Product />
    </div>
  );
}

export default App;
