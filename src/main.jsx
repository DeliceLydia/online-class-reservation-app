import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './redux/CreateStore';
import App from './App';
import './index.css';

const store = createStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>,
)