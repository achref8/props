import React from 'react';
import './App.css';


function Title(props) {
  return (
    <div>
<h3 style={props.style}>{props.children}</h3>

    
    </div>
  );
}

export default Title;