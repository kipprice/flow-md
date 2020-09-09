import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './models';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root')
);