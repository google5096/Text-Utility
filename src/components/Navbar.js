import React,{useState} from 'react';

export default function Navbar(props) {

  // const [props.mode,setprops.mode] = useState({
  //   color: 'black',
  //   backgroundColor : 'white'
  // });

  // const darkprops.mode=()=>{
  //   console.log('Dark props.mode is enabled !');
  //   if(props.mode.color==='black'){
  //     setprops.mode({
  //     color: 'white',
  //     backgroundColor : 'black'
  //    })
  //   }
  //   else{
  //     setprops.mode({
  //       color: 'black',
  //       backgroundColor : 'white'
  //      })
  //   }
  // }

  return (
    <div className='' style={props.mode} >
    <nav className="navbar navbar-expand-lg bg-body-tertiary"style={props.mode} >
  <div className="container-fluid" style={props.mode}>
    <a className="navbar-brand fw-bold" href="/" style={props.mode}>{props.projectN}</a>
    <div className="d-flex" role="search" style={props.mode}>
        
       <button className="btn btn-outline-success me-1" type="submit" style={props.mode} >Sign up</button> 
        <button className="btn btn-outline-success" type="submit" style={props.mode} >Login</button> 
        <button className="btn btn-outline-primary ms-1" type="submit" onClick={props.clickMode} style={props.mode} >Enable DarkMode</button> 
      </div>
      
  </div>
</nav>
    </div>
  );
}
