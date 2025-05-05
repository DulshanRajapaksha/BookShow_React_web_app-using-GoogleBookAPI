import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Hero from './component/Hero';
import Footer from './component/Footer';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('best sellers');

  return (
    <div className='min-h-screen bg-gray-900'>
      <Navbar handleSearch={(term) => setSearchQuery(term)} />
      <Banner />
      <Hero searchQuery={searchQuery} />
      <Footer/>
    </div>
    
  );
};

export default App;