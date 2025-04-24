import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
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
