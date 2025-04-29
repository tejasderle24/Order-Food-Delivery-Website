import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <div className='md:px-12 lg:px-18 xl:px-24'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
