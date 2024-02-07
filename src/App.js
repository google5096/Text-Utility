import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Logform from './components/login-form';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/alert';

function App() {  
  // hook  
const [mode,setMode]=useState({
  color: 'black',
  backgroundColor : 'white'
});

const clickMode=()=>{
if(mode.color ==='black'){
  console.log('Dark mode is enabled');
  setMode({
    color:'white',
    backgroundColor : 'black'
  });
  showAlert("Dark mode is enabled","success")
  // showAl()     
}
else{
  console.log('Light mode is enabled'); 
  setMode({ 
    color: 'black' ,
    backgroundColor : 'white'
  });
  showAlert("Light mode is enabled","danger")
  // showAl()
}
}

const [alert,setAlert] = useState({
    msg : 'message',
    type : 'success'
  });

const showAlert=(message,type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(()=>{
    setAlert({
      msg:'MODE',
      type:'CHANGE SUCCESFULLY'
    })
      
  },3000)
}


  return (
    <>
    <div className="main " style={mode} >  
    <Navbar projectN="Kargil Memories❤️" mode={mode} clickMode={clickMode}/>
    <div className='' >
      {/* Alert page */}
    <Alert alert={alert}   />
    </div>
    {/* // Login Form */}
     {/* <div className=''>
    { <Logform/> }
    </div>  */} 
    <div className={`border border-${alert.type} m-2 rounded`} > 
    <div className='mx-5 '> 
      <Textform heading="Enter Memories of Kargil "  clickMode={clickMode} showAlert={showAlert}/>
    </div>
    
<div className="accordion mx-5 my-5 p-3" id="accordionExample" style={mode} onClick={clickMode}>
  <h2 className="text-center fw-bold">WAR SECRETS </h2>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mode}>
        Kargil War
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The Kargil War, fought between India and Pakistan in 1999, was a conflict that took place in the Kargil district of Jammu and Kashmir. While many aspects of the war are well-documented, some details may be classified or not widely known.<br></br> <br /><strong> Surprise Element:</strong> One of the major secrets of the Kargil War was the element of surprise. The conflict caught both the Indian military and the international community off guard. The Pakistani forces, disguised as militants, infiltrated into the Indian territory, and their presence was initially misinterpreted.
<br /><br />
<strong>Infiltration by Regular Army Personnel: </strong> Initially, Pakistan denied the involvement of its regular army in the conflict, portraying the infiltrators as mujahideen or militants. However, later evidence revealed the direct involvement of Pakistani regular army soldiers.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mode}>
      Rezangla War
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>Role of Northern Light Infantry (NLI):</strong> The Pakistani army deployed soldiers from the Northern Light Infantry, a primarily Pakistan-administered force composed of personnel from the Northern Areas (now Gilgit-Baltistan). This allowed Pakistan to maintain plausible deniability initially.
<br /> <br />
<strong>Tactics and Terrain:</strong> The Pakistani forces took advantage of the difficult mountainous terrain in Kargil. They occupied strategic heights, making it challenging for the Indian forces to dislodge them. The conflict took place at high altitudes, with extreme weather conditions adding to the complexity of military operations.
<br /> <br />
<strong>Air Operations:</strong> The Indian Air Force played a crucial role in the conflict by conducting air strikes against the Pakistani positions. The use of air power was a turning point in the war and helped regain control of strategic locations.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mode}>
      Galwan War
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>International Diplomacy:</strong> The Kargil War had significant diplomatic implications. The international community, including the United States and other Western countries, pressured Pakistan to withdraw its forces. The conflict brought the longstanding Kashmir issue to the forefront of global attention.
<br /><br />
<strong>Nuclear Threat:</strong> There were concerns about the potential escalation of the conflict to a nuclear level, given that both India and Pakistan were nuclear-armed nations. International mediation and diplomatic efforts were crucial in preventing such an escalation.
<br /> <br />
While many details of the Kargil War have been declassified, some specifics may still be kept confidential for security reasons. It's important to rely on official records, historical accounts, and credible sources to understand the events and dynamics of the Kargil War.
      </div>
    </div>
  </div>
</div>
</div>
</div>
</>
    );
}

export default App;
