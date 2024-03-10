import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
  };
 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClrClick = () => {
    setText('');
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
  };

  const [Text, setText] = useState("");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
      <div className="container" style={myStyle}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows={8}
          />
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleUpClick}
          >
            {props.btn1}
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleLoClick}
          >
            {props.btn2}
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={handleClrClick}
          >
            {props.btn3}
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={speak}
          >
            {props.btn4}
          </button>
        </div>
      </div>
      <div className="container" style={myStyle}>
        <h2>Word Summary</h2>
        <p>
          {Text.split(" ").length} Words and {Text.length} Characters!
        </p>
        <p>
          {0.08 * Text.split(" ").length} min time in which you can read !!
        </p>
        <h3>Preview---</h3>
        <h4>In UpperCase!</h4>
        <p>{Text.toUpperCase()}</p>
        <h3>In LowerCase!</h3>
        <p>{Text.toLowerCase()}</p>
      </div>
    </>
  );
}
