import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
      <Global styles={css`
        html,body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Roboto';
        }

        * {
          box-sizing: border-box;
        }

      `}></Global>
      <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);