import React, { useState } from "react";

//whenever we have to change the state use setText function

export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleOnClick = () => {
    // console.log("Upper case was clicked");
    let convertedText = text.toUpperCase();
    setText(convertedText);
  };

  const handleOnLClick = () => {
    // console.log("Upper case was clicked");
    let convertedText = text.toLowerCase();
    setText(convertedText);
  };

  const SpeakOnClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const ClearOnClick = () => {
    // console.log("Upper case was clicked");
    let convertedText = '';
    setText(convertedText);
  };

  const CopyOnClick = () => {
    let textdata = document.getElementById("myBox");
    textdata.select();
    navigator.clipboard.writeText(textdata.value);
  };
  const RemoveSpaceOnClick = ()=> {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color : props.mode === 'dark' ? 'white':'#042743'}}>
        <h1>{props.heading} </h1>

        <div className="form-group">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            style={{backgroundColor : props.mode === 'dark' ? '#042743':'white' , color : props.mode === 'dark' ? 'white':'black'}}
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handleOnClick}>
            Convert to Upper Case
          </button>

          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleOnLClick}
          >
            Convert to Lower Case
          </button>

          <button className="btn btn-primary my-2 mx-2" onClick={SpeakOnClick}>
            Speak the written text
          </button>

          <button className="btn btn-primary my-2 mx-2" onClick={ClearOnClick}>
            Clear text
          </button>

          <button className="btn btn-primary my-2 mx-2" onClick={CopyOnClick}>
            Copy text
          </button>

          <button className="btn btn-primary my-2 mx-2" onClick={RemoveSpaceOnClick}>
            Remove Space
          </button>

        </div>
      </div>

      <div className="container" style={{color : props.mode === 'dark' ? 'white':'#042743'}} >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : 'enter something'}</p>
      </div>
    </>
  );
}
