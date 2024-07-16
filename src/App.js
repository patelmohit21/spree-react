import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import Homepage from './Components/Homepage';
import Product from './Components/Product';
import FashionTrends from './Components/FashionTrends';
import Trending from './Components/Trending';
import Collection from './Components/Collection';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">

    <Nav />  
    <Homepage />
    <Product />
    <FashionTrends />
    <Trending />
    <Collection />
    <Footer />
    </div>
  );
}

export default App;
