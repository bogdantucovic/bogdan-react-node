import React from 'react';
import ReactDom from 'react-dom';
import Main from './Main.jsx';
import './assets/scss/index.scss';

ReactDom.render(
  <Main/>, 
  document.getElementById('app')
);