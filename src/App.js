import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';

import React, { useState} from 'react';


function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not 
  return (
    <>
 <Navbar  title="TextUtils"  mode={mode} aboutText="About us" />
 {/*<Navbar /> */}

  <div className="container my-3">

 <TextForm heading="Enter the text to analyze below" />

    <About />
  </div>


    </>
    
  );
}

export default App;
