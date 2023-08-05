import React, { useState } from "react"; //here useState is a hook

export default function TextForm(props) {

  const [text, setText] = useState("enter text here"); //using this we change the state

  const handleOnupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOndownclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleclear = ()=> {
    setText("");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  function nospace(element){
    if(element != ''){
      return element;
    }
  }

  return (
    <div className="mb-3 px-4 py-4">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h2>{props.heading}</h2>
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="10"
        value={text}
        onChange={handleOnchange}
      ></textarea>
      <button disabled = {text.length == 0} className={`btn btn-primary my-3 mx-1`} onClick={handleOnupclick}>
        Convert to Uppercase
      </button>
      <button disabled = {text.length == 0} className={`btn btn-primary my-3 mx-1`} onClick={handleOndownclick}>
        Convert to Lowercase
      </button>
      <button disabled = {text.length == 0} className={`btn btn-primary my-3 mx-1`} onClick={handleclear}>
        Clear Text
      </button>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter(nospace).length} words and {text.length} characters
        </p>
      </div>
    </div>
  );
}
