import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="Text-Analyzer"/>

        <TextForm
          heading="Enter The Text :"
          TextForm
          btn1="Click to make Text in Uppercase"
          btn2="Click to make Text in LowerCase"
          btn3="Clear Text"
          btn4="Click to Listen Text"
        />

    
    </>
  );
}

export default App;
