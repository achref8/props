import React from 'react';
import './App.css';



function Photo(props) {
  return (
    <div>
<img src={props.src}/>
  <h3>{props.nameimg}</h3>
    </div>
  );
}

export default Photo;