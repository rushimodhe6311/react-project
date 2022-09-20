import React, { useState } from "react";

export default function TextForm(props) {
  const [Text,setText]=useState("")
const convertToUpperCase=()=>{
   let newText=Text.toUpperCase();
    setText(newText)
    console.log(Text+" convertToUpperCase");
}
const handleOnChange=(event)=>{
    console.log("onchange event");
  setText(event.target.value);
}
const convertToLowerCase=()=>{
  let newText=Text.toLowerCase();
  setText(newText)
}
const clearAll=()=>{
    setText('')
}
const handleCopyText=()=>{
    //var text=document.getElementsByClassName("my-text-box");
    var text=document.getElementById("my-text-box");
    console.log("copy"+text.value);
    console.log("text"+text);
    text.value.select();
    navigator.clipboard.writeText(text.value);
}
const removeExtraWhiteSpaces=()=>{
    let newText=Text.split(/[ ]+/);
    console.log("remove "+newText)
        setText(newText.join(" "))
}
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2 className="my-3">{props.heading}</h2>
                <textarea
                class="form-control my-text-box"
                id="exampleFormControlTextarea1 my-text-box"
                rows="8"
                placeholder="enter text here"
                onChange={handleOnChange}
                value={Text}
                style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode=='dark'?'white':'black'}}
                //style={{color:props.mode==='dark'?'white':'black'}}
                >{Text}</textarea>
            </div>
      <button  onClick={convertToUpperCase}  className="btn btn-primary mx-1">Convert to UpperCase</button>
      <button onClick={convertToLowerCase} className="btn btn-primary mx-1">Convert to  Lowercase</button>
      <button onClick={clearAll} className="btn btn-primary mx-1">Clear Text</button>
      <button onClick={handleCopyText} className="btn btn-primary mx-1">Copy Text</button>
      <button onClick={removeExtraWhiteSpaces} className="btn btn-primary">Remove Extra White Spaces</button>
    </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>words present and characters are</p>
            <h2>preview</h2>
            <p>{Text.length>0?Text:"Enter somthing in the textbox"}</p>
      </div>
      </>
  );
  }
