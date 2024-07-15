import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import Homepage from './Components/Homepage';
import Product from './Components/Product';
import FashionTrends from './Components/FashionTrends';



function App() {
  return (
    <div className="App">

    <Nav />  
    <Homepage />
    <Product />
    <FashionTrends />
    </div>
  );
}

export default App;
