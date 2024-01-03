
import "./App.css";
import React, { useState } from 'react';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode =()=> {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutTxt="Home" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-10" >
        <TextForm 
          heading="Enter The Text :" mode={mode}
          TextForm
          btn1="Click to make Text in Uppercase"
          btn2="Click to make Text in LowerCase"
          btn3="Clear Text"
          btn4="Click to Listen Text"
        />
        <About/>
      </div>
    </>
  );
}

export default App;



