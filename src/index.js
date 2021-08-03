import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ResetStyled from './shared/themes/resetStyled';
import 'antd/dist/antd.css';
import 'react-slideshow-image/dist/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <ResetStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
