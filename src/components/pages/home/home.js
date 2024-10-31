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
        <Reveal element={'h1'} textContent={'The October Photoshoot, '}/>
        <Reveal element={'h1'} textContent={'Interplaying light & subtly accentuating'}/>
        <Reveal element={'h1'} textContent={'the handbag’s form, forming a narrative'}/>
        <Reveal element={'h1'} textContent={'that elevates beyond accessory.'}/>

      </div>
      <Gallery/>
    </section>
  </main>);
}

export default Home;