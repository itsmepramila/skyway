import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { ChakraProvider } from '@chakra-ui/react'

/*
==========================================
  Title:  OVERSEAS EMPLOYMENT AGENCY
  Author: github.com/ryan5481
  Date:   24 July 2023
==========================================
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
