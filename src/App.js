// App.js
import React from "react";
import './App.css';

//components
import Header from './components/molecules/header/simple/header';
import PageContent from './components/pages/pageContent.js';
import Footer from './components/molecules/footer/small/footer.js';
//context - Make sure to use the correct import name here

function App() {
 

  return (

      <div className="App">
        {/* <div className='grid-overlay'></div> */}
        <Header/>
          <PageContent/>
          <Footer/>
        
      </div>

  );
}

export default App;
