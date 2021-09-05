import React from 'react';
import ReactDOM from 'react-dom';
import './styles/spectre/spectre.min.css';
import './styles/spectre/spectre-exp.min.css';
import './styles/spectre/spectre-icons.min.css';
import './styles/index.css';
import BoxMain from './containers/Main';

ReactDOM.render(
  <React.StrictMode>
    <BoxMain />
  </React.StrictMode>,
  document.getElementById('root')
);