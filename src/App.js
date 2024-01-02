import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTxt="AboutTextUtils" />
      <div className="container my-10" >
        <TextForm
          heading="Enter The Text :"
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



