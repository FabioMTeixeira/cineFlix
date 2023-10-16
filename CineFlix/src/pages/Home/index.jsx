import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

function Home() {

  return (
    <div className='container-home'>
      <Header />

      <Footer />
    </div>
  );
}

export default Home;
