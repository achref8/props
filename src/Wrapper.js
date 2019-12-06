import React from 'react';
import './App.css';

import Title from './Title' ;
import Photo from './Photo';
import img from "./source/arduino.jpg"


  
function Wrapper() {

  return (
    <div>
      {
  <Photo src= {img}/>
}


<Title style={{

  color:"red"

}}>My Name here</Title>

<Title small><h5>My job here</h5></Title>
    </div>
  );
}

export default Wrapper;