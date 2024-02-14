import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let upText = text.toUpperCase();
        setText(upText)
    }
    const handleLowClick = ()=>{
        let lowerCaseText = text.toLowerCase() //text in lower case
        setText(lowerCaseText)
    }
    const clearText = ()=>{
        setText("")
    }
    const copyText = ()=>{
        // function to copy the text 
        var text = document.getElementById("exampleFormControlTextarea1")
        // text.focus()
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const removeSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChage = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    let originaltext = text // original text
  return (
<>
<div className = "container">
    <h2>{props.heading}</h2>
    <div className="form-group">
    <textarea className="form-control my-3" onChange={handleOnChage} value = {text} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={removeSpaces}>Trim Text</button>
    <button className="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>
    </div>
</div>
<div className='container my-3'>
    <h2>Your text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>Time to read {0.042 * text.split(" ").length}</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
  )
}
