import React from 'react'
import About from './components/About';
import AllInOne from './components/AllInOne';
import Developers from './components/Developers';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Developers />
        <AllInOne />
        <Subscribe />
        <Footer />
    </div>
  );
}

export default App;
