import "./App.css";
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTxt="Home" homeTxt="About"/>
      <div className="container my-10">
        <router>
          <Switch>
            <Route exact path="/" TextForm component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </router>
        <TextForm
          heading="Enter The Text :"
          TextForm
          btn1="Click to make Text in Uppercase"
          btn2="Click to make Text in LowerCase"
          btn3="Clear Text"
          btn4="Click to Listen Text"
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
