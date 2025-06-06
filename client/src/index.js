import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './JS/store/store';
import {Provider} from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* lien entre rect et redux */}
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


