import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };

  const handleUpText = () => {
    // console.log("convert to uppercssemn f")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been uppercase',"success")
  };

  const handleLowText = () => {
    // console.log("convert to uppercssemn f")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been lowercase',"success")
  };

  const handleClearText = () => {
    // console.log("convert to uppercssemn f")
    let newText = "";
    setText(newText);
    props.showAlert('Text has been cleared',"success")
  };

  const handlePunctuations = (inputtext) => {
    const punctuationsRegex = /[.,!~`#$%^&*(){}[\]:;'",|\\]/g;
    const newText = inputtext.replace(punctuationsRegex, "");
    setText(newText);
    props.showAlert('Punctuations has been removed',"success")
  };

  return (
    <>
      <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleTextChange}
            style = {{backgroundColor: props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}}
          ></textarea>
        </div>
        <button disabled = {text.length === 0}className="btn btn-primary mx-2 my-2" onClick={handleUpText}>
          Convert to Uppercase
        </button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-2 my-2" onClick={handleLowText}>
          Convert to Lowercase
        </button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled = {text.length === 0}className="btn btn-primary mx-2 my-2" onClick={() => handlePunctuations(text)}>
          Remove Punctuation
        </button>
        
      </div>
      
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>Time to read text - {0.008 * text.split(" ").length}</p>
        <p>No. of Sentences - {text.split(".").length - 1}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
