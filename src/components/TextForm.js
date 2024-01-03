import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case Button Clicked" + Text);
    let newtext = Text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    // console.log("Lower case Button Clicked" + Text);
    let newtext = Text.toLowerCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleClrClick = () => {
    // console.log("Clear Text Button Clicked");
    let newtext = " ";
    setText(newtext);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    // console.log("Speak Button Clicked")
    msg.text = Text;
    window.speechSynthesis.speak(msg);
  };

  const [Text, setText] = useState("");
  // setText =("New Text")
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: props.mode === "dark" ? "white" : "#042743" }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.heading}
          </label>

          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
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
      <div
        className="container my-3"
        style={{ backgroundColor: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Word Summary</h2>
        <p>
          {Text.split(" ").length} Words and {Text.length} Characters!
        </p>
        <p>{0.08 * Text.split(" ").length} min time in which you can read !!</p>
        <h3>Preview Text</h3>
        <h4>In UpperCase!</h4>
        <p>{Text.toUpperCase()}</p>
      </div>
      <div>
        <h4>In LowerCase!</h4>
        <p>{Text.toLowerCase()}</p>
      </div>
    </>
  );
}
