import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './components/ToDoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/stw.css'

ReactDOM.render(
  <React.StrictMode>
     <ToDoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
