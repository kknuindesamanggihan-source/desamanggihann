import React from 'react';
import Hero from '../components/Hero';
import JelajahDesa from '../components/home/jelajah';
import PetaDesa from '../components/home/petaDesa';
import Footer from '../components/Footer';
import CpButton from '../components/cpButton';
import RingkasanDesa from '../components/home/ringkasan';


function HomePage() {
  return (
    <main>
      <Hero />
      <RingkasanDesa/>
      <div id='jelajah-desa'>
       <JelajahDesa/>
      </div>

      <PetaDesa/>
      <CpButton/>
      <Footer />

    </main>
  );
}

export default HomePage;
