// App.js
import React from "react";
import './home.css';
import Reveal from "../../atoms/text-reveal";
import ParallaxImage from "../../atoms/parralax-image";
import Gallery from "../../molecules/gallery/gallery";

function Home() {
  return (<main className="home">
    <section className="section-one">
      <div className="section-one-title">
        <Reveal element={'h1'} textContent={'Esoteric Eyew̶e̶a̶r̶'}/>
        <Reveal element={'h1'} textContent={'Forming a narrative that'}/>
        <Reveal element={'h1'} textContent={'elevates beyond accessory.'}/>
        <Reveal element={'h1'} textContent={'For the professional.'}/>

      </div>
      <Gallery/>
    </section>
  </main>);
}

export default Home;