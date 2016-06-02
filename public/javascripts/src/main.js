import React from 'react';
import ReactDOM from 'react-dom';
import Sachin from './components/Sachin';
import appUtils from './utils/appUtils';
 
appUtils.readFile();
appUtils.getAwards();
setTimeout(function(){
  ReactDOM.render(<Sachin />,document.getElementById('sachin'));
},0);
