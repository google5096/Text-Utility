import React ,{useState} from 'react';

export default function Textform(props) {
const upperCaser=()=>{
    console.log('Uppercase is clicked ..' + text) ;
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase ' , 'Successfully ! ')
}

const lowerCaser=()=>{
    console.log('Lowercase is clicked ..') ;
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase ' , 'Successfully ! ')
}

const handleonChange=(event)=>{
    console.log('On change') ;
    setText(event.target.value);
}

const clear=()=>{
    console.log('clear text is clicked ');
    let newText='';
    setText(newText) ;
    props.showAlert('Text is Cleared  ' , 'Successfully ! ')
}

const copy=()=>{
  const newText= text.slice(0,text.length);
  setText(newText);
  props.showAlert('Copy of text is finished  ' , 'Successfully ! ')
}
const [text,setText] = useState("");

  return (
    <div className='p-3 mt-3'  style={props.mode} >
    <h2 >{props.heading} </h2>
    <div className="form-floating">
  <textarea className="form-control" value={text} placeholder="Leave a comment here" onChange={handleonChange} id="floatingTextarea2" style={{height: '100px'}}></textarea>
  <label htmlFor="floatingTextarea2"></label> 
  <button className='btn btn-success my-2' onClick={upperCaser} style={props.mode} >UpperCase</button>
  <button className='btn btn-success my-2 mx-2' onClick={lowerCaser} style={props.mode} >LowerCase</button>
  <button className='btn btn-success my-2 mx-2' onClick={copy} style={props.mode} >Copy Text</button>
  <button className='btn btn-success my-2 mx-2' onClick={clear} style={props.mode} >Clear Text</button>
  
</div>
<div className="info my-1 border bg-red rounded p-2 m-2">
    <h5 className='text-primary'>Useful  Information :</h5>
    <p className=''>Number of Words: {text.split(" ").filter((e) => e.length !== 0).length}</p>
     <p className='' >Number of Character : {text.length} </p>
     <p>Time required to read : <strong className='text-danger'>{0.008*text.split(" ").length} </strong>  minutes</p>
     <h3 className='text-primary'>Preview :</h3>
     <p >{text}</p>
</div>
{/* <button className="btn btn-outline-primary mx-1" type="submit" onClick={props.clickMode} style={props.mode}>Enable Darkmode</button> */}
    </div>
  );
}
